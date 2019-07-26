import React from "react";
import { connect } from "react-redux";
import { getIsAuthenticated } from "selectors/UserSelectors";
import { withStyles } from "@material-ui/core/styles";

import Menu from "components/shared/Menu/Menu";
import UserAvatar from "components/user/UserAvatar/UserAvatar";
import UserCard from "components/user/UserCard/UserCard";

import styles from "components/user/UserMenu/UserMenu.styles";

const UserMenu = ({ isAuthenticated = false, className = "" }) => {
  if (!isAuthenticated) return null;
  return (
    <Menu toggleRenderer={({ onClick }) => <UserAvatar onClick={onClick} />}>
      <UserCard />
    </Menu>
  );
};

function mapStateToProps(state) {
  return {
    isAuthenticated: getIsAuthenticated(state)
  };
}

export default connect(
  mapStateToProps,
  null
)(withStyles(styles)(UserMenu));
