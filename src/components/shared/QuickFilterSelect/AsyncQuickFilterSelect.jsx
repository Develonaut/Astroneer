import React from "react";
import Loadable from "react-loadable";

const AsyncQuickFilter = Loadable({
  loader: () =>
    import("components/shared/QuickFilterSelect/QuickFilterSelect" /* webpackChunkName: "QuickFilterSelect" */),
  loading: () => <div>Loading...</div>
});

export default AsyncQuickFilter;
