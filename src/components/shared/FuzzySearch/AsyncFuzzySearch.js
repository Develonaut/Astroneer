import React from "react";
import Loadable from "react-loadable";

const AsyncFuzzySearch = Loadable({
  loader: () =>
    import("components/shared/FuzzySearch/FuzzySearch" /* webpackChunkName: "FuzzySearch" */),
  loading: () => <div>Loading...</div>
});

export default AsyncFuzzySearch;
