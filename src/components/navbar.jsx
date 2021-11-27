import { faBars, faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Switch } from 'antd';
import React from 'react';
import styled, { css } from 'styled-components';
import { darkTheme } from '../styles/theme';

const Shape = styled.div`
  height: 5rem;
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
  vertical-align: middle;
  flex-direction: row;
`;

const Menu = styled.ul`
  display: flex;

  @media ${({ theme }) => (theme.device.mobile, theme.device.tablet)} {
    flex-direction: column;
    justify-content: center;
  }
`;

const MenuItem = styled.li`
  margin: 0 2rem 0 0;
  padding: 0 0.3rem;
  cursor: pointer;
  white-space: nowrap;
  text-align: center;
  /* background-color: tomato; */

  @media ${({ theme }) => (theme.device.mobile, theme.device.tablet)} {
    margin: 0.3rem 0;
  }
`;

const ThemeButton = styled(Switch)`
  background-color: transparent;
  outline: none;
  border: none;
  color: yellow;
  font-size: 1.5rem;
  margin: 0.3rem 0;
`;

const Menubar = styled.button`
  font-size: 1.5rem;
`;

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
          <ThemeButton
            checkedChildren={<FontAwesomeIcon icon={faMoon} />}
            unCheckedChildren={<FontAwesomeIcon icon={faSun} />}
            defaultChecked
          ></ThemeButton>
          <Menubar defaultValue={<FontAwesomeIcon icon={faBars} />}></Menubar>
        </Menu>
      </Nav>
      <Shape></Shape>
    </>
  );
};
export default Navbar;
