const styles = theme => {
  const inputShared = {
    height: "32px",
    borderBottom: `1px solid ${theme.palette.common.asteroid}`
  };

  return {
    root: {
      display: "inline-flex",
      flexDirection: "column",
      flexWrap: "nowrap",
      justifyContent: "center",
      whiteSpace: "nowrap",
      position: "relative",
      minWidth: "100px",
      background: theme.palette.common.nova,
      paddingTop: theme.spacing(2),

      "&:last_of_type": {
        marginBottom: "0"
      },
      "&:focus-within $input": {
        borderBottomColor: theme.palette.primary.main
      },
      "&:focus-within $input::placeholder": {
        opacity: "1"
      },
      "&:focus-within $labelText": {
        transform: "translate(0, -33px) scale(0.75)"
      }
    },
    root_fullWidth: {
      width: "100%"
    },
    root_hidden: {
      display: "none",
      pointerEvents: "none"
    },
    root_error: {
      "& $label, & $input, & $status": {
        color: theme.palette.common.rover
      }
    },
    root_filled: {
      "& $labelText": {
        transform: "translate(0, -33px) scale(0.75)"
      }
    },
    switch: {
      width: "auto",
      display: "inline-grid",
      height: "48px",
      justifyContent: "start",
      alignItems: "center",
      gridTemplateColumns: "62px min-content",
      gridTemplateRows: "48px min-content"
    },
    label: {
      pointerEvents: "none",
      fontWeight: theme.typography.fontWeightMedium,
      fontSize: theme.typography.fontSize,
      lineHeight: `${theme.typography.fontSize}px`,
      color: theme.palette.common.asteroid,
      marginBottom: "3px"
    },
    labelText: {
      position: "absolute",
      transformOrigin: "top left",
      transform: "translate(0, -11px) scale(1)",
      transition: theme.transitions.create("transform")
    },
    labelSwitch: {
      whiteSpace: "nowrap",
      gridColumn: "2",
      gridRow: "1"
    },
    input: {
      border: "none",
      outline: "none",
      fontFamily: theme.typography.fontFamily,
      fontWeight: theme.typography.fontWeightMedium,
      fontSize: `${theme.typography.fontSize}px`,
      lineHeight: `${theme.typography.fontSize}px`,
      transition: theme.transitions.create("opacity"),

      "&:not($root_error):hover": {
        borderBottomColor: theme.palette.primary.main
      },

      "&::placeholder": {
        opacity: "0",
        fontSize: `${theme.typography.fontSize}px`,
        color: theme.palette.common.moonlight,
        transition: theme.transitions.create("opacity")
      }
    },
    inputText: inputShared,
    inputDate: inputShared,
    inputTime: inputShared,
    inputSwitch: {
      gridColumn: "1",
      gridRow: "1"
    },
    status: {
      fontWeight: theme.typography.fontWeightMedium,
      fontSize: "12px",
      lineHeight: "14px",
      minHeight: "14px",
      marginTop: "8px"
    },
    statusSwitch: {
      gridColumn: "1 / span all",
      gridRow: "2"
    }
  };
};

export default styles;
