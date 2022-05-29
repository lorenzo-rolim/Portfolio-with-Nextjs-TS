export const theme = {
  colors: {
    pallete: {
      black: '#4b4b55',
      weakBlack: '#505057',
      strongRed: '#f4324a',
      weakRed: '#ff516c',
      orange: '#fb9c5a',
      yellow: '#fcc755',
    },
  },
  font: {
    family: {
      default: "'Roboto Condensed', sans-serif;",
      secondary: "'Open Sans', sans-serif;",
    },
    sizes: {
      xsmall: '8rem',
      small: '1.6rem',
      medium: '2.4rem',
      large: '3.2rem',
      xlarge: '4.0rem',
      xxlarge: '4.8rem',
      huge: '5.6rem',
      xhuge: '6.4rem',
    },
  },
  media: {
    lteMedium: '(max-width: 768px)',
  },
  spacings: {
    xsmall: '8rem',
    small: '1.6rem',
    medium: '2.4rem',
    large: '3.2rem',
    xlarge: '4.0rem',
    xxlarge: '4.8rem',
    huge: '5.6rem',
    xhuge: '6.4rem',
  },
} as const;
