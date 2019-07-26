import axios from "axios";
import { getUrl, getAPIUrls } from "conf/urls";
import {
  FETCH_ADVERTISERS,
  CREATE_ADVERTISER,
  UPDATE_ADVERTISER,
  setState
} from "actions/AdvertisersActions";

import { enqueueSnackbar } from "actions/SnackbarActions";
import { getAdvertisersByOrganization } from "selectors/AdvertisersSelectors";

import {
  transformAdvertisersFetch,
  transformPostDelta
} from "transformers/AdvertisersTransformer";

let dispatch = null;
let getState = null;

const AdvertisersMiddleware = ({
  dispatch: storeDispatch,
  getState: storeGetState
}) => {
  dispatch = storeDispatch;
  getState = storeGetState;

  return next => action => {
    switch (action.type) {
      case FETCH_ADVERTISERS:
        fetch(action.delta);
        break;
      case CREATE_ADVERTISER:
        create(action.delta, action.formActions);
        break;
      case UPDATE_ADVERTISER:
        update(action.delta, action.formActions);
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

async function fetch({ force = false, silent = false }) {
  if (getAdvertisersByOrganization(getState()).length && !force) return;
  try {
    const {
      data: { payload }
    } = await axios({
      url: getUrl(getAPIUrls().ADVERTISERS, {
        action: "get"
      }),
      method: "GET"
    });

    dispatch(
      setState({
        advertisersByOrganization: {
          Spigot: transformAdvertisersFetch({
            advertisers: payload,
            getState
          })
        }
      })
    );
    if (!silent) {
      dispatch(
        enqueueSnackbar({
          message: "Advertisers Updated",
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

async function update(delta, formActions = {}) {
  try {
    await axios(
      getUrl(getAPIUrls().ADVERTISERS, {
        action: "update"
      }),
      {
        method: "POST",
        data: transformPostDelta(delta)
      }
    );

    fetch({
      force: true,
      silent: true
    });
    formActions.resetForm();
    dispatch(
      setState({
        isCreating: false,
        isEditing: false,
        isViewing: false,
        selectedIds: []
      })
    );
    dispatch(
      enqueueSnackbar({
        message: `${delta.advertiser} Updated`,
        options: {
          variant: "success"
        }
      })
    );
  } catch (error) {
    formActions.setSubmitting(false);
    handleError(error);
  }
}

async function create(delta, formActions) {
  try {
    await axios(
      getUrl(getAPIUrls().ADVERTISERS, {
        action: "create"
      }),
      {
        method: "POST",
        data: transformPostDelta(delta)
      }
    );
    fetch({
      force: true
    });
    formActions.resetForm();
    dispatch(
      setState({
        isCreating: false,
        isEditing: false,
        isViewing: false
      })
    );
    dispatch(
      enqueueSnackbar({
        message: `Advertiser (${delta.advertiser}) Created`,
        options: {
          variant: "success"
        }
      })
    );
  } catch (error) {
    formActions.setStatus("Something went wrong");
    formActions.setSubmitting(false);
    handleError(error);
  }
}

export default AdvertisersMiddleware;
