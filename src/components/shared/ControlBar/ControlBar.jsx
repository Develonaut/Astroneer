import React from "react";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";

import styles from "components/shared/ControlBar/ControlBar.styles";

const ControlBar = ({ classes = {}, classOverides = {}, children = null }) => {
  if (!children) return null;
  return (
    <header className={classNames([classes.root, classOverides.root])}>
      {children}
    </header>
  );
};

export default withStyles(styles)(ControlBar);
