import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRef, useState } from 'react';
import styled, { css, ThemeProvider } from 'styled-components';
import './app.css';
import AboutMe from './components/aboutMe';
import Contact from './components/contact';
import FooterSection from './components/footerSection';
import Home from './components/home';
import Navbar from './components/navbar';
import Project from './components/project';
import Skills from './components/skills';
import Timeline from './components/timeline';
import GlobalStyle from './styles/globalStyle';
import theme, { darkTheme, lightTheme } from './styles/theme';

const Container = styled.div`
  color: ${({ theme }) => theme.baseColor};
  background-color: ${({ theme }) => theme.bgColor};
  font-family: ${theme.fonts.family.kor};
`;

const ArrowUp = styled(FontAwesomeIcon)`
  font-size: 3.5rem;
  position: fixed;
  bottom: 2.5rem;
  right: 1.5rem;
  cursor: pointer;
  z-index: 100;
  color: ${({ theme }) => theme.pointColor};
  transition: all 300ms ease-in;

  &:hover {
    transform: scale(1.1);
    color: ${({ theme }) => theme.pointColor2};
  }
`;

function App() {
  const [currentTheme, setCurrentTheme] = useState('lightTheme');
  const theme = currentTheme === 'lightTheme' ? lightTheme : darkTheme;

  const [currentSection, setCurrentSection] = useState('home');
  const navMenuRef = useRef();

  const homeRef = useRef();
  const aboutMeRef = useRef();
  const timelineRef = useRef();
  const skillsRef = useRef();
  const projectRef = useRef();
  const contactRef = useRef();

  const refs = {
    home: homeRef,
    aboutMe: aboutMeRef,
    timeline: timelineRef,
    skills: skillsRef,
    project: projectRef,
    contact: contactRef
  };
  const scrollToTop = () => {
    window.scroll({ top: 0, behavior: 'smooth' });
  };

  const scrollIntoSection = selectedSection => {
    const location = refs[selectedSection].current.offsetTop - 80;
    window.scroll({ top: location, behavior: 'smooth' });
  };

  const handleCurrentSection = clickedNavItem => {
    setCurrentSection(clickedNavItem);
  };

  const changeTheme = selectedTheme => {
    setCurrentTheme(selectedTheme);
  };
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Container>
        <Navbar
          changeTheme={changeTheme}
          scrollIntoSection={scrollIntoSection}
          ref={navMenuRef}
          currentSection={currentSection}
          handleCurrentSection={handleCurrentSection}
        />
        <Home ref={homeRef} />
        <AboutMe ref={aboutMeRef} />
        <Timeline ref={timelineRef} />
        <Skills ref={skillsRef} />
        <Project ref={projectRef} />
        <Contact ref={contactRef} />
        <ArrowUp icon={faArrowUp} onClick={scrollToTop} />
        <FooterSection />
      </Container>
    </ThemeProvider>
  );
}

export default App;
