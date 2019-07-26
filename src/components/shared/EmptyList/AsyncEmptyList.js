import Loadable from "react-loadable";

const AsyncEmptyList = Loadable({
  loader: () =>
    import(
      "components/shared/EmptyList/EmptyList" /* webpackChunkName: "EmptyList" */
    ),
  loading: () => null
});

export default AsyncEmptyList;
