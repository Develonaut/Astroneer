import { createMuiTheme } from "@material-ui/core/styles";

const zIndexScale = {
  zIndex0: 0,
  zIndex1: 100,
  zIndex2: 200,
  zIndex3: 300,
  zIndex4: 400,
  zIndex5: 500,
  zIndex6: 600,
  zIndex7: 700,
  zIndex8: 800,
  zIndex9: 900,
  zIndex10: 1000
};

const astroneerPalette = {
  flare: "#6ebdff",
  ice: "#a2dfff",
  warp: "#143c86",
  rover: "#fe4a7d",
  sunshine: "#eebd7a",
  beam: "#ffefd5",
  nova: "#ffffff",
  dew: "#f4f7fc",
  moonlight: "#E9EDF5",
  asteroid: "#99A2B1",
  void: "#293134",
  gamma: "#3cba54"
};

const buttonColorOveride = {
  root: {
    color: astroneerPalette.asteroid,
    "&:hover": {
      color: astroneerPalette.void
    },
    "&$disabled": {
      color: astroneerPalette.moonlight
    }
  }
};

const rootTextTransformOveride = {
  root: {
    textTransform: "initial"
  }
};

const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#339cff",
      main: "#0084ff", // coda
      dark: "#005cb2",
      contrastText: "#fff"
    },
    secondary: {
      light: "#fe6e97",
      main: "#fe4a7d",
      dark: "#b13357",
      contrastText: "#000"
    },
    common: {
      ...astroneerPalette
    },
    action: {
      hover: astroneerPalette.moonlight
    }
  },
  typography: {
    useNextVariants: true,
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      "Open Sans",
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"'
    ].join(","),
    medium: {
      fontFamily: '"Open+Sans", sans-serif',
      lineHeight: "1.5",
      fontWeight: "500"
    },
    bold: {
      fontFamily: '"Open+Sans", sans-serif',
      lineHeight: "1.17",
      fontWeight: "700"
    },
    black: {
      fontFamily: '"Open+Sans", sans-serif',
      lineHeight: "1.17",
      letterSpacing: "-2px",
      fontWeight: "900"
    }
  },
  spacing: 10,
  dimensions: {
    header: 64,
    nav: 72,
    navOpen: 240,
    compactListItemHeight: 48,
    comfortableListItemHeight: 75
  },
  mediaQueries: {
    desktop: "1024px",
    tablet: "800px",
    mobile: "420px"
  },
  zIndex: {
    authHero: zIndexScale.zIndex3,
    authMask: zIndexScale.zIndex4,
    authIllustration: zIndexScale.zIndex5,
    actionButton: zIndexScale.zIndex5,
    listHeader: zIndexScale.zIndex5,
    nav: zIndexScale.zIndex5,
    controlBar: zIndexScale.zIndex6,
    authLoginForm: zIndexScale.zIndex6,
    authLogo: zIndexScale.zIndex7,
    modal: zIndexScale.zIndex10,
    dialog: zIndexScale.zIndex10
  },
  overrides: {
    // Name of the component ⚛️ / style sheet
    MuiButton: {
      ...rootTextTransformOveride
    },
    MuiButtonBase: {
      ...rootTextTransformOveride
    },
    MuiIconButton: {
      ...buttonColorOveride
    },
    MuiCheckbox: {
      ...buttonColorOveride
    },
    MuiSwitch: {
      switchBase: {
        "&:hover": {
          color: "#fafafa"
        }
      }
    },
    MuiTab: {
      ...rootTextTransformOveride
    },
    MuiMenuItem: {
      root: {
        fontSize: "14px"
      }
    }
  }
});

export default theme;
