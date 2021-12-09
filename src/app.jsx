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
import theme from './styles/theme';

const Container = styled.div`
  ${({ theme }) => {
    return css`
      background-color: ${theme.darkThemeColors.bgColor};
      color: ${theme.colors.silver};
      font-family: ${theme.fonts.family.kor};
    `;
  }};
`;

const ArrowUp = styled(FontAwesomeIcon)`
  font-size: 3.5rem;
  position: fixed;
  bottom: 2rem;
  left: 95%;
  cursor: pointer;
  color: ${({ theme }) => theme.darkThemeColors.pointColor};
  transition: all 300ms ease-in;
  &:hover {
    transform: scale(1.1);
    color: ${({ theme }) => theme.darkThemeColors.pointColor2};
  }
`;

function App() {
  // const [theme, setTheme] = useState();
  const [section, setSection] = useState('home');

  const homeRef = useRef();
  const aboutMeRef = useRef();
  const timelineRef = useRef();
  const skillsRef = useRef();
  const projectRef = useRef();
  const contactRef = useRef();

  const scrollUp = () => {
    window.scroll({ top: 0, behavior: 'smooth' });
  };

  const scrollIntoSection = menu => {
    const location = eval(`${menu}Ref`).current.offsetTop - 96;
    window.scroll({ top: location, behavior: 'smooth' });
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Container>
        <Navbar scrollIntoSection={scrollIntoSection} />
        <Home ref={homeRef} />
        <AboutMe ref={aboutMeRef} />
        <Timeline ref={timelineRef} />
        <Skills ref={skillsRef} />
        <Project ref={projectRef} />
        <Contact ref={contactRef} />
        <ArrowUp icon={faArrowUp} onClick={scrollUp} />
        <FooterSection />
      </Container>
    </ThemeProvider>
  );
}

export default App;
