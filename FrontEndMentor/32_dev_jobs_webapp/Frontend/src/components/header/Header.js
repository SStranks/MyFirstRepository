import React from 'react';
import Button from '../custom/Button';
import Checkbox from '../custom/Checkbox';
import Toggle from '../custom/Toggle';
import './Header.scss';
import Logo from '../../assets/svg/desktop/logo.svg';
import IconThemeLight from '../../assets/svg/desktop/icon-sun.svg';
import IconThemeDark from '../../assets/svg/desktop/icon-moon.svg';
import IconSearch from '../../assets/svg/desktop/icon-search.svg';
import IconFilter from '../../assets/svg/desktop/icon-location.svg';

function Header() {
  const btnThemeClickHandler = () => {
    const body = document.querySelector('body');
    body.classList.toggle('dark-theme');
  };

  return (
    <header>
      <div className="flex-row">
        <img src={Logo} alt="devjobs logo" id="logo-devjobs" />
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
      <div className="search-bar grid">
        <div className="search-bar__compartment">
          <div className="search-bar__compartment__sub">
            <img src={IconSearch} alt="" />
            <input
              type="text"
              name="search"
              placeholder="Filter by title, companies, expertise..."
            />
          </div>
        </div>
        <div className="search-bar__compartment">
          <div className="search-bar__compartment__sub">
            <img src={IconFilter} alt="" />
            <input
              type="text"
              name="filter"
              placeholder="Filter by location..."
            />
          </div>
        </div>
        <div className="search-bar__compartment">
          <Checkbox text="Full Time Only" id="full-time2" name="full-time2" />
          <Button type="button" text="Search" />
        </div>
      </div>
    </header>
  );
}

export default Header;
