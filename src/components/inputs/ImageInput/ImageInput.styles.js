const styles = theme => ({
  root: {
    display: "flex",
    flexDirection: "column"
  },
  imageWrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    background: theme.palette.common.moonlight,
    borderRadius: 5,
    minWidth: 200
  },
  imageWrapper_image: {
    width: 364,
    height: 180
  },
  imageWrapper_icon: {
    width: 128,
    height: 128
  },
  buttons: {
    width: "100%",
    flexDirection: "row"
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "contain"
  },
  error: {
    color: "astroneer-rover"
  }
});

export default styles;
