import React from "react";
import classNames from "classnames";
import { connect } from "react-redux";
import { getRoutes } from "conf/routes";
import { withStyles } from "@material-ui/core/styles";
import { getNavState } from "selectors/UISelectors";
import { setState } from "actions/UIActions";
import { withRouter } from "react-router";
import { getIsAuthenticated } from "selectors/UserSelectors";
import { isMobile } from "react-device-detect";

import Drawer from "@material-ui/core/Drawer";
import NavItem from "components/shared/Nav/NavItem/NavItem";

import styles from "components/shared/Nav/Nav.styles";

const Nav = ({
  isAuthenticated = false,
  isOpen = true,
  classes,
  setState: dispatchSetState
}) => {
  if (!isAuthenticated) return null;

  return (
    <Drawer
      variant={isMobile ? "temporary" : "permanent"}
      anchor="left"
      open={isOpen}
      onClose={() => dispatchSetState({ nav: { isOpen: false } })}
      className={classNames([classes.drawer], {
        [classes.drawer_mobile]: isMobile,
        [classes.drawerOpen]: isOpen,
        [classes.drawerClose]: !isOpen
      })}
      classes={{
        paper: classNames([classes.paper], {
          [classes.drawerOpen]: isOpen,
          [classes.drawerClose]: !isOpen
        })
      }}
    >
      <section className={classNames([classes.items])}>
        {getRoutes()
          .reverse()
          .filter(({ invisible }) => !invisible)
          .map(item => {
            return (
              <NavItem
                className={classNames([
                  styles["root__nav-item"],
                  styles.root__item
                ])}
                key={item.path}
                {...item}
              />
            );
          })}
      </section>
    </Drawer>
  );
};

function mapStateToProps(state) {
  return {
    isAuthenticated: getIsAuthenticated(state),
    isOpen: getNavState(state)
  };
}

export default withRouter(
  connect(
    mapStateToProps,
    {
      setState
    }
  )(withStyles(styles)(Nav))
);
