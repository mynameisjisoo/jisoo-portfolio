import React from 'react';
import styled, { css, ThemeContext, ThemeProvider } from 'styled-components';
import { darkTheme } from '../styles/theme';

const Nav = styled.nav`
  ${({ theme }) => {
    return css`
      background-color: ${theme.colors.black};
    `;
  }}

  display: flex;
`;

const Menu = styled.ul`
  display: flex;
`;

const MenuItem = styled.li`
  margin: 0 0.5rem 0 0;
  font-size: 1.5rem;
`;

const Navbar = ({ theme, ...rest }) => {
  return (
    <Nav theme={theme} {...rest}>
      <Menu>
        <MenuItem>Home</MenuItem>
        <MenuItem>About Me</MenuItem>
        <MenuItem>Timeline</MenuItem>
        <MenuItem>Skills</MenuItem>
        <MenuItem>Works</MenuItem>
        <MenuItem>Contact</MenuItem>

        <button class='navbar__toggle-btn'>
          <i class='fas fa-bars'></i>
        </button>
      </Menu>
    </Nav>
  );
};
export default Navbar;
