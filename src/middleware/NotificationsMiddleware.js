import axios from "axios";
import moment from "moment";
import { getUrl, getAPIUrls } from "conf/urls";
import {
  FETCH_NOTIFICATIONS,
  COPY_NOTIFICATIONS,
  REMOVE_NOTIFICATIONS,
  CREATE_NOTIFICATION,
  UPDATE_NOTIFICATION,
  setState
} from "actions/NotificationsActions";
import { enqueueSnackbar } from "actions/SnackbarActions";
import {
  getNotifications,
  getSelectedNotifications
} from "selectors/NotificationsSelectors";
import {
  transformPostDelta,
  transformNotificationsFetch,
  transformCopyDelta
} from "transformers/NotificationsTransformer";

let dispatch = null;
let getState = null;

const NotificationsMiddleware = ({
  dispatch: storeDispatch,
  getState: storeGetState
}) => {
  dispatch = storeDispatch;
  getState = storeGetState;

  return next => action => {
    switch (action.type) {
      case FETCH_NOTIFICATIONS:
        fetch(action.delta);
        break;
      case CREATE_NOTIFICATION:
        create(action.delta, action.formActions);
        break;
      case UPDATE_NOTIFICATION:
        update(action.delta, action.formActions);
        break;
      case COPY_NOTIFICATIONS:
        copy(action.count);
        break;
      case REMOVE_NOTIFICATIONS:
        remove(action.delta);
        break;
      default:
        break;
    }

    return next(action);
  };
};

function createModifiedInfo() {
  const { email } = getState().user;
  const userData = {
    createdOrChangedBy: email,
    lastUpdated: moment().toISOString()
  };
  return userData;
}

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
      getUrl(getAPIUrls().NOTIFICATIONS, {
        action: "delete"
      }),
      {
        method: "POST",
        data: transformPostDelta(getSelectedNotifications(getState())[0])
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
  console.log(
    transformCopyDelta({
      ...delta,
      ...createModifiedInfo()
    })
  );
  return axios(
    getUrl(getAPIUrls().NOTIFICATIONS, {
      action: "create"
    }),
    {
      method: "POST",
      data: transformCopyDelta({
        ...delta,
        ...createModifiedInfo()
      })
    }
  );
}

async function copy(count = 1) {
  try {
    const selectedNotifications = getSelectedNotifications(getState());
    for (let notification of selectedNotifications) {
      const { title } = notification;
      const copies = Array(count).fill(null);
      const copyPromises = copies.map((_, idx) => {
        const copyPrefix = idx > 0 ? `Copy (${idx}) -` : "Copy -";
        return createCopy({
          ...notification,
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
        message: "Notification(s) Copied",
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
  if (getNotifications(getState()).length && !force) return;
  try {
    const { data: { payload = [] } = {} } = await axios(
      getUrl(getAPIUrls().NOTIFICATIONS, {
        action: "get"
      }),
      {
        method: "GET"
      }
    );
    dispatch(
      setState({
        items: transformNotificationsFetch({ items: payload })
      })
    );
    if (!silent) {
      dispatch(
        enqueueSnackbar({
          message: "Notifications Updated",
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

async function update(
  delta,
  { resetForm = () => {}, setSubmitting = () => {} } = {}
) {
  try {
    await axios(
      getUrl(getAPIUrls().NOTIFICATIONS, {
        action: "update"
      }),
      {
        method: "POST",
        data: transformPostDelta({
          ...delta,
          ...createModifiedInfo()
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
        message: "Notification Updated",
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
  axios(
    getUrl(getAPIUrls().NOTIFICATIONS, {
      action: "create"
    }),
    {
      method: "POST",
      data: transformPostDelta({
        ...delta,
        ...createModifiedInfo()
      })
    }
  )
    .then(() => {
      fetch({ force: true });
      formActions.resetForm();
      dispatch(
        setState({
          isCreating: false,
          isEditing: false
        })
      );
      dispatch(
        enqueueSnackbar({
          message: "Notification Created",
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

export default NotificationsMiddleware;
