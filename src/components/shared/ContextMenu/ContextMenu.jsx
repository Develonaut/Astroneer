import React from "react";
import { withStyles } from "@material-ui/core/styles";

import Menu from "components/shared/Menu/Menu";
import RefreshButton from "components/shared/RefreshButton/RefreshButton";
import AsyncContextButtons from "components/shared/ContextMenu/AsyncContextButtons";

import styles from "components/shared/ContextMenu/ContextMenu.styles";

const ContextMenu = ({
  classes = {},
  hasContext = false,
  refreshButton = null,
  optionMenu = null,
  ...restProps
}) => {
  return (
    <section className={classes.root}>
      {!!hasContext && <AsyncContextButtons {...restProps} />}
      {!!refreshButton && <RefreshButton {...refreshButton} />}
      {!!optionMenu && <Menu {...optionMenu} />}
    </section>
  );
};

export default withStyles(styles)(ContextMenu);
