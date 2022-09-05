import React from 'react';
import { Link } from 'react-router-dom';
import './_Header.module.scss';
import Toggle from '../custom/Toggle';
import Logo from '../../assets/svg/desktop/logo.svg';
import IconThemeLight from '../../assets/svg/desktop/icon-sun.svg';
import IconThemeDark from '../../assets/svg/desktop/icon-moon.svg';

function Header() {
  const btnThemeClickHandler = () => {
    const body = document.querySelector('body');
    body.classList.toggle('dark-theme');
  };

  return (
    <header>
      <div className="flex-row">
        <Link to="/">
          <img src={Logo} alt="devjobs logo" id="logo-devjobs" />
        </Link>
        <div className="theme-switcher flex-row">
          <img src={IconThemeLight} alt="" />
          <Toggle
            onClick={btnThemeClickHandler}
            id="dark-theme-slider"
            name=""
            ariaLabel="dark theme toggle"
          />
          <img src={IconThemeDark} alt="" />
        </div>
      </div>
    </header>
  );
}

export default Header;
