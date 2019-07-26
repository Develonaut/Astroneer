const styles = theme => ({
  root: {
    display: "inline-grid",
    gridTemplateRows: "min-content auto",
    gridTemplateColumns: "100%",
    width: "100%",
    height: "100%"
  },
  section: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0 10px",
    "&:nth-of-type(1)": {
      height: "64px",
      backgroundColor: theme.palette.common.nova
    },
    "&:nth-of-type(2)": {
      height: "48px"
    }
  }
});

export default styles;
