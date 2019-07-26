import React from "react";
import Loadable from "react-loadable";

const AsyncList = Loadable({
  loader: () =>
    import("components/shared/List/List" /* webpackChunkName: "List" */),
  loading: () => <div>Loading...</div>
});

export default AsyncList;
