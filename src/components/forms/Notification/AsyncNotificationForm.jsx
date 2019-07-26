import React from "react";
import Loadable from "react-loadable";

const AsyncNotificationForm = Loadable({
  loader: () =>
    import(
      "components/forms/Notification/NotificationForm" /* webpackChunkName: "AsyncNotificationForm" */
    ),
  loading: () => <div>Loading</div>
});

export default AsyncNotificationForm;
