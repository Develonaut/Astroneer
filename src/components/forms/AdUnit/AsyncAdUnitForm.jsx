import React, { forwardRef } from "react";
import Loadable from "react-loadable";

const AsyncAdUnitForm = Loadable({
  loader: () =>
    import(
      "components/forms/AdUnit/AdUnitForm" /* webpackChunkName: "AsyncAdUnitForm" */
    ),
  loading: forwardRef((props, ref) => <div ref={ref}>Loading</div>)
});

export default AsyncAdUnitForm;
