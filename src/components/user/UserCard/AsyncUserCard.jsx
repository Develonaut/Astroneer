import React from "react";
import Loadable from "react-loadable";

const AsyncAds = Loadable({
  loader: () =>
    import("components/user/UserCard/AsyncUserCard" /* webpackChunkName: "AsyncUserCard" */),
  loading: () => <div>Loading</div>
});

export default AsyncAds;
