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
    flexDirection: "column"
  },
  listHeader: {
    top: 0,
    backgroundColor: theme.palette.common.dew,
    zIndex: theme.zIndex.ListHeader,
    position: "sticky",
    display: "grid",
    gridGap: `${theme.spacing(1)}px`
  },
  listItem: {
    display: "grid",
    gridGap: `${theme.spacing(1)}px`
  }
});

export default styles;
