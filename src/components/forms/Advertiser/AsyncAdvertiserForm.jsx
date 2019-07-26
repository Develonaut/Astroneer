import React from "react";
import Loadable from "react-loadable";

const AsyncAdvertiserForm = Loadable({
  loader: () =>
    import("components/forms/Advertiser/AdvertiserForm" /* webpackChunkName: "AsyncAdvertiserForm" */),
  loading: () => <div>Loading</div>
});

export default AsyncAdvertiserForm;
