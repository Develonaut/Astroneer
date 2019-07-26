const styles = theme => ({
  root: {
    borderLeft: `5px solid ${theme.palette.common.rover}`
  },
  rootLive: {
    borderLeftColor: theme.palette.common.gamma
  },
  rootInactive: {
    opacity: ".45",
    borderLeftColor: "transparent",
    "&:hover": {
      opacity: ".75"
    },
    "&$rootSelected": {
      opacity: "1"
    }
  },
  rootSelected: {},
  column: {
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    lineHeight: theme.typography.pxToRem(18)
  }
});
export default styles;
