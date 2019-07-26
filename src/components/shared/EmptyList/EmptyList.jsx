import React from "react";
import { withStyles } from "@material-ui/core";

import EmptyListIllustration from "components/SVGs/EmptyListIllustration";

import styles from "components/shared/EmptyList/EmptyList.styles";

const EmptyList = ({
  classes = {},
  title = "Feels a bit empty in here...",
  subTitle = ""
}) => {
  return (
    <div className={classes.root}>
      <EmptyListIllustration className={classes.illustration} />
      <header>
        <div className={classes.title}>{title}</div>
        {subTitle && <div className={classes.subTitle}>{subTitle}</div>}
      </header>
    </div>
  );
};

export default withStyles(styles)(EmptyList);
