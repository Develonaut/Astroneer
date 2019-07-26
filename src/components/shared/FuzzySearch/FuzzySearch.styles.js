import { fade } from "@material-ui/core/styles/colorManipulator";

const styles = theme => ({
  search: {
    height: "44px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.dew, 1),
    "&:not($searchActive):hover": {
      backgroundColor: fade(theme.palette.common.moonlight, 1)
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto"
    }
  },
  searchActive: {},
  searchIcon: {
    width: theme.spacing(8) - 8,
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: theme.palette.common.asteroid
  },
  inputRoot: {
    color: "inherit",
    width: "100%"
  },
  inputInput: {
    fontSize: theme.typography.pxToRem("14"),
    paddingTop: theme.spacing(1),
    paddingRight: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    paddingLeft: theme.spacing(1) * 10,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: 250
    }
  },
  clearButtonRoot: {
    opacity: 0,
    pointerEvents: "none",
    transition: theme.transitions.create("opacity")
  },
  clearButtonRootVisible: {
    opacity: 1,
    pointerEvents: "auto"
  }
});

export default styles;
