import React from "react";
import Loadable from "react-loadable";

const AsyncCalendarControls = Loadable({
  loader: () =>
    import("components/shared/CalendarControls/CalendarControls" /* webpackChunkName: "CalendarControls" */),
  loading: () => <div>Loading</div>
});

export default AsyncCalendarControls;
