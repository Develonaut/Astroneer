import React from "react";
import Loadable from "react-loadable";

const AsyncContextButtons = Loadable({
  loader: () =>
    import("components/shared/ContextMenu/ContextButtons" /* webpackChunkName: "ContextButtons" */),
  loading: () => <div>Loading</div>
});

export default AsyncContextButtons;
