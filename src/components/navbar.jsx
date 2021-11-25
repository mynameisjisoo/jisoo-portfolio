import React from 'react';

const Navbar = props => {
  return (
    <nav id='navbar'>
      <div class='navbar__logo'>
        <img
          src='imgs/favicon-tiny.png'
          alt='logo icon'
          class='navbar__logo__icon'
        />
      </div>
      <ul class='navbar__menu'>
        <li class='navbar__menu__item selected' data-link='#home'>
          Home
        </li>
        <li class='navbar__menu__item' data-link='#about'>
          About Me
        </li>
        <li class='navbar__menu__item' data-link='#skills'>
          Timeline
        </li>
        <li class='navbar__menu__item' data-link='#works'>
          Skills
        </li>
        <li class='navbar__menu__item' data-link='#contact'>
          Works
        </li>
        <li class='navbar__menu__item' data-link='#contact'>
          Contact
        </li>
      </ul>
      <button class='navbar__toggle-btn'>
        <i class='fas fa-bars'></i>
      </button>
    </nav>
  );
};
export default Navbar;
