import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useRef, useState } from 'react';
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
  z-index: 100;
  color: ${({ theme }) => theme.darkThemeColors.pointColor};
  transition: all 300ms ease-in;
  &:hover {
    transform: scale(1.1);
    color: ${({ theme }) => theme.darkThemeColors.pointColor2};
  }
`;

function App() {
  // const [theme, setTheme] = useState();

  const navMenuRef = useRef();

  const homeRef = useRef();
  const aboutMeRef = useRef();
  const timelineRef = useRef();
  const skillsRef = useRef();
  const projectRef = useRef();
  const contactRef = useRef();

  const refs = [
    homeRef.current,
    aboutMeRef.current,
    timelineRef.current,
    skillsRef.current,
    projectRef.current,
    contactRef.current
  ];

  const scrollToTop = () => {
    window.scroll({ top: 0, behavior: 'smooth' });
  };

  const scrollIntoSection = menu => {
    const location = eval(`${menu}Ref`).current.offsetTop - 96;
    window.scroll({ top: location, behavior: 'smooth' });
  };

  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.3
  };

  const observerCallback = (entries, observer) => {
    entries.forEach(entry => {
      console.log(entry.target);
      //화면밖으로 나가고, 조금이라도 화면에 들어온 것에 한해서
      // if (!entry.isIntersecting && entry.intersectionRatio > 0) {
      // const index = sectionIds.indexOf(`#${entry.target.id}`);
      //스크롤링이 아래로 되어서 페이지가 올라옴
      // if (entry.boundingClientRect.y < 0) {
      //   // selectedNavIndex = index + 1;
      // } else {
      //   // selectedNavIndex = index - 1;
      // }
      // }
    });
  };
  const observer = new IntersectionObserver(observerCallback, observerOptions);
  // refs.forEach(ref => observer.observe(ref));

  window.addEventListener('scroll', () => {
    if (window.scrollY === 0) {
      //스크롤이 제일 위에 있을 때
      // selectedNavIndex = 0;
    } else if (
      //스크롤이 제일 아래있을 때: (=스크롤좌표(0.0)+화면안의 높이 === 사용자가 보는높이)
      Math.round(window.scrollY + window.innerHeight) >=
      document.body.clientHeight
    ) {
      // selectedNavIndex = navItems.length - 1;
    }
    // selectNavItem(navItems[selectedNavIndex]);
  });
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Container>
        <Navbar scrollIntoSection={scrollIntoSection} ref={navMenuRef} />
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
