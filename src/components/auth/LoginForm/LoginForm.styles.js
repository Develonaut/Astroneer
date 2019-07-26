const styles = theme => ({
  root: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    maxWidth: theme.mediaQueries.mobile,
    zIndex: theme.zIndex.authLoginForm,
    margin: "0 auto"
  },
  title: {
    whiteSpace: "nowrap"
  },
  titleText: {
    ...theme.typography.medium,
    color: theme.palette.common.asteroid
  },
  titleText1: {
    fontSize: "22px",
    marginBottom: "-8px",
    marginLeft: "-18px"
  },
  titleText2: {
    ...theme.typography.black,
    fontSize: "38px",
    marginTop: "0",
    letterSpacing: "-1px",
    color: theme.palette.primary.main
  },
  subTitle: {
    maxWidth: "355px",
    marginBottom: "30px"
  },
  fieldsWrapper: {
    maxWidth: "320px",
    display: "flex",
    flexDirection: "column",
    marginBottom: "30px",

    "div:first_of_type": {
      marginBottom: "30px"
    }
  },
  checkbox: {
    marginBottom: "30px"
  },
  status: {
    marginTop: "-16px",
    marginBottom: "20px",
    opacity: "0",
    transition: "opacity 100ms ease-in",
    display: "block",
    color: theme.palette.common.rover,
    "&__active": {
      opacity: "1"
    }
  },
  btns: {
    display: "inline-grid",
    gridTemplateColumns: "min-content",
    gridTemplateRows: "min-content min-content",
    gridGap: "20px"
  },
  [`@media screen and (min-width: calc(${
    theme.mediaQueries.mobile
  } + 40px))`]: {
    titleText2: {
      fontSize: "60px",
      marginTop: "-15px"
    },
    btns: {
      gridTemplateColumns: "min-content min-content",
      gridTemplateRows: "min-content"
    }
  }
});

export default styles;
