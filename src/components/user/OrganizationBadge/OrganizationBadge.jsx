import React from "react";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core";
import { getUserOrganization } from "selectors/UserSelectors";
import classNames from "classnames";

import styles from "components/user/OrganizationBadge/OrganizationBadge.styles";

const OrganizationBadge = ({
  organization = "",
  className = "",
  classes = {}
}) => {
  return (
    <div className={classNames([classes.root, className])}>{organization}</div>
  );
};

function mapStateToProps(state) {
  return {
    organization: getUserOrganization(state)
  };
}

export default connect(mapStateToProps)(withStyles(styles)(OrganizationBadge));
