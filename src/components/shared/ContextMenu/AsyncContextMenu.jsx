import React from "react";
import Loadable from "react-loadable";

const AsyncContextMenu = Loadable({
  loader: () =>
    import("components/shared/ContextMenu/ContextMenu" /* webpackChunkName: "ContextMenu" */),
  loading: () => <div>Loading</div>
});

export default AsyncContextMenu;
