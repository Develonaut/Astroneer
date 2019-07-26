import Loadable from "react-loadable";

const AsyncForm = Loadable({
  loader: () =>
    import("components/forms/Form/Form" /* webpackChunkName: "AsyncForm" */),
  loading: () => null
});

export default AsyncForm;
