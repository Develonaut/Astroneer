import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import { STATUS_SET_STATE } from "actions/StatusActions";
import { USER_REQUEST_LOGIN, USER_LOGIN } from "actions/UserActions";

const initialState = {
  formsById: {},
  isLoadingByCategory: {
    app: false
  },
  isFetchingByCategory: {
    app: false,
    auth: false
  }
};

function StatusModule(state = initialState, action) {
  switch (action.type) {
    case STATUS_SET_STATE:
      return {
        ...state,
        ...action.delta
      };
    case USER_REQUEST_LOGIN:
      return {
        ...state,
        isFetchingByCategory: {
          ...state.isFetchingByCategory,
          auth: true
        }
      };
    case USER_LOGIN:
      return {
        ...state,
        isFetchingByCategory: {
          ...state.isFetchingByCategory,
          auth: false
        }
      };
    default:
      return state;
  }
}

const persistedReducer = persistReducer(
  {
    key: "status",
    blacklist: ["formsById"],
    storage
  },
  StatusModule
);

export default persistedReducer;
