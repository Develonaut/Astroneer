import React from "react";
import { withStyles } from "@material-ui/core";

import Dialog from "@material-ui/core/Dialog";
import Slide from "@material-ui/core/Slide";
import styles from "components/shared/Dialogs/FormDialog/FormDialog.styles";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const FormDialog = ({
  children = [],
  isActive = false,
  onClose: dispatchOnClose,
  classes = {}
}) => {
  return (
    <Dialog
      fullScreen
      open={isActive}
      onClose={dispatchOnClose}
      TransitionComponent={Transition}
      classes={classes}
    >
      {children}
    </Dialog>
  );
};

export default withStyles(styles)(FormDialog);
