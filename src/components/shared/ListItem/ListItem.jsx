import React from "react";
import classnames from "classnames";
import { withStyles } from "@material-ui/core/styles";

import styles from "components/shared/ListItem/ListItem.styles";

const ListItem = ({
  layoutType = "compact",
  onClick = () => {},
  classes = {},
  extClasses = {},
  children = [],
  ...restProps
}) => {
  const listItemClass = classnames([
    classes.root,
    extClasses.root,
    [classes[`root_${layoutType}`]]
  ]);
  return (
    <li className={listItemClass} onClick={onClick} {...restProps}>
      {children}
    </li>
  );
};

export default withStyles(styles)(ListItem);
