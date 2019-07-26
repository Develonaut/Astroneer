import React from 'react';
import { withStyles } from "@material-ui/core/styles";
import SkeletonLoader from "components/shared/SkeletonLoader/SkeletonLoader";

const styles = theme => ({
  root: {
    "width": "100%",
    "height": "100%",
    "display": "inline-grid",
    "gridGap": "5px",
    "gridTemplateRows": "64px 48px auto"
  }
});

const AdsSkeleton = ({ classes = {} }) => {

  const skeletons = [
    { height: 600, width: 3000, style: { width: "100%", height: "64px" } },
    { height: 600, width: 3000, style: { width: "100%", height: "48px" } },
    { height: 600, width: 3000, style: { width: "100%", height: "100%" } },
  ]

    return <SkeletonLoader skeletons={skeletons} className={classes.root} />
  };

export default withStyles(styles, { withTheme: true })(AdsSkeleton);
