const styles = theme => ({
  root: {
    display: "inline-grid",
    gridTemplateRows: "min-content min-content",
    gridTemplateColumns: "100%",
    top: "0",
    position: "sticky",
    zIndex: theme.zIndex.controlBar
  }
});

export default styles;
