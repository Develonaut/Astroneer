const styles = theme => ({
  root: {
    display: "flex",
    flexDirection: "column",
    width: "317px",
    padding: "20px"
  },
  info: {
    display: "inline-grid",
    gridTemplateColumns: "108px auto",
    gridTemplateRows: "repeat(2, 40px)",
    gridGap: "20px",
    width: "100%"
  },
  avatar: {
    width: "96px",
    height: "96px"
  }
});

export default styles;
