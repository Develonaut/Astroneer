import { createSelector } from "reselect";

// Selectors
export const NavSelector = ({ ui: { nav = {} } }) => nav;
export const FormSelector = ({ ui: { form = {} } }) => form;

export const getNavState = createSelector(
  [NavSelector],
  ({ isOpen = true } = {}) => isOpen
);

export const getFormActionType = createSelector(
  [FormSelector],
  ({ actionType = null }) => actionType
);

export const getFormContentType = createSelector(
  [FormSelector],
  ({ contentType = null }) => contentType
);
