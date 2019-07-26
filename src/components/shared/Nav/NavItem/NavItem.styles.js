const styles = ({ transitions, palette }) => {
  const itemWidth = 32;
  const itemWidthOpen = "98%";

  const hoverTransition = {
    easing: transitions.easing.sharp,
    duration: transitions.duration.shortest
  };

  const transitionOpen = {
    easing: transitions.easing.sharp,
    duration: transitions.duration.enteringScreen
  };

  const transitionClose = {
    easing: transitions.easing.sharp,
    duration: transitions.duration.leavingScreen
  };

  return {
    root: {
      width: "240px",
      height: "32px",
      marginBottom: "10px"
    },
    button: {
      height: "100%",
      minHeight: "100%",
      width: itemWidthOpen,
      minWidth: itemWidth,
      padding: "0",
      justifyContent: "left",
      overflow: "hidden",
      borderRadius: "0 16px 16px 0",
      transition: [
        transitions.create("width", transitionClose),
        transitions.create("margin", transitionClose)
      ].join(","),
      "&:hover": {
        backgroundColor: palette.common.moonlight
      }
    },
    "button--closed": {
      borderRadius: "16px",
      marginLeft: "20px",
      width: itemWidth,
      transition: [
        transitions.create("width", transitionOpen),
        transitions.create("margin", transitionOpen)
      ].join(",")
    },
    "button--active": {
      fontWeight: "bold",
      backgroundColor: palette.common.dew,
      "& $label": {
        color: palette.primary.main
      }
    },
    label: {
      display: "flex",
      transition: [
        transitions.create("padding", transitionClose),
        transitions.create("color", hoverTransition)
      ].join(","),
      padding: "0 12px 0 26px",
      color: palette.common.asteroid
    },
    "label--closed": {
      transition: transitions.create("padding", transitionOpen),
      padding: "0 6px"
    },
    leftIcon: {
      marginRight: "18px",
      fontSize: "20px",
      width: "20px !important"
    }
  };
};

export default styles;
