const styles = theme => ({
  header: {
    fontSize: "18px",
    fontWeight: theme.typography.fontWeightMedium
  },
  items: {
    marginLeft: "15px",
    padding: "20px 0"
  },
  item: {
    minHeight: "38px",
    fontSize: "14px",
    marginBottom: "5px",
    "&:last-of-type": {
      marginBottom: "0"
    }
  }
});

export default styles;
