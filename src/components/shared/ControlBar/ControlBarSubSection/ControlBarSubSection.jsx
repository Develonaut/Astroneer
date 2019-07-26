import React from "react";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";

import styles from "components/shared/ControlBar/ControlBarSubSection/ControlBarSubSection.styles";

const ControlBarSubSection = ({
  classes = {},
  children = [],
  align = "between",
  transparent = false
}) => {
  const className = classNames(classes.root, {
    [classes.alignStart]: align === "start",
    [classes.alignEnd]: align === "end",
    [classes.alignCenter]: align === "center",
    [classes.alignBetween]: align === "between",
    [classes.transparent]: transparent
  });

  if (!children) return null;
  return <section className={className}>{children}</section>;
};

export default withStyles(styles)(ControlBarSubSection);
