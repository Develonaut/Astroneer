import React from "react";
import { withStyles } from "@material-ui/core/styles";

import EditButton from "components/shared/EditButton/EditButton";
import DeleteButton from "components/shared/DeleteButton/DeleteButton";

import styles from "components/shared/ContextMenu/ContextMenu.styles";

const ContextMenu = ({
  classes = {},
  deleteButton = null,
  editButton = null
}) => {
  return (
    <section className={classes.root}>
      {!!editButton && <EditButton {...editButton} />}
      {!!deleteButton && <DeleteButton {...deleteButton} />}
    </section>
  );
};

export default withStyles(styles)(ContextMenu);
