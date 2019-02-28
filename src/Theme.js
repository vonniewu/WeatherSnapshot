import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles/MuiThemeProvider';
import blue from '@material-ui/core/colors/blue';
import indigo from '@material-ui/core/colors/indigo';


interface PaletteIntention {
  light?: string;
  main?: string;
  dark?: string;
  contrastText?: string;
}

// export default createMuiTheme({
//   palette: {
//     primary: {
//       light:'',
//       main:'',
//       dark:'',
//       contrastText:'',
//     },
//     secondary: {
//       light:'',
//       main:'',
//       dark:'',
//       contrastText:'',
//     },
//     textPrimary: {
//       light:'',
//       main:'#0d47a1',
//       dark:'',
//       contrastText:'',
//     },
//     textSecondary: {
//       light:'',
//       main:'#4527a0',
//       dark:'',
//       contrastText:'',
//     }
//   },
// });

const Mytheme = createMuiTheme({
  palette: {
    primary: blue,
    secondary: indigo,
  },
});

export default Mytheme;
