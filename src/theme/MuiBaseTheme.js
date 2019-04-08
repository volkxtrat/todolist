import { createMuiTheme } from "@material-ui/core/styles";
import { blue, grey } from "@material-ui/core/colors";

const warning = {
  main: "#FFBB34"
};
const success = {
  main: "#01C851"
};
const google = {
  main: "#D94837"
};
const link = {
  main: "#4789E5"
};
const getTheme = () => {
  const baseTheme = createMuiTheme({
    palette: {
      tonalOffset: 0.2,
      background: { paper: "#fff", default: "#f6f6f6" },
      primary: { main: blue[500], light: blue[200], dark: blue[800] },
      secondary: { main: grey[900], light: grey[800] }
    },
    typography: {
      useNextVariants: true
    }
  });

  baseTheme.palette.warning = baseTheme.palette.augmentColor(warning);
  baseTheme.palette.success = baseTheme.palette.augmentColor(success);
  baseTheme.palette.google = baseTheme.palette.augmentColor(google);
  baseTheme.palette.link = baseTheme.palette.augmentColor(link);

  return baseTheme;
};

export default getTheme();

export function createTheme(obj) {
  return { ...getTheme(), ...obj };
}
