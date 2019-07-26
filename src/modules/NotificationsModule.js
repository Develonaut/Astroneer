import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import initialState from "initialStates/NotificationsInitialState";
import {
  UPDATE_NOTIFICATION,
  SET_NOTIFICATIONS_STATE
} from "actions/NotificationsActions";

function Notifications(state = initialState, action) {
  switch (action.type) {
    case SET_NOTIFICATIONS_STATE:
      return {
        ...state,
        ...action.delta
      };
    case UPDATE_NOTIFICATION:
      return {
        ...state,
        edit: {
          id: action.id
        }
      };
    default:
      return state;
  }
}

const persistedReducer = persistReducer(
  {
    key: "notifications",
    whitelist: ["items", "quickFilters", "layoutType"],
    storage
  },
  Notifications
);

export default persistedReducer;
