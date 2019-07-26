import React from "react";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";

import ListHeaderColumn from "components/shared/ListHeader/ListHeaderColumn";

import styles from "components/shared/ListHeader/ListHeader.styles";

const ListHeader = ({
  columns = [],
  classes = {},
  extClasses = {},
  ...restProps
}) => {
  if (!columns) return null;
  return (
    <section
      className={classNames([classes.root, extClasses.root])}
      {...restProps}
    >
      {columns.map(({ key, ...restProps }) => (
        <ListHeaderColumn
          key={key}
          className={classNames([classes.item, extClasses.item])}
          {...restProps}
        />
      ))}
    </section>
  );
};

export default withStyles(styles)(ListHeader);
