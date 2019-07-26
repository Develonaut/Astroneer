import React from "react";
import MUICheckbox from "@material-ui/core/Checkbox";
import Tooltip from "@material-ui/core/Tooltip";

const Checkbox = ({ disableTooltip = false, toolTip = null, ...restProps }) => {
  const toolTipTitle = !toolTip
    ? restProps.checked
      ? "Unselect"
      : "Select"
    : toolTip;
  return disableTooltip ? (
    <MUICheckbox {...restProps} />
  ) : (
    <Tooltip title={toolTipTitle} aria-label={toolTipTitle}>
      <MUICheckbox {...restProps} />
    </Tooltip>
  );
};

export default Checkbox;
