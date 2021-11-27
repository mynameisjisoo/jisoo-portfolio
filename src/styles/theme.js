const colors = {
  black: '#222831',
  white: '',
  mint: '#82CBC4',
  silver: '#EEEEEE'
};

const fonts = {
  family: {},
  size: {
    base: '1.5rem'
  }
};

const darkThemeColors = {
  ...colors
};

const defaultTheme = {};

const device = {
  mobile: `screen and (max-width:767px )`,
  tablet: `screen and (max-width:1023px )`
};

const theme = {
  colors,
  fonts,
  device
};

export default theme;
