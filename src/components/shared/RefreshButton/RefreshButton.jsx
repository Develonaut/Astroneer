import React from "react";

import Button from "components/shared/Button/Button";
import RefreshIcon from "@material-ui/icons/Refresh";
import Tooltip from "@material-ui/core/Tooltip";

const DeleteButton = ({ onClick = () => {} }) => {
  return (
    <Tooltip title="Update" aria-label="Update">
      <Button type="icon" onClick={onClick}>
        <RefreshIcon fontSize="small" />
      </Button>
    </Tooltip>
  );
};

export default DeleteButton;
