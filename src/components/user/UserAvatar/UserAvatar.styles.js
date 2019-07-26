const styles = theme => ({
  root: {
    padding: "1px",
    border: `2px solid ${theme.palette.primary.main}`,
    "&:hover $img": {
      boxShadow: theme.shadows[1]
    }
  },
  root_clickable: {
    cursor: "pointer"
  },
  img: {
    borderRadius: "100%"
  }
});

export default styles;
