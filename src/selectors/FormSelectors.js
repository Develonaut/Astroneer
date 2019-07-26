import { createSelector } from "reselect";

// Selectors
export const FormSelector = ({ form = {} }) => form;

export const getActionType = createSelector(
  [FormSelector],
  ({ actionType = null }) => actionType
);

export const getContentType = createSelector(
  [FormSelector],
  ({ contentType = null }) => contentType
);
