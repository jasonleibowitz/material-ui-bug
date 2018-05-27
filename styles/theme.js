import { createMuiTheme } from '@material-ui/core/styles';

export default createMuiTheme({
  breakpoints: {
    keys: [
      'small',
      'medium',
      'large',
    ],
    values: {
      small: 768,
      medium: 1024,
      large: 1440,
    },
  },
  palette: {
    primary: {
      light: '#676399',
      main: '#3a396b',
      dark: '#0c1440',
      contrastText: '#ffffff',
    },
    secondary: {
      light: '#ff555a',
      main: '#e60030',
      dark: '#ab000a',
      contrastText: '#ffffff',
    }
  }
})