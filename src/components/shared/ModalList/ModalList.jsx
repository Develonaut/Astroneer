import React from "react";
import { withStyles } from "@material-ui/core/styles";

import styles from "components/shared/ModalList/ModalList.styles";

const ModalList = ({
  items = [],
  classes = {},
  itemRenderer = () => {},
  headerRenderer = () => {}
}) => {
  return (
    <section className={classes.root}>
      {headerRenderer({ extClasses: classes.header })}
      <ul className={classes.items}>
        {items.map(item => itemRenderer({ extClasses: classes.item, ...item }))}
      </ul>
    </section>
  );
};

export default withStyles(styles)(ModalList);
