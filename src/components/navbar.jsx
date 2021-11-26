import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Switch } from 'antd';
import React from 'react';
import styled, { css } from 'styled-components';
import { darkTheme } from '../styles/theme';

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
`;

const Menu = styled.ul`
  display: flex;
`;

const MenuItem = styled.li`
  margin: 0 1.5rem 0 0;
  font-size: 1.5rem;
`;

const ToggleButton = styled(
  <Switch
    checkedChildren={<FontAwesomeIcon icon={faMoon} />}
    unCheckedChildren={<FontAwesomeIcon icon={faSun} />}
    defaultChecked
  />
)``;

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
        <ToggleButton></ToggleButton>
      </Menu>
    </Nav>
  );
};
export default Navbar;
