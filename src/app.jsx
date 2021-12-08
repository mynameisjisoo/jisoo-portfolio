import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
  font-size: 3rem;
  position: sticky;
  bottom: 2rem;
  left: 95%;
  cursor: pointer;
  color: ${({ theme }) => theme.darkThemeColors.pointColor};

  &:hover {
    color: ${({ theme }) => theme.darkThemeColors.pointColor2};
  }
`;

function App() {
  // const [theme, setTheme] = useState();
  const scrollUp = () => {
    window.scroll({ top: 0, behavior: 'smooth' });
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Container>
        <Navbar />
        <Home />
        <AboutMe />
        <Timeline />
        <Skills />
        <Project />
        <Contact />
        <ArrowUp icon={faArrowUp} onClick={scrollUp} />
        <FooterSection />
      </Container>
    </ThemeProvider>
  );
}

export default App;
