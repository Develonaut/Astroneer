const styles = theme => ({
  root: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    padding: "0 10px",
    backgroundColor: theme.palette.common.nova,
    whiteSpace: "nowrap"
  },
  rootControlSection: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  transparent: {
    backgroundColor: "transparent"
  },
  heightTall: {
    height: "64px"
  },
  heightShort: {
    height: "48px"
  },
  alignStart: {
    justifyContent: "flex-start"
  },
  alignEnd: {
    justifyContent: "flex-end"
  },
  alignCenter: {
    justifyContent: "space-between"
  },
  alignBetween: {
    justifyContent: "space-between"
  }
});

export default styles;
