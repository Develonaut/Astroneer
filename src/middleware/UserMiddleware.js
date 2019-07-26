import { getUrl, getAPIUrls } from "conf/urls";
import axios from "axios";

import { USER_REQUEST_LOGIN, userLogin } from "actions/UserActions";

let dispatch = null;

const UserMiddleware = ({ dispatch: storeDispatch }) => {
  dispatch = storeDispatch;
  return next => action => {
    switch (action.type) {
      case USER_REQUEST_LOGIN:
        attemptUserLogin(action.delta, action.formActions);
        break;
      default:
        break;
    }

    return next(action);
  };
};

function attemptUserLogin({ passWord = "", email = "" }, formActions) {
  axios({
    url: getUrl(getAPIUrls().AUTH, {
      endPoint: "auth"
    }),
    method: "POST",
    data: {
      passWord,
      email
    }
  })
    .then(({ data: { payload = {} } = {} }) => {
      dispatch(
        userLogin({
          isAuthenticated: true,
          ...payload
        })
      );
    })
    .catch(
      ({ response: { data: { payload: { errors = {} } = {} } = {} } = {} }) => {
        Object.keys(errors).forEach(key => {
          formActions.setFieldError(key, errors[key]);
        });
        formActions.setSubmitting(false);
      }
    );
}

export default UserMiddleware;
