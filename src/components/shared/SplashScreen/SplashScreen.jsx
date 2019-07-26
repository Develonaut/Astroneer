import React from "react";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";

import styles from "components/shared/SplashScreen/SplashScreen.styles";

const SplashScreen = ({ children = [], className = "", classes }) => (
  <section className={classNames([classes.root, className])}>{children}</section>
);

export default withStyles(styles)(SplashScreen);
