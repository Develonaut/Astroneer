import React from "react";
import { withStyles } from "@material-ui/core";

import FormWrapper from "components/auth/FormWrapper/FormWrapper";
import SplashScreen from "components/shared/SplashScreen/SplashScreen";
import AuthSplashIllustration from "components/SVGs/AuthSplashIllustration";

import styles from "components/views/Auth/Auth.styles.js";

const Auth = ({ classes = {} }) => {
  return (
    <SplashScreen className={classes.root}>
      <FormWrapper />
      <div className={classes.hero}>
        <AuthSplashIllustration className={classes.heroIllustration} />
      </div>
    </SplashScreen>
  );
};

export default withStyles(styles)(Auth);
