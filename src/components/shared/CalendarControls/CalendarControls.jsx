import React from "react";
import classNames from "classnames";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { getRouteConfig } from "conf/routes";
import { withStyles } from "@material-ui/core/styles";
import { getSelectedDate } from "selectors/AdUnitsSelectors";
import { setState as setAdUnitsState } from "actions/AdUnitsActions";
import {
  getFormattedTodaysDate,
  getXDaysFromDate,
  formatDate,
  dateFormats
} from "conf/date";

import { KeyboardArrowRight, KeyboardArrowLeft } from "@material-ui/icons";
import Button from "components/shared/Button/Button";

import styles from "components/shared/CalendarControls/CalendarControls.styles";
const todaysDate = getFormattedTodaysDate();

const CalendarControls = ({
  classes = {},
  selectedDate = todaysDate,
  setState: dispatchSetState
}) => {
  const isToday = selectedDate === todaysDate;
  const pageOffsetReset = { pageOffset: 0 };

  const showAllOnclick = {
    ...pageOffsetReset,
    selectedDate: null
  };

  const todayOnClick = {
    ...pageOffsetReset,
    selectedDate: todaysDate
  };

  const previousOnClick = {
    ...pageOffsetReset,
    selectedDate: getXDaysFromDate(selectedDate, -1)
  };

  const nextOnClick = {
    ...pageOffsetReset,
    selectedDate: getXDaysFromDate(selectedDate, 1)
  };

  return (
    <section className={classNames([classes.root])}>
      <Button
        variant={!selectedDate ? "outlined" : "text"}
        color="primary"
        title="Show All"
        onClick={() => dispatchSetState(showAllOnclick)}
      >
        Show All
      </Button>
      <Button
        variant={isToday && selectedDate ? "outlined" : "text"}
        color="primary"
        title={getFormattedTodaysDate()}
        onClick={() => dispatchSetState(todayOnClick)}
      >
        Today
      </Button>
      <Button
        type="icon"
        disabled={!selectedDate}
        title="Previous Day"
        onClick={() => dispatchSetState(previousOnClick)}
      >
        <KeyboardArrowLeft fontSize="small" />
      </Button>
      <Button
        type="icon"
        disabled={!selectedDate}
        title="Next Day"
        onClick={() => dispatchSetState(nextOnClick)}
      >
        <KeyboardArrowRight fontSize="small" />
      </Button>
      <span disabled={!selectedDate}>
        {formatDate(selectedDate, dateFormats.MMM_DO_YYYY)}
      </span>
    </section>
  );
};

const mapStateToProps = (state, { location }) => {
  const { id } = getRouteConfig(location);
  const selectedDateSelector = {
    Ads: getSelectedDate(state)
  };

  return {
    id,
    selectedDate: selectedDateSelector[id]
  };
};

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
  )(withStyles(styles)(CalendarControls))
);
