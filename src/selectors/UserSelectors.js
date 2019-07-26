import { createSelector } from "reselect";

const userSelector = state => state.user;
export const userOrganizationSelector = ({ user: { organization = null } }) =>
  organization;

export const getUser = createSelector(
  [userSelector],
  user => user
);

export const getIsAuthenticated = createSelector(
  [userSelector],
  ({ isAuthenticated = false }) => isAuthenticated
);

export const getUserAvatar = createSelector(
  [userSelector],
  user => user.avatar
);

export const getUserInfo = createSelector(
  [userSelector],
  ({ email, firstName, lastName }) => {
    return {
      email,
      firstName,
      lastName
    };
  }
);

export const getUserOrganization = createSelector(
  [userSelector],
  user => user.organization
);
