/* eslint-disable consistent-return */
// const passport = require('passport');

// export default (req, res, next) => {
//   passport.authenticate('auth0', (err, user) => {
//     if (err) return next(err);
//     if (!user) return res.redirect('/login');
//     req.logIn(user, (error) => {
//       if (error) return next(error);
//       console.log('logged succesfully');
//       // res.redirect('/');
//     });
//   })(req, res, next);
// };

import passport from 'passport';
import nextConnect from 'next-connect';
import localStrategy from '../../../api_modules/passport';
import ValidationError from '../../../api_modules/validationError';
import { encryptSession } from '../../../api_modules/iron';
import { setTokenCookie } from '../../../api_modules/auth-cookies';
import resJson from '../../../api_modules/resJsonStandardized';

const formName = 'signIn';

const authenticate = (method, req, res) =>
  new Promise((resolve, reject) => {
    passport.authenticate(method, { session: false }, (error, token) => {
      if (error) {
        reject(error);
      } else {
        resolve(token);
      }
    })(req, res);
  });

passport.use(localStrategy);

export default nextConnect()
  .use(passport.initialize())
  .post(async (req, res) => {
    try {
      const errors = [];
      const user = await authenticate('local', req, res);
      if (user instanceof ValidationError) {
        errors.push(user);
        res.json(resJson(formName, false, 'Logowanie nie udało się', errors));
        console.log('nie udało się');
      }
      // session is the payload to save in the token, it may contain basic info about the user
      const session = { ...user };
      // The token is a string with the encrypted session
      const token = await encryptSession(session);

      setTokenCookie(res, token);
      console.log('udało się');
      res.json(resJson(formName, true, 'Logowanie przebiegło pomyślnie', []));
    } catch (error) {
      console.error(error);
      console.log('a teraz spierdalaj');
      res.json(resJson(formName, false, 'Napotkaliśmy jakiś błąd', []));
    }
  });
