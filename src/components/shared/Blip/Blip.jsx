import React from "react";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";

import styles from "components/shared/Blip/Blip.styles";

const Blip = ({ active = false, classes }) => (
  <svg height="10" width="10">
    <circle
      className={classNames({
        [classes.root_active]: active,
        [classes.root_inactive]: !active
      })}
      cx="5"
      cy="5"
      r="5"
    />
  </svg>
);

export default withStyles(styles)(Blip);
