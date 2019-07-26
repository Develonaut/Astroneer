import React from "react";
import Loadable from "react-loadable";

const PaginatedList = Loadable({
  loader: () =>
    import("components/shared/PaginatedList/PaginatedList" /* webpackChunkName: "PaginatedList" */),
  loading: () => <div>Loading...</div>
});

export default PaginatedList;
