import React from "react";

import Switch from "@material-ui/core/Switch";

const SwitchInput = ({
  setFieldValue,
  props: { name, value: checked = false, className = "" },
  classes = {},
  color = "primary"
}) => {
  const handleOnChange = event => {
    const {
      target: { checked }
    } = event;

    setFieldValue(name, checked);
  };

  return (
    <Switch
      className={className}
      classes={classes}
      color={color}
      checked={checked}
      onClick={event => event.stopPropagation()}
      onChange={handleOnChange}
    />
  );
};

export default SwitchInput;
