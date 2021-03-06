const express = require('express');
const next = require('next');
const helmet = require('helmet');
const path = require('path');

const port = process.env.PORT || 3000;
const app = next({ dev: process.env.NODE_ENV !== 'production' });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();
  server.use(helmet());
  server.get('/', (req, res) => {
    return app.render(req, res, '/', req.query);
  });

  server.get('/kampania', (req, res) => {
    return app.render(req, res, '/kampania', req.query);
  });
  server.get('/o-nas', (req, res) => {
    return app.render(req, res, '/o-nas', req.query);
  });
  server.get('/encyklopedia', (req, res) => {
    return app.render(req, res, '/encyklopedia', req.query);
  });
  server.get('/mierniki', (req, res) => {
    return app.render(req, res, '/mierniki', req.query);
  });
  server.get('/kontakt', (req, res) => {
    return app.render(req, res, '/kontakt', req.query);
  });
  server.get('/polityka-prywatnosci', (req, res) => {
    return app.render(req, res, '/polityka-prywatnosci', req.query);
  });
  server.get('/service-worker.js', (req, res) => {
    const filePath = path.join(__dirname, '.next/static', req.path);
    app.serveStatic(req, res, path.resolve(filePath));
  });
  server.all('*', (req, res) => {
    return handle(req, res);
  });

  server.listen(port, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});
