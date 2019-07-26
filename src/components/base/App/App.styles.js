const styles = theme => {
  return {
    html: {
      fontFamily:
        '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", "Arial", "sans-serif", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
      "&.wf-active": {
        fontFamily: theme.typography.fontFamily
      }
    },
    body: {
      fontFamily: theme.typography.fontFamily,
      margin: "0",
      padding: "0",
      WebkitFontSmoothing: "antialiased",
      MozOsxFontSmoothing: "grayscale",
      backgroundColor: theme.palette.common.dew,
      height: "100%",
      width: "100%"
    },
    root: {
      overflow: "hidden",
      width: "100%",
      height: "100vh",
      display: "grid",
      gridGap: "5px",
      gridTemplateColumns: "min-content auto",
      gridTemplateRows: [`${theme.dimensions.header}px`, "auto"].join(" ")
    },
    root_mobile: {
      gridTemplateColumns: "100%"
    }
  };
};

export default styles;
