import React from "react";
import { connect } from "react-redux";
import { userLogout } from "actions/UserActions";
import { withStyles } from "@material-ui/core/styles";

import Button from "components/shared/Button/Button";
import UserAvatar from "components/user/UserAvatar/UserAvatar";
import UserInfo from "components/user/UserInfo/UserInfo";
import OrganizationBadge from "components/user/OrganizationBadge/OrganizationBadge";

import styles from "components/user/UserCard/UserCard.styles";

function UserCard({ classes, userLogout: dispatchUserLogout }) {
  return (
    <div className={classes.root}>
      <div className={classes.info}>
        <UserAvatar className={classes.avatar} />
        <UserInfo />
        <OrganizationBadge />
      </div>
      <div>
        <Button
          size="small"
          href="mailto:rmchenry@spigot.com?subject=Bug Report/Feature Request"
        >
          Feedback
        </Button>
        <Button size="small" onClick={dispatchUserLogout}>
          Logout
        </Button>
      </div>
    </div>
  );
}

const mapDispatchToProps = {
  userLogout
};

export default connect(
  null,
  mapDispatchToProps
)(withStyles(styles)(UserCard));
