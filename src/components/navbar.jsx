import { faBars, faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Switch } from 'antd';
import React, { useState } from 'react';
import styled, { css } from 'styled-components';

const Nav = styled.nav`
  ${({ theme }) => {
    return css`
      background-color: ${theme.colors.black};
      color: ${theme.colors.silver};
      font-size: ${theme.fonts.size.base};
    `;
  }}
  display: flex;
  justify-content: space-between;
  vertical-align: middle;
  padding: 0.5rem 1rem;
  align-items: center;

  @media ${({ theme }) => (theme.device.mobile, theme.device.tablet)} {
    flex-direction: column;
  }
`;

const Logodiv = styled.div`
  height: 5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media ${({ theme }) => (theme.device.mobile, theme.device.tablet)} {
    width: 100%;
  }
`;

const Logo = styled.img`
  width: 4rem;
  height: 4rem;
`;

const MenuButton = styled.button`
  font-size: 2rem;
  display: none;
  margin: 2rem 0;

  ${({ theme }) => {
    return css`
      color: ${theme.colors.silver};
    `;
  }}
  @media ${({ theme }) => (theme.device.mobile, theme.device.tablet)} {
    display: inline;
  }
`;

const Menu = styled.ul`
  display: flex;
  justify-content: center;

  @media ${({ theme }) => (theme.device.mobile, theme.device.tablet)} {
    flex-direction: column;
    margin: 0.3rem;
    display: ${props => (props.responsive ? 'flex' : 'none')};
  }
`;

const MenuItem = styled.li`
  margin: 0 2rem 0 0;
  padding: 0 0.3rem;
  cursor: pointer;
  white-space: nowrap;
  text-align: center;

  @media ${({ theme }) => (theme.device.mobile, theme.device.tablet)} {
    margin: 0.3rem 0;
  }
`;

const ThemeButton = styled(Switch)`
  color: yellow;
  font-size: 1.5rem;

  @media ${({ theme }) => (theme.device.mobile, theme.device.tablet)} {
    display: none;
    display: ${props => (props.responsive ? 'flex' : 'none')};
  }
`;

const Navbar = ({ theme, ...rest }) => {
  const [responsive, setResponsive] = useState(false);

  const onClick = () => {
    setResponsive(!responsive);
  };

  return (
    <>
      <Nav theme={theme} {...rest}>
        <Logodiv>
          <Logo src='/imgs/favicon-tiny.png'></Logo>
          <MenuButton>
            <FontAwesomeIcon icon={faBars} onClick={onClick} />
          </MenuButton>
        </Logodiv>
        <Menu responsive={responsive}>
          <MenuItem>Home</MenuItem>
          <MenuItem>About Me</MenuItem>
          <MenuItem>Timeline</MenuItem>
          <MenuItem>Skills</MenuItem>
          <MenuItem>Works</MenuItem>
          <MenuItem>Contact</MenuItem>
        </Menu>
        <ThemeButton
          responsive={responsive}
          checkedChildren={<FontAwesomeIcon icon={faMoon} />}
          unCheckedChildren={<FontAwesomeIcon icon={faSun} />}
          defaultChecked
        ></ThemeButton>
      </Nav>
    </>
  );
};
export default Navbar;
