const styles = theme => ({
  root: {
    paddingTop: "10px",
    paddingBottom: "10px",
    fontSize: `${theme.typography.fontSize - 2}px`,
    fontWeight: "bold",
    color: theme.palette.common.asteroid,
    whiteSpace: "nowrap",
    width: "100%",
    overflow: "hidden",
    borderBottom: `1px solid ${theme.palette.common.moonlight}`,
    backgroundColor: theme.palette.common.dew,
    zIndex: theme.zIndex.listHeader
  }
});

export default styles;
