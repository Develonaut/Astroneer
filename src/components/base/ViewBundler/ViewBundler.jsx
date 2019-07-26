import React from "react";
import classnames from "classnames";
import { withStyles } from "@material-ui/core";

import Notifier from "components/shared/Notifier/Notifier";

import styles from "components/base/ViewBundler/ViewBundler.styles";

const ViewBundler = ({ id, classes = {}, props, component: Component }) => {
  const viewClass = classnames([classes.root]);
  return (
    <React.Fragment>
      <Notifier />
      <main className={viewClass}>
        {Component && <Component id={id} {...props} />}
      </main>
    </React.Fragment>
  );
};

export default withStyles(styles)(ViewBundler);
