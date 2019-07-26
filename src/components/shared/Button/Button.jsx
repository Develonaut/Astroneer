import React from "react";
import classnames from "classnames";
import { Link } from "react-router-dom";
import FabCore from "@material-ui/core/Fab";
import IconButtonCore from "@material-ui/core/IconButton";
import ButtonCore from "@material-ui/core/Button";

import styles from "components/shared/Button/Button.module.css";

const buttonTypes = {
  fab: FabCore,
  button: ButtonCore,
  icon: IconButtonCore
};

const Button = ({
  type = "button",
  to = null,
  children = [],
  className = "",
  ...restProps
}) => {
  const Component = buttonTypes[type] || ButtonCore;
  const toProps = to
    ? {
        component: Link,
        to
      }
    : {};

  const buttonProps = {
    ...toProps,
    className: classnames(styles.root, className),
    ...restProps
  };

  return React.createElement(Component, buttonProps, children);
};

export default Button;
