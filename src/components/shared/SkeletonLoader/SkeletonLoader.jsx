import React from 'react';
import shortid from "shortid";
import { withStyles } from "@material-ui/core/styles";

import ContentLoader from "react-content-loader";

const componentId = shortid.generate();

const SkeletonLoader = ({ skeletons = [], className = "", theme: { palette: { common: {
  moonlight,
  dew,
} = {} } = {} } = {} }) => {
  const loaderProps = {
    speed: 2,
    primaryColor: moonlight,
    secondaryColor: dew,
  }

    return (
      <div className={className}>
        { skeletons.map((skeleton, idx) => <ContentLoader animate={false} key={`${componentId}${idx}`} preserveAspectRatio="none" {...loaderProps} {...skeleton} />) }
      </div>
    )
  };

export default withStyles({}, { withTheme: true })(SkeletonLoader);
