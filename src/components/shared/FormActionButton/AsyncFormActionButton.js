import Loadable from "react-loadable";

const AsyncFormActionButton = Loadable({
  loader: () =>
    import("components/shared/FormActionButton/FormActionButton" /* webpackChunkName: "FormActionButton" */),
  loading: () => null
});

export default AsyncFormActionButton;
