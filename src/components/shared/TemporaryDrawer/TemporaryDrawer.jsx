import React from "react";
import classnames from "classnames";

import Drawer from "@material-ui/core/Drawer";

import styles from "components/shared/TemporaryDrawer/TemporaryDrawer.module.css";

const TemporaryDrawer = ({
  anchor = "left",
  open,
  children = [],
  onClose,
  className = "",
  wrapperClass = ""
}) => {
  return (
    <Drawer
      classes={{
        paper: classnames(styles.root, className),
        paper: wrapperClass
      }}
      anchor={anchor}
      open={open}
      onClose={onClose}
    >
      {children}
    </Drawer>
  );
};

export default TemporaryDrawer;
