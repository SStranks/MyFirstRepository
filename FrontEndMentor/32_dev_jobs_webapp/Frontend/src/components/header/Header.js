import React from 'react';
import Button from '../custom/Button';
import Checkbox from '../custom/Checkbox';
import './Header.scss';
import Logo from '../../assets/svg/desktop/logo.svg';
import IconThemeLight from '../../assets/svg/desktop/icon-sun.svg';
import IconThemeDark from '../../assets/svg/desktop/icon-moon.svg';
import IconSearch from '../../assets/svg/desktop/icon-search.svg';
import IconFilter from '../../assets/svg/desktop/icon-location.svg';

function Header() {
  return (
    <header>
      <div className="flex-row">
        <img src={Logo} alt="devjobs logo" id="logo-devjobs" />
        <div className="theme-switcher flex-row">
          <img src={IconThemeLight} alt="" />
          <div className="toggle" />
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
          <div className="search-bar__compartment__sub">
            <label className="checkbox-container" htmlFor="full=time">
              <input type="checkbox" id="full-time" name="full-time" />
              <span className="checkbox" />
            </label>
          </div>
          <Checkbox text="test" id="full-time2" name="full-time2" />
          <Button type="button" />
        </div>
      </div>
      {/* <div className="search-bar">
        <div className="search-field flex-row">
          <img src={IconSearch} alt="" />
          <input
            type="text"
            name="search"
            placeholder="Filter by title, companies, expertise..."
          />
          <img src={IconFilter} alt="" />
          <input
            type="text"
            name="filter"
            placeholder="Filter by location..."
          />
          <input type="checkbox" name="full-time" />
          <Button type="button" />
        </div>
      </div> */}
    </header>
  );
}

export default Header;
