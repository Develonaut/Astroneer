const styles = theme => ({
  root: {
    display: "flex",
    height: "100%",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  },
  title: {
    ...theme.typography.bold,
    fontSize: "24px",
    color: theme.palette.common.asteroid,
    textAlign: "center",
    marginBottom: theme.spacing(2)
  },
  subTitle: {
    ...theme.typography.medium,
    color: theme.palette.common.asteroid,
    textAlign: "center",
    maxWidth: "340px"
  },
  illustration: {
    display: "block",
    width: "200px",
    margin: "0 auto 20px auto"
  }
});
export default styles;
