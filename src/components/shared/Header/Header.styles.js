const styles = theme => ({
  root: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    height: theme.dimensions.header,
    padding: "0 16px 0 12px",
    width: "100%",
    backgroundColor: theme.palette.common.nova,
    gridTemplateColumns: "min-content min-content",
    gridRow: "1",
    gridColumn: "1 / span 2",
    alignItems: "center"
  },
  section: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",

    "&:first-of-type > *": {
      marginRight: theme.spacing(1)
    },
    "&:last-of-type > *": {
      marginLeft: theme.spacing(1)
    }
  }
});

export default styles;
