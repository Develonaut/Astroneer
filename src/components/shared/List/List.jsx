import React from "react";
import { withStyles } from "@material-ui/core/styles";

import styles from "components/shared/List/List.styles";

const List = ({ items = [], classes = {}, itemRenderer = () => {} }) => {
  return (
    <ul className={classes.root}>{items.map(item => itemRenderer(item))}</ul>
  );
};

export default withStyles(styles)(List);
