import { createSelector } from "reselect";

const isFetchingSelector = state => state.status.isFetchingByCategory;

export const getAuthIsFetching = createSelector(
  [isFetchingSelector],
  auth => auth
);
