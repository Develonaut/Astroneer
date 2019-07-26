import React from "react";
import Loadable from "react-loadable";

const AsyncAdUnitPerformance = Loadable({
  loader: () =>
    import("components/adUnits/AdUnitPerformance/AdUnitPerformance.jsx" /* webpackChunkName: "AdUnitPerformance" */),
  loading: () => <div>Loading</div>
});

export default AsyncAdUnitPerformance;
