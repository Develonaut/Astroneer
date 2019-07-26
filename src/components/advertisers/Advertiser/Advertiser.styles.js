const styles = theme => {
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
      maxHeight: "600px",
      display: "flex",
      flexDirection: "column",
      overflow: "auto"
    },
    header: {
      padding: "20px",
      fontSize: "18px",
      display: "grid",
      gridTemplateColumns: "60px auto min-content",
      gridGap: "10px",
      alignItems: "center"
    },
    avatar: {
      width: 60,
      height: 60,
      marginRight: "10px"
    },
    details: {
      padding: "20px",
      display: "flex",
      flexDirection: "column",
      overflow: "auto"
    },
    footer: {
      ...background,
      ...bars,
      padding: "10px",
      width: "100%",
      flex: "0 0 auto",
      display: "inline-flex",
      flexDirection: "row",
      justifyContent: "flex-end"
    }
  };
};

export default styles;
