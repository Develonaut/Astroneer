import React from "react";
import Loadable from "react-loadable";

const AsyncPaginationControls = Loadable({
  loader: () =>
    import("components/shared/PaginationControls/PaginationControls" /* webpackChunkName: "PaginationControls" */),
  loading: () => <div>Loading...</div>
});

export default AsyncPaginationControls;
