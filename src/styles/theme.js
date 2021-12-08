const colors = {
  navy: '#222831',
  white: '',
  mint: '#82CBC4',
  silver: '#EEEEEE',
  yellow: '#fff59d',
  black: '#000000'
};

const fonts = {
  family: {
    eng: `'Red Hat Display', sans-serif;`,
    kor: `'IBM Plex Sans KR', sans-serif`
  }
};

const darkThemeColors = {
  ...colors,
  bgColor: colors.navy,
  baseColor: colors.silver,
  pointColor: colors.mint,
  pointColor2: colors.yellow,
  navbarColor: colors.black
};

const defaultTheme = {};

const device = {
  mobile: `screen and (max-width:767px )`,
  tablet: `screen and (max-width:1023px )`
};

const theme = {
  colors,
  fonts,
  device,
  darkThemeColors
};

export default theme;
