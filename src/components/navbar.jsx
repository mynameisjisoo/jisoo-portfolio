import { faBars, faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Switch } from 'antd';
import React, {
  useState,
  useRef,
  forwardRef,
  useEffect,
  useImperativeHandle
} from 'react';
import styled from 'styled-components';

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

const Navbar = forwardRef(({ theme, scrollIntoSection, ...rest }, ref) => {
  const [responsive, setResponsive] = useState(false);

  const homeRef = useRef();
  const aboutMeRef = useRef();
  const timelineRef = useRef();
  const skillsRef = useRef();
  const projectRef = useRef();
  const contactRef = useRef();

  const navItem = {
    home: homeRef,
    aboutMe: aboutMeRef,
    timeline: timelineRef,
    skills: skillsRef,
    project: projectRef,
    contact: contactRef
  };
  const [selectedNavItem, setSelectedNavItem] = useState(navItem['home']);

  const showMenuItem = () => {
    setResponsive(!responsive);
  };

  const onMenuClick = e => {
    const target = e.target;
    if (!target.id) {
      return;
    }
    console.log(e.target);
    scrollIntoSection(target.id);
    addSelectedClass(e.target);
  };
  // const onMenuClick = e => {
  //   const target = e.target.attributes;
  //   console.log(e);
  //   if (!target.value) {
  //     return;
  //   }
  //   scrollIntoSection(target.value.value);
  //   addSelectedClass(e.target);
  // };

  useEffect(() => {
    selectedNavItem.current.classList.add('selected');
  }, [selectedNavItem]);

  const addSelectedClass = clickedItem => {
    selectedNavItem.current.classList.remove('selected');
    setSelectedNavItem(navItem[clickedItem.id]);
  };

  useImperativeHandle(ref, () => ({
    addSelectedClass(currentSectionId) {
      selectedNavItem.current.classList.remove('selected');
      setSelectedNavItem(navItem[currentSectionId]);
    }
  }));
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
          checkedChildren={<FontAwesomeIcon icon={faMoon} />}
          unCheckedChildren={<FontAwesomeIcon icon={faSun} />}
          defaultChecked
        ></ThemeButton>
      </Nav>
    </>
  );
});
export default Navbar;
