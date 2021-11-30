import styled, { css, ThemeProvider } from 'styled-components';
import './app.css';
import AboutMe from './components/aboutMe';
import Home from './components/home';
import Navbar from './components/navbar';
import TimeLine from './components/timeLine';
import GlobalStyle from './styles/globalStyle';
import theme from './styles/theme';

const Container = styled.div`
  ${({ theme }) => {
    return css`
      background-color: ${theme.colors.black};
      color: ${theme.colors.silver};
      font-family: ${theme.fonts.family.kor};
    `;
  }};
`;

function App() {
  // const [theme, setTheme] = useState();

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Container>
        <Navbar />
        <Home />
        <AboutMe />
        <TimeLine />
      </Container>
    </ThemeProvider>
  );
}

export default App;
