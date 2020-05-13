import { createMuiTheme } from "@material-ui/core/styles";

const arcGrey = "#576574";
const arcGreen = "#10ac84";
const arcRed = "#ee5253";
const white="#f5f6fa"

const Theme = createMuiTheme({
  palette: {
    common: {
      grey: arcGrey,
      red: arcRed,
      green: arcGreen,
    },
    primary: {
      main: `${arcGrey}`,
    },
    secondary: {
      main: `${arcGreen}`,
    },
    text:{
      primary:white
    }
  },
  typography: {
    tab: {
      fontFamily: "Raleway",
      textTransform: "none",
      fontWeight: 300,
      fontSize: "1rem",
    },
  },
});
export default Theme