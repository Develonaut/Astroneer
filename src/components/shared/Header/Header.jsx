import React from "react";
import { connect } from "react-redux";
import { getIsAuthenticated } from "selectors/UserSelectors";
import { withStyles } from "@material-ui/core/styles";

import Logo from "components/shared/Logo/Logo";
import NavActionButton from "components/shared/Nav/NavActionButton/NavActionButton";

import styles from "components/shared/Header/Header.styles";
import UserMenu from "components/user/UserMenu/UserMenu";

const Header = ({ isAuthenticated = false, classes = {} }) => {
  return (
    <header className={classes.root}>
      <section className={classes.section}>
        {isAuthenticated && <NavActionButton />}
        <Logo className={styles.root__logo} />
      </section>
      {isAuthenticated && (
        <section className={classes.section}>
          <UserMenu />
        </section>
      )}
    </header>
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
)(withStyles(styles)(Header));
