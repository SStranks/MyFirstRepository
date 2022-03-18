import React from 'react';

const Header = () => {
  const btnThemeClickHandler = () => {
    const body = document.querySelector('body');
    body.classList.toggle('dark-theme');
  };

  return (
    <header>
      <h1>
        <a href="./">Where in the world?</a>
      </h1>
      <div className="theme-toggle">
        <button
          type="button"
          aria-label="dark theme button"
          onClick={btnThemeClickHandler}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="-3 -3 30 30">
            <path
              fill="#FFF"
              fillRule="evenodd"
              d="M13 0c.81 0 1.603.074 2.373.216C10.593 1.199 7 5.43 7 10.5 7 16.299 11.701 21 17.5 21c2.996 0 5.7-1.255 7.613-3.268C23.22 22.572 18.51 26 13 26 5.82 26 0 20.18 0 13S5.82 0 13 0z"
            />
          </svg>
        </button>
        <span>Dark mode</span>
      </div>
    </header>
  );
};

export default Header;
