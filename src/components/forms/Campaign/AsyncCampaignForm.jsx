import React from "react";
import Loadable from "react-loadable";

const AsyncCampaignForm = Loadable({
  loader: () =>
    import("components/forms/Campaign/CampaignForm" /* webpackChunkName: "AsyncCampaignForm" */),
  loading: () => <div>Loading</div>
});

export default AsyncCampaignForm;
