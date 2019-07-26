import React from "react";
import { intToString, numberWithCommas } from "conf/utils";
import {
  AttachMoney,
  TouchApp,
  MoveToInbox,
  CompareArrows
} from "@material-ui/icons";
import Tooltip from "@material-ui/core/Tooltip";

const BudgetTransformer = ({ value, props }) => {
  const {
    budgetType: { value: budgetType, label }
  } = props;

  const commonStyles = {
    verticalAlign: "middle"
  };

  const iconStyles = {
    ...commonStyles,
    marginRight: "2px"
  };

  const icon = {
    spend: <AttachMoney style={iconStyles} fontSize="small" />,
    receives: <MoveToInbox style={iconStyles} fontSize="small" />,
    clicks: <TouchApp style={iconStyles} fontSize="small" />,
    conversions: <CompareArrows style={iconStyles} fontSize="small" />
  };
  
  return (
    <Tooltip title={`${label}: ${numberWithCommas(value)}`} aria-label={`${label}: ${numberWithCommas(value)}`}>
      <span>
        {icon[budgetType]}
        <span style={commonStyles}>{intToString(value)}</span>
      </span>
    </Tooltip>
  );
};

export default BudgetTransformer;
