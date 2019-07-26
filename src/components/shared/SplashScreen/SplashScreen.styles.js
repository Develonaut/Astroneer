const styles = theme => ({
  root: {
    position: "fixed",
    left: "0",
    top: `${theme.dimensions.header + theme.spacing(1) / 2}px`,
    right: "0",
    bottom: "0",
    zIndex: "900"
  }
});

export default styles;
