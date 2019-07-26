import React from "react";

import IconButton from "@material-ui/core/IconButton";
import EditIcon from "@material-ui/icons/Edit";

const EditButton = ({ onClick = () => {}, ...restProps }) => {
  return (
    <IconButton onClick={onClick} variant="icon" {...restProps}>
      <EditIcon fontSize="small" />
    </IconButton>
  );
};

export default EditButton;
