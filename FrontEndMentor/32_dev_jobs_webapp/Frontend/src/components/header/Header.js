import React from 'react';
import './Header.scss';

function Header() {
  return (
    <header>
      <div className="flex">
        <h1>devjobs</h1>
        <div className="theme-switcher" />
      </div>
      <div className="search-bar">
        <div className="search-field">
          <img src="" alt="" />
          <input
            type="text"
            name="search"
            placeholder="Filter by title, companies, expertise..."
          />
        </div>
      </div>
    </header>
  );
}

export default Header;
