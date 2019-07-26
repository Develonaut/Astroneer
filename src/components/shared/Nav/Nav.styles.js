const styles = theme => ({
  drawer: {
    flexShrink: 0,
    whiteSpace: "nowrap",
    overflow: "hidden",
    zIndex: theme.zIndex.nav,
    "&.drawer_mobile": {
      top: `${theme.dimensions.header}px`
    }
  },
  drawerOpen: {
    width: theme.dimensions.navOpen,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  drawerClose: {
    width: theme.dimensions.nav,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    overflowX: "hidden"
  },
  paper: {
    display: "grid",
    gridTemplateRows: "auto min-content",
    padding: "0 0 5px 0",
    backgroundColor: "transparent",
    position: "relative",
    borderRight: "none",
    overflow: "hidden"
  },
  items: {
    display: "flex",
    flexDirection: "column",
    minHeight: "300px",
    padding: "20px 0",
    backgroundColor: theme.palette.common.nova
  }
});

export default styles;
