const styles = theme => ({
  root: {
    overflow: "hidden",
    width: "100%",
    height: "100vh",
    display: "grid",
    gridGap: "5px",
    gridTemplateColumns: "min-content auto",
    gridTemplateRows: [theme.dimensions.header, "min-content"].join(",")
  }
});

export default styles;
