import React from "react";
import classnames from "classnames";
import { withStyles } from "@material-ui/core";
import { withRouter } from "react-router";
import { getAuthUrls } from "conf/urls";
import shortid from "shortid";

import LoginForm from "components/auth/LoginForm/LoginForm";
import RegisterForm from "components/auth/RegisterForm/RegisterForm";

import styles from "components/auth/FormWrapper/FormWrapper.styles";

const wrapperBundles = {
  [getAuthUrls().LOGIN]: LoginForm,
  [getAuthUrls().REGISTER]: RegisterForm
};

function FormWrapper({
  className = "",
  classes = {},
  location: { pathname = "" } = {}
}) {
  return (
    <section className={classnames([classes.root])}>
      {wrapperBundles[pathname] &&
        React.createElement(
          wrapperBundles[pathname],
          {
            formId: shortid.generate()
          },
          className
        )}
    </section>
  );
}

export default withRouter(withStyles(styles)(FormWrapper));
