import React from "react";
import classNames from "classnames";
import { withStyles } from "@material-ui/core";
import { connect } from "react-redux";
import { getUserInfo } from "selectors/UserSelectors";

import styles from "components/user/UserInfo/UserInfo.styles";

const UserInfo = ({
  userInfo: { firstName = "", lastName = "", email = "" } = {},
  classes = {},
  className = ""
}) => {
  return (
    <ul className={classNames(classes.root, className)}>
      <li className={classes.root__name}>
        <div>{firstName}</div>
        <div>{lastName}</div>
      </li>
      <li className={classes.root__email}>{email}</li>
    </ul>
  );
};

function mapStateToProps(state) {
  return {
    userInfo: getUserInfo(state)
  };
}

export default connect(mapStateToProps)(withStyles(styles)(UserInfo));
