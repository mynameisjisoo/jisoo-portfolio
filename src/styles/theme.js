const colors = {
  black: '#222831',
  white: '',
  mint: '#82CBC4',
  silver: '#EEEEEE'
};

const fonts = {
  family: {
    eng: 'Red Hat Display, sans-serif;',
    kor: `@import url('https://cdn.rawgit.com/moonspam/NanumSquare/master/nanumsquare.css');
      font-family: 'NanumSquare';
      font-weight: 300;
      src: url(NanumSquareL.eot);
      src: url(NanumSquareL.eot?#iefix) format('embedded-opentype'),
        url(NanumSquareL.woff) format('woff'),
        url(NanumSquareL.ttf) format('truetype')`
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
