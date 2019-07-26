import React from "react";
import { connect } from "react-redux";
import { userLogout } from "actions/UserActions";
import Button from "components/shared/Button/Button";

const LogoutButton = ({ userLogout: dispatchUserLogout }) => {
  return (
    <Button size="small" onClick={dispatchUserLogout}>
      Logout
    </Button>
  );
};

const mapDispatchToProps = {
  userLogout
};

export default connect(
  null,
  mapDispatchToProps
)(LogoutButton);
