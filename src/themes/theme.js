import { createMuiTheme } from '@material-ui/core/styles';

import { blue, orange } from "@material-ui/core/colors";

const theme = createMuiTheme({
  palette: {
    primary: blue,
    secondary: orange,
  },
  overrides: {
    MuiButton: {
      containedPrimary: {
        color: 'white',
      },
      containedSecondary: {
        color: 'white',
      }
    },
    MuiLink: {
      root: {
        color: 'white',
        textDecoration: 'none',
        '&&:hover': {
          textDecoration: 'none',
        },
        '&&:active': {
          textDecoration: 'none'
        }
      }
    }
  }
});

export default theme;