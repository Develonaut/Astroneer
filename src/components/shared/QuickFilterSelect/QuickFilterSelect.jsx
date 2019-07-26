import React from "react";
import classNames from "classnames";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { withStyles } from "@material-ui/core/styles";
import { getRouteConfig } from "conf/routes";
import { setState as setAdUnitsState } from "actions/AdUnitsActions";
import { getQuickFilters } from "selectors/AdUnitsSelectors";

import SelectInput from "components/inputs/SelectInput/SelectInput";

import styles from "components/shared/QuickFilterSelect/QuickFilterSelect.styles";

const options = [
  { value: "turnedOn", label: "Turned On" },
  { value: "active", label: "Active" }
];

const ControlBarSubHeader = ({
  id,
  quickFilters = [],
  setState: dispatchSetState,
  classes = {}
}) => {
  return (
    <SelectInput
      props={{
        value: quickFilters,
        options,
        isMulti: true,
        label: "Quick Filter"
      }}
      className={classNames(classes.root)}
      setFieldValue={(name, data = []) =>
        dispatchSetState({ quickFilters: data })
      }
    />
  );
};

function mapStateToProps(state, { location }) {
  const { id } = getRouteConfig(location);
  const quickFilterseSelector = {
    Ads: getQuickFilters(state)
  };

  return {
    id,
    quickFilters: quickFilterseSelector[id]
  };
}

const mapDispatchToProps = (dispatch, { location }) => {
  const { id } = getRouteConfig(location);
  const setStateMethods = {
    Ads: setAdUnitsState
  };
  const setState = setStateMethods[id] ? setStateMethods[id] : () => {};
  return {
    setState: delta => dispatch(setState(delta))
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(withStyles(styles)(ControlBarSubHeader))
);
