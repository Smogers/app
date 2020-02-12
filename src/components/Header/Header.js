import React, { useState } from 'react';
import Hamburger from '../Hamburger/Hamburger';
import Menu from '../Menu/Menu';
import Logo from '../../img/logo/logo_inline';
import './header.scss';
import useWindowWidth from '../../hooks/useWindowWidth';

const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const width = useWindowWidth();
  return (
    <div className="header__wrapper">
      <header className="header">
        <a href="/" className="header__a" aria-label="Strona główna">
          <Logo />
        </a>
        {width < 1024 ? (
          <>
            <Hamburger isActive={isActive} setIsActive={setIsActive} />
            <Menu isActive={isActive} />
          </>
        ) : (
          <Menu />
        )}
      </header>
    </div>
  );
};

export default Header;