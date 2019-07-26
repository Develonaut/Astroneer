import Loadable from "react-loadable";
import Skeleton from "components/views/Ads/AdsSkeleton";

const AsyncAds = Loadable({
  loader: () =>
    import("components/views/Ads/Ads" /* webpackChunkName: "AsyncAds" */),
  loading: Skeleton
});

export default AsyncAds;
