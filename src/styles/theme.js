const fonts = {
  family: {
    eng: `'Red Hat Display', sans-serif;`,
    kor: `'IBM Plex Sans KR', sans-serif`
  }
};

const darkTheme = {
  bgColor: '#222831',
  baseColor: '#EEEEEE',
  pointColor: '#82CBC4',
  pointColor2: '#fff59d',
  navbarColor: '#2D4263'
};

const lightTheme = {
  bgColor: '#FCF6F5',
  baseColor: '#000000',
  pointColor: '#9CC3D5',
  pointColor2: '#EEA47F',
  navbarColor: '#7b9acc'
};

const device = {
  tablet: `screen and (max-width:1023px )`
};

const theme = {
  fonts,
  device,
  darkTheme
};

export default theme;
