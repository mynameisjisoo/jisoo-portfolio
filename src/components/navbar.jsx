import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Switch } from 'antd';
import React from 'react';
import styled, { css } from 'styled-components';
import { darkTheme } from '../styles/theme';

const Shape = styled.div`
  height: 5rem;
  & {
    overflow: hidden;
    position: relative;
  }
  &::before {
    content: '';
    font-family: 'shape divider from ShapeDividers.com';
    position: absolute;
    bottom: -1px;
    left: -1px;
    right: -1px;
    top: -1px;
    z-index: 3;
    pointer-events: none;
    background-repeat: no-repeat;
    background-size: 100% 90px;
    background-position: 50% 0%;
    background-image: url('data:image/svg+xml;charset=utf8, <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 35.28 2.17" preserveAspectRatio="none"><path d="M0 .5c3.07.55 9.27-.42 16.14 0 6.88.4 13.75.57 19.14-.11V0H0z" fill="%23fbd8c2"/><path d="M0 1c3.17.8 7.29-.38 10.04-.55 2.75-.17 9.25 1.47 12.67 1.3 3.43-.17 4.65-.84 7.05-.87 2.4-.02 5.52.88 5.52.88V0H0z" opacity=".5" fill="%23fbd8c2"/><path d="M0 1.85c2.56-.83 7.68-.3 11.79-.42 4.1-.12 6.86-.61 9.58-.28 2.73.33 5.61 1.17 8.61 1 3-.19 4.73-.82 5.3-.84V.1H0z" opacity=".5" fill="%23fbd8c2"/></svg>');
  }

  @media (min-width: 768px) {
    &::before {
      background-size: 100% 90px;
      background-position: 50% 0%;
    }
  }

  @media (min-width: 1025px) {
    &::before {
      bottom: -0.1vw;
      left: -0.1vw;
      right: -0.1vw;
      top: -0.1vw;
      transform: scaleX(4);
      transform-origin: 100% 0;
      animation: 200s infinite alternate shape-anim-5545 linear;
      background-size: 100% 98px;
      background-position: 50% 0%;
      background-image: url('data:image/svg+xml;charset=utf8, <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 6" preserveAspectRatio="none"><path d="M0 0a1 1 0 005 0 1 1 0 003 0 1 1 0 004 0 1 1 0 003 0 1 1 0 002 0 1 1 0 005 0 1 1 0 007 0 1 1 0 005 0 1 1 0 0010 0 1 1 0 005 0 1 1 0 008 0 1 1 0 005 0 1 1 0 006 0 1 1 0 005 0 1 1 0 0011 0 1 1 0 005 0 1 1 0 008 0 1 1 0 006 0 1 1 0 008 0 1 1 0 0010 0 1 1 0 007 0z" fill="%23222831"/></svg>');
    }
  }
  @media (min-width: 2100px) {
    &::before {
      background-size: 188% calc(2vw + 98px);
    }
  }

  @keyframes shape-anim-5545 {
    100% {
      transform: scaleX(4) translateX(calc(100% - (100% / 4)));
    }
  }
`;

const Nav = styled.nav`
  ${({ theme }) => {
    return css`
      background-color: ${theme.colors.black};
      color: ${theme.colors.silver};
      font-size: ${theme.fonts.size.base};
    `;
  }}

  display: flex;
  justify-content: center;

  /* position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  overflow: hidden;
  line-height: 0; */
`;

const Menu = styled.ul`
  display: flex;
`;

const MenuItem = styled.li`
  margin: 0 1.5rem 0 0;
  font-size: 1.5rem;
`;

// const ToggleButton = styled(
//   <Switch
//     checkedChildren={<FontAwesomeIcon icon={faMoon} />}
//     unCheckedChildren={<FontAwesomeIcon icon={faSun} />}
//     defaultChecked
//   />
// )``;

const Navbar = ({ theme, ...rest }) => {
  return (
    <>
      <Nav theme={theme} {...rest}>
        <Menu>
          <MenuItem>Home</MenuItem>
          <MenuItem>About Me</MenuItem>
          <MenuItem>Timeline</MenuItem>
          <MenuItem>Skills</MenuItem>
          <MenuItem>Works</MenuItem>
          <MenuItem>Contact</MenuItem>
          {/* <ToggleButton></ToggleButton> */}
        </Menu>
      </Nav>
      <Shape></Shape>
      {/* <div>
        <svg
          data-name='Layer 1'
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 1200 120'
          preserveAspectRatio='none'
        >
          <path
            d='M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z'
            class='shape-fill'
          ></path>
        </svg>
      </div> */}
    </>
  );
};
export default Navbar;
