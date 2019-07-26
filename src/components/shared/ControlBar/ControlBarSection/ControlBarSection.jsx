import React from "react";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";

import styles from "components/shared/ControlBar/ControlBarSection/ControlBarSection.styles";

const ControlBarSection = ({
  classes = {},
  children = [],
  align = "between",
  transparent = false,
  height = "tall"
}) => {
  const className = classNames(classes.root, {
    [classes.alignStart]: align === "start",
    [classes.alignEnd]: align === "end",
    [classes.alignCenter]: align === "center",
    [classes.alignBetween]: align === "between",
    [classes.heightTall]: height === "tall",
    [classes.heightShort]: height === "short",
    [classes.transparent]: transparent
  });

  if (!children) return null;
  return <section className={className}>{children}</section>;
};

export default withStyles(styles)(ControlBarSection);
