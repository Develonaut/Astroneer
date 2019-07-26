const styles = theme => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    "div:first_of_type": {
      marginRight: "5px"
    }
  },
  name: {
    display: "flex",
    flexDirection: "row"
  },
  email: {
    fontSize: "14px",
    color: theme.palette.common.asteroid
  }
});

export default styles;
