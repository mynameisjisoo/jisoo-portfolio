import { faBars, faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Switch } from 'antd';
import React, { useState, useRef, useEffect } from 'react';
import styled, { css } from 'styled-components';

const Nav = styled.nav`
  font-family: ${({ theme }) => theme.fonts.family.eng};
  position: sticky;
  top: 0;
  display: flex;
  justify-content: space-between;
  vertical-align: middle;
  padding: 0.5rem 1rem;
  align-items: center;
  font-size: 1.5rem;
  font-weight: bold;
  background-color: black;
  z-index: 100;
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
  cursor: pointer;

  color: ${({ theme }) => theme.darkThemeColors.pointColor};
  @media ${({ theme }) => (theme.device.mobile, theme.device.tablet)} {
    display: inline;
  }
`;

const Menu = styled.ul`
  display: flex;
  justify-content: center;

  .selected {
    color: ${({ theme }) => theme.darkThemeColors.pointColor};
  }

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

const Navbar = ({ theme, scrollIntoSection, ...rest }) => {
  const [responsive, setResponsive] = useState(false);
  const menuRef = useRef();
  const showMenuItem = () => {
    setResponsive(!responsive);
  };

  const onMenuClick = e => {
    const target = e.target.attributes;
    if (!target.value) {
      return;
    }
    scrollIntoSection(target.value.value);
    menuRef.current.childNodes.forEach(element =>
      element.classList.remove('selected')
    );
    e.target.classList.add('selected');
  };

  return (
    <>
      <Nav theme={theme} {...rest}>
        <Logodiv>
          <Logo src='/imgs/favicon-tiny.png'></Logo>
          <MenuButton>
            <FontAwesomeIcon icon={faBars} onClick={showMenuItem} />
          </MenuButton>
        </Logodiv>
        <Menu responsive={responsive} onClick={onMenuClick} ref={menuRef}>
          <MenuItem value='home' className={'selected'}>
            Home
          </MenuItem>
          <MenuItem value='aboutMe'>About Me</MenuItem>
          <MenuItem value='timeline'>Timeline</MenuItem>
          <MenuItem value='skills'>Skills</MenuItem>
          <MenuItem value='project'>Project</MenuItem>
          <MenuItem value='contact'>Contact</MenuItem>
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
