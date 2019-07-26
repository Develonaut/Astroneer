import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import { USER_SET_STATE, USER_LOGIN, USER_LOGOUT } from "actions/UserActions";

const initialState = {
  isAuthenticated: false,
  organization: "Spigot"
};

function UserModule(state = initialState, action) {
  switch (action.type) {
    case USER_SET_STATE:
    case USER_LOGIN:
      return {
        ...state,
        ...action.delta
      };
    case USER_LOGOUT:
      return {
        ...initialState
      };
    default:
      return state;
  }
}

const persistedReducer = persistReducer(
  {
    key: "user",
    storage
  },
  UserModule
);

export default persistedReducer;
