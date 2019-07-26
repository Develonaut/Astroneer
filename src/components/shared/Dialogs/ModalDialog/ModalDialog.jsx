import React from "react";

import Dialog from "@material-ui/core/Dialog";

const ModalDialog = ({
  children = [],
  title = null,
  isActive = false,
  extClasses = {},
  onClose: dispatchOnClose
}) => {
  return (
    <Dialog
      open={isActive}
      onClose={dispatchOnClose}
      classes={{ paper: extClasses.paper }}
    >
      <section>{children}</section>
    </Dialog>
  );
};

export default ModalDialog;
