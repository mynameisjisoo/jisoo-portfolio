export const fonts = {
  family: {
    eng: `'Red Hat Display', sans-serif;`,
    kor: `'IBM Plex Sans KR', sans-serif`
  }
};

export const device = {
  tablet: `screen and (max-width:1023px )`
};

export const darkTheme = {
  bgColor: '#222831',
  baseColor: '#EEEEEE',
  pointColor: '#82CBC4',
  pointColor2: '#fff59d',
  navbarColor: '#2D4263'
};

export const lightTheme = {
  bgColor: '#FCF6F5',
  baseColor: '#000000',
  pointColor: '#EEA47F',
  pointColor2: '#9CC3D5',
  navbarColor: '#C8D9EB'
};

const theme = {
  fonts,
  device,
  darkTheme,
  lightTheme
};

export default theme;
