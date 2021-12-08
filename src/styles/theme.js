const colors = {
  black: '#222831',
  white: '',
  mint: '#82CBC4',
  silver: '#EEEEEE',
  yellow: '#fff59d'
};

const fonts = {
  family: {
    eng: `'Red Hat Display', sans-serif;`,
    kor: `'IBM Plex Sans KR', sans-serif`
  }
};

const darkThemeColors = {
  ...colors,
  bgColor: colors.black,
  baseColor: colors.silver,
  pointColor: colors.mint,
  pointColor2: colors.yellow
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
