import React from "react";
import Loadable from "react-loadable";

const AsyncListHeader = Loadable({
  loader: () =>
    import("components/shared/ListHeader/ListHeader" /* webpackChunkName: "List" */),
  loading: () => <div>Loading...</div>
});

export default AsyncListHeader;
