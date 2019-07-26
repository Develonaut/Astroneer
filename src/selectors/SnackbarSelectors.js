import { createSelector } from "reselect";

// Selectors
const SnackbarsSelector = ({ snackbars: { snackbars: notifications = [] } }) =>
  notifications;
const DisplayedSnackbarsSelector = ({ snackbars: { displayed = [] } }) =>
  displayed;

export const getSnackbars = createSelector(
  [SnackbarsSelector],
  snackbars => snackbars
);

export const getDisplayed = createSelector(
  [DisplayedSnackbarsSelector],
  displayed => displayed
);
