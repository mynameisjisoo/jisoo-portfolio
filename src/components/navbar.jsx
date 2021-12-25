import { faBars, faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Switch } from 'antd';
import React, { useState, useRef, forwardRef, useEffect, useMemo, memo } from 'react';
import styled from 'styled-components';
import theme from '../styles/theme';

const Nav = styled.nav`
  position: sticky;
  top: 0;
  display: flex;
  justify-content: space-between;
  vertical-align: middle;
  padding: 0.5rem 1rem;
  align-items: center;
  font-size: 1.5rem;
  font-weight: bold;
  background-color: ${({ theme }) => theme.navbarColor};
  z-index: 100;
  font-family: ${theme.fonts.family.eng};
  @media ${theme.device.tablet} {
    flex-direction: column;
  }
`;

const Logodiv = styled.div`
  height: 5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media ${theme.device.tablet} {
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

  color: ${({ theme }) => theme.pointColor};
  @media ${theme.device.tablet} {
    display: inline;
  }
`;

const Menu = styled.ul`
  display: flex;
  justify-content: center;

  .selected {
    color: ${({ theme }) => theme.pointColor};
  }

  @media ${theme.device.tablet} {
    flex-direction: column;
    margin: 0.3rem;
    display: ${props => (props.responsive === 'true' ? 'flex' : 'none')};
  }
`;

const MenuItem = styled.li`
  margin: 0 2rem 0 0;
  padding: 0 0.3rem;
  cursor: pointer;
  white-space: nowrap;
  text-align: center;
  transition: all 300ms ease-out;
  

  &:hover{
    color: ${({ theme }) => theme.pointColor};
    
  }

  @media ${theme.device.tablet} {
    margin: 0.3rem 0;
  }
`;

const ThemeButton = styled(Switch)`
  color: yellow;
  cursor: pointer;
  font-size: 1.5rem;

  @media ${theme.device.tablet} {
    display: none;
    display: ${props => (props.responsive === 'true' ? 'flex' : 'none')};
  }
`;

const Navbar = memo(forwardRef(
  (
    {
      theme,
      scrollIntoSection,
      currentSection,
      handleCurrentSection,
      changeTheme,
      ...rest
    },
    ref
  ) => {
    const [responsive, setResponsive] = useState('false');

    const homeRef = useRef();
    const aboutMeRef = useRef();
    const timelineRef = useRef();
    const skillsRef = useRef();
    const projectRef = useRef();
    const contactRef = useRef();

    const navItem = useMemo(() => {
      return {
        home: homeRef,
        aboutMe: aboutMeRef,
        timeline: timelineRef,
        skills: skillsRef,
        project: projectRef,
        contact: contactRef
      }
    }, []);

    const showMenuItem = () => {
      setResponsive(responsive === 'false' ? 'true' : 'false');
    };

    const onMenuClick = e => {
      const target = e.target;
      if (!target.id || target.id === currentSection) {
        return;
      }
      scrollIntoSection(target.id);
      navItem[currentSection].current.classList.remove('selected');
      handleCurrentSection(target.id);
      showMenuItem()
    };

    useEffect(() => {
      navItem[currentSection].current.classList.add('selected');
    }, [currentSection, navItem]);

    const selectTheme = lightMode => {
      const selectedTheme = lightMode ? 'lightTheme' : 'darkTheme';
      changeTheme(selectedTheme);
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
          <Menu responsive={responsive} onClick={onMenuClick} ref={ref}>
            <MenuItem id='home' ref={homeRef}>
              Home
            </MenuItem>
            <MenuItem id='aboutMe' ref={aboutMeRef}>
              About Me
            </MenuItem>
            <MenuItem id='timeline' ref={timelineRef}>
              Timeline
            </MenuItem>
            <MenuItem id='skills' ref={skillsRef}>
              Skills
            </MenuItem>
            <MenuItem id='project' ref={projectRef}>
              Project
            </MenuItem>
            <MenuItem id='contact' ref={contactRef} i>
              Contact
            </MenuItem>
          </Menu>
          <ThemeButton
            responsive={responsive}
            onChange={selectTheme}
            checkedChildren={<FontAwesomeIcon icon={faMoon} />}
            unCheckedChildren={<FontAwesomeIcon icon={faSun} />}
            defaultChecked
          ></ThemeButton>
        </Nav>
      </>
    );
  }
));

export default Navbar;
