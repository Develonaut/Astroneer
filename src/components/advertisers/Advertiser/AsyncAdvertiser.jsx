import React from "react";
import Loadable from "react-loadable";

const AsyncAdvertiser = Loadable({
  loader: () =>
    import("components/advertisers/Advertiser/Advertiser" /* webpackChunkName: "AsyncAdvertiser" */),
  loading: () => <div>Loading</div>
});

export default AsyncAdvertiser;
