import axios from "axios";
import { getUrl, getAPIUrls } from "conf/urls";
import {
  FETCH_AD_UNITS,
  COPY_AD_UNITS,
  REMOVE_AD_UNITS,
  CREATE_AD_UNIT,
  UPDATE_AD_UNIT,
  setState
} from "actions/AdUnitsActions";
import { enqueueSnackbar } from "actions/SnackbarActions";
import { getAdUnits, getSelectedAdUnits } from "selectors/AdUnitsSelectors";
import {
  transformPostDelta,
  transformAdUnitsFetch,
  transformCopyDelta,
  transformAdUnitsPerformanceFetch
} from "transformers/AdUnitsTransformer";

import { fetch as fetchAdvertisers } from "actions/AdvertisersActions";

let dispatch = null;
let getState = null;

const AdUnitsMiddleware = ({
  dispatch: storeDispatch,
  getState: storeGetState
}) => {
  dispatch = storeDispatch;
  getState = storeGetState;

  return next => action => {
    switch (action.type) {
      case FETCH_AD_UNITS:
        fetch(action.delta);
        break;
      case CREATE_AD_UNIT:
        create(action.delta, action.formActions);
        break;
      case UPDATE_AD_UNIT:
        update(action.delta, action.formActions);
        break;
      case COPY_AD_UNITS:
        copy(action.count);
        break;
      case REMOVE_AD_UNITS:
        remove(action.delta);
        break;
      default:
        break;
    }

    return next(action);
  };
};

function handleError(error) {
  dispatch(
    enqueueSnackbar({
      message: `${error}`,
      options: {
        variant: "warning"
      }
    })
  );
}

async function remove(delta = []) {
  try {
    await axios(
      getUrl(getAPIUrls().AD_UNITS, {
        action: "remove"
      }),
      {
        method: "POST",
        data: delta
      }
    );
    fetch({
      force: true
    });
    dispatch(
      enqueueSnackbar({
        message: "Ad(s) Deleted",
        options: {
          variant: "error"
        }
      })
    );
  } catch (error) {
    handleError(error);
  }
}

function createCopy(delta) {
  const { email } = getState().user;
  const userData = {
    createdOrChangedBy: email
  };

  return axios(
    getUrl(getAPIUrls().AD_UNITS, {
      action: "create"
    }),
    {
      method: "POST",
      data: transformCopyDelta({
        ...delta,
        ...userData
      })
    }
  );
}

async function copy(count = 1) {
  try {
    const selectedAdUnits = getSelectedAdUnits(getState());
    for (let adUnit of selectedAdUnits) {
      const { title } = adUnit;
      const copies = Array(count).fill(null);
      const copyPromises = copies.map((copy, idx) => {
        const copyPrefix = idx > 0 ? `Copy (${idx}) -` : "Copy -";
        return createCopy({
          ...adUnit,
          title: `${copyPrefix} ${title}`
        });
      });
      await Promise.all(copyPromises);
    }
    fetch({
      force: true
    });
    dispatch(
      enqueueSnackbar({
        message: "Ad(s) Copied",
        options: {
          variant: "success"
        }
      })
    );
  } catch (error) {
    handleError(error);
  }
}

async function fetch({ force = false, silent = false } = {}) {
  if (getAdUnits(getState()).length && !force) return;
  fetchPerformance();
  try {
    const { data: { payload = [] } = {} } = await axios(
      getUrl(getAPIUrls().AD_UNITS, {
        action: "get"
      }),
      {
        method: "GET"
      }
    );
    dispatch(
      fetchAdvertisers({
        force: true,
        silent: true
      })
    );
    dispatch(
      setState({
        units: transformAdUnitsFetch({
          adUnits: payload[0],
          getState
        })
      })
    );
    if (!silent) {
      dispatch(
        enqueueSnackbar({
          message: "Ads Updated",
          options: {
            variant: "info"
          }
        })
      );
    }
  } catch (error) {
    handleError(error);
  }
}

async function fetchPerformance() {
  try {
    const { data: { payload = [] } = {} } = await axios(
      getUrl(getAPIUrls().AD_UNITS, {
        action: "performance"
      }),
      {
        method: "GET"
      }
    );
    dispatch(
      setState({
        performance: transformAdUnitsPerformanceFetch({
          adUnits: payload,
          getState
        })
      })
    );
  } catch (error) {
    // Don't need to make this error loud,
    // it will just throw in the console if it's
    // an issue.
    console.error(error);
  }
}

async function update(
  delta,
  { resetForm = () => {}, setSubmitting = () => {} } = {}
) {
  const { email } = getState().user;
  const userData = {
    createdOrChangedBy: email
  };

  try {
    await axios(
      getUrl(getAPIUrls().AD_UNITS, {
        action: "update"
      }),
      {
        method: "POST",
        data: transformPostDelta({
          ...delta,
          ...userData
        })
      }
    );
    fetch({
      force: true,
      silent: true
    });
    resetForm();
    dispatch(
      setState({
        isCreating: false,
        isEditing: false,
        selectedIds: []
      })
    );
    dispatch(
      enqueueSnackbar({
        message: "Ad Updated",
        options: {
          variant: "success"
        }
      })
    );
  } catch (error) {
    setSubmitting(false);
    dispatch(
      enqueueSnackbar({
        message: `${error}`,
        options: {
          variant: "warning"
        }
      })
    );
  }
}

function create(delta, formActions) {
  const { email } = getState().user;
  const userData = {
    createdOrChangedBy: email
  };

  axios(
    getUrl(getAPIUrls().AD_UNITS, {
      action: "create"
    }),
    {
      method: "POST",
      data: transformPostDelta({
        ...delta,
        ...userData
      })
    }
  )
    .then(() => {
      fetch({
        force: true
      });
      formActions.resetForm();
      dispatch(
        setState({
          isCreating: false,
          isEditing: false
        })
      );
      dispatch(
        enqueueSnackbar({
          message: "Ad Created",
          options: {
            variant: "success"
          }
        })
      );
    })
    .catch(err => {
      formActions.setStatus("Something went wrong");
      formActions.setSubmitting(false);
      dispatch(
        enqueueSnackbar({
          message: `${err}`,
          options: {
            variant: "warning"
          }
        })
      );
    });
}

export default AdUnitsMiddleware;
