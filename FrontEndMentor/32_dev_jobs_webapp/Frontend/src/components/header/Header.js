import React from 'react';
// import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import './_Header.module.scss';
import Toggle from '../custom/Toggle';
import Logo from '../../assets/svg/desktop/logo.svg';
import IconThemeLight from '../../assets/svg/desktop/icon-sun.svg';
import IconThemeDark from '../../assets/svg/desktop/icon-moon.svg';

function Header() {
  // const themeBtnRef = useRef(null);
  const btnThemeClickHandler = () => {
    const body = document.querySelector('body');
    body.classList.toggle('dark-theme');
  };

  // const query = window.matchMedia('(prefers-color-scheme: dark)');
  // const body = document.querySelector('body');
  // // console.log(query, query.matches, body.classList);
  // if (!query.matches || body.classList.includes(!'dark-theme')) {
  //   const btn = document.querySelector('#dark-theme-slider');
  //   console.log(btn, 'activated');
  //   btn.click();
  // }

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
            // ref={themeBtnRef}
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
