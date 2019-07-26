import React from "react";
import { withStyles } from "@material-ui/core/styles";

import styles from "components/shared/PaginatedList/PaginatedList.styles";

const PaginatedList = ({
  items = [],
  pageSize = 0,
  pageOffset = 0,
  classes = {},
  itemRenderer = () => {},
  headerRenderer = () => {},
  emptyListRenderer = () => {}
}) => {
  const list = (
    <ul>
      {items
        .slice(pageOffset, pageOffset + pageSize)
        .map(item => itemRenderer(item))}
    </ul>
  );

  return (
    <section className={classes.root}>
      {headerRenderer()}
      {!!items.length ? list : emptyListRenderer()}
    </section>
  );
};

export default withStyles(styles)(PaginatedList);
