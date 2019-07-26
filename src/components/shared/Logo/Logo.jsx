import React from "react";
import { withStyles } from "@material-ui/core";
import AstroneerLogo from "components/SVGs/AstroneerLogo";

import styles from "components/shared/Logo/Logo.styles";

const Logo = ({ classes = {} }) => <AstroneerLogo className={classes.root} />;

export default withStyles(styles)(Logo);
