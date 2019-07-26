import React from "react";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import { getUserAvatar } from "selectors/UserSelectors";

import Avatar from "@material-ui/core/Avatar";

import styles from "components/user/UserAvatar/UserAvatar.styles";

const UserAvatar = ({
  avatar = "",
  classes = {},
  onClick = () => {},
  className = ""
}) => {
  const root = classNames([classes.root, className], {
    [classes.root_clickable]: !!onClick
  });

  return (
    <Avatar
      src={avatar}
      onClick={onClick}
      alt="Users Avatar"
      classes={{
        root,
        img: classes.img
      }}
    />
  );
};

function mapStateToProps(state) {
  return {
    avatar: getUserAvatar(state)
  };
}

export default connect(mapStateToProps)(withStyles(styles)(UserAvatar));
