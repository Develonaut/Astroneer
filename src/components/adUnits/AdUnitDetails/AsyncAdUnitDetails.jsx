import React from "react";
import Loadable from "react-loadable";

const AsyncAdUnitDetails = Loadable({
  loader: () =>
    import("components/adUnits/AdUnitDetails/AdUnitDetails.jsx" /* webpackChunkName: "AdUnitDetails" */),
  loading: () => <div>Loading</div>
});

export default AsyncAdUnitDetails;
