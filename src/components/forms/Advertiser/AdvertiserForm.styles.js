const styles = theme => {
  const border = {
    borderColor: theme.palette.common.moonlight,
    borderWidth: "1px"
  };

  const bars = {
    display: "flex",
    alignItems: "center",
    padding: "0 20px"
  };

  const background = {
    backgroundColor: theme.palette.common.nova
  };

  return {
    root: {
      width: "100%",
      height: "400px",
      display: "grid",
      gridTemplateRows: "57px auto 57px"
    },
    title: {
      ...border,
      ...background,
      ...bars,
      width: "100%",
      borderBottomStyle: "solid",
      flex: "0 0 auto"
    },
    form: {
      width: "100%",
      flex: "1 0 auto",
      display: "block",
      overflow: "auto"
    },
    details: {
      padding: "40px 20px 20px 20px",
      display: "flex",
      flexDirection: "column"
    },
    footer: {
      ...border,
      ...background,
      ...bars,
      width: "100%",
      borderTopStyle: "solid",
      flex: "0 0 auto",
      display: "inline-flex",
      flexDirection: "row",
      justifyContent: "flex-end"
    }
  };
};

export default styles;
