import React from "react";

import Tooltip from "@material-ui/core/Tooltip";
import IconButton from "@material-ui/core/IconButton";
import Delete from "@material-ui/icons/Delete";

const DeleteButton = ({ onClick = () => {} }) => {
  return (
    <Tooltip title="Delete" aria-label="Delete">
      <IconButton onClick={onClick} variant="icon">
        <Delete fontSize="small" />
      </IconButton>
    </Tooltip>
  );
};

export default DeleteButton;
