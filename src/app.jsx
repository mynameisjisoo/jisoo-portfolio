import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import './app.css';
import Navbar from './components/navbar';
import GlobalStyle from './styles/globalStyle';
import theme from './styles/theme';

function App() {
  // const [theme, setTheme] = useState();

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Navbar />;
    </ThemeProvider>
  );
}

export default App;
