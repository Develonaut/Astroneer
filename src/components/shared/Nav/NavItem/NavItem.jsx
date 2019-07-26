import React from "react";
import classNames from "classnames";
import { connect } from "react-redux";
import { withRouter, matchPath } from "react-router";
import { withStyles } from "@material-ui/core/styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getNavState } from "selectors/UISelectors";

import Button from "components/shared/Button/Button";

import styles from "components/shared/Nav/NavItem/NavItem.styles";

const NavItem = ({
  isOpen,
  classes,
  location: { pathname = "" } = {},
  path,
  props: { icon = "", name = null, exact = true, to = "" }
}) => {
  const pathMatch = matchPath(pathname, { path, exact }) || {};
  const isActive = Object.keys(pathMatch).length;

  const buttonClass = classNames(classes.button, {
    [classes["button--closed"]]: !isOpen,
    [classes["button--active"]]: isActive
  });

  const labelClass = classNames(classes.label, {
    [classes["label--closed"]]: !isOpen,
    [classes["label--active"]]: isActive
  });

  return (
    <div className={classes.root}>
      <Button
        disableRipple
        disableFocusRipple
        to={to}
        variant="text"
        classes={{
          root: buttonClass,
          label: labelClass
        }}
      >
        <FontAwesomeIcon
          icon={icon}
          className={classNames(classes.leftIcon, classes.iconSmall)}
        />
        {name}
      </Button>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    isOpen: getNavState(state)
  };
}

export default withRouter(
  connect(mapStateToProps)(withStyles(styles)(NavItem))
);
