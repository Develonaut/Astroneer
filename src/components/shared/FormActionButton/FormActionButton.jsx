import React from "react";
import { withStyles } from "@material-ui/core/styles";
import onEventPreloader from "conf/onEventPreloader";

import AsyncForm from "components/forms/Form/AsyncForm";
import Button from "components/shared/Button/Button";
import EditIcon from "@material-ui/icons/Edit";
import AddIcon from "@material-ui/icons/Add";

import styles from "components/shared/FormActionButton/FormActionButton.styles.js";

const FormActionButton = ({
  onClick = () => {},
  isEditing = false,
  classes = {}
}) => {
  return (
    <Button
      type="fab"
      variant="round"
      color="primary"
      onClick={() =>
        onClick(
          isEditing
            ? { isEditing: true, isCreating: false }
            : { isEditing: false, isCreating: true }
        )
      }
      className={classes.root}
      {...onEventPreloader({
        event: "onMouseOver",
        component: AsyncForm
      })}
    >
      {isEditing ? <EditIcon /> : <AddIcon />}
    </Button>
  );
};

export default withStyles(styles)(FormActionButton);
