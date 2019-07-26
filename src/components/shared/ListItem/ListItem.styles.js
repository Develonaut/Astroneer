const style = theme => ({
  root: {
    width: "100%",
    cursor: "pointer",
    display: "flex",
    flexDirection: "row",
    overflow: "hidden",
    alignItems: "center",
    backgroundColor: theme.palette.common.nova,
    marginBottom: "2px",
    whiteSpace: "nowrap",
    fontSize: "14px",
    borderBottom: "1px solid transparent",
    "&:hover": {
      borderBottomColor: theme.palette.common.moonlight
    }
  },
  root_comfortable: {
    height: theme.dimensions.comfortableListItemHeight
  },
  root_compact: {
    height: theme.dimensions.compactListItemHeight
  }
});

export default style;
