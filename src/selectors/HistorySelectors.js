import { createSelector } from "reselect";

// Selectors
const HistorySelector = state => state.history;

export const getCurrentLocation = createSelector(
  [HistorySelector],
  history => history.currentLocation
);

export const getPreviousLocation = createSelector(
  [HistorySelector],
  history => history.previousLocation
);

export const getReturnLocation = createSelector(
  [HistorySelector],
  history => history.returnLocation
);
