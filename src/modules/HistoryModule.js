import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import { HISTORY_SET_STATE } from "actions/HistoryActions";

const initialState = {
  previousLocation: {},
  currentLocation: {},
  returnLocation: {}
};

function HistoryModule(state = initialState, action) {
  switch (action.type) {
    case HISTORY_SET_STATE:
      return {
        ...state,
        ...action.delta
      };
    default:
      return state;
  }
}

const persistedReducer = persistReducer(
  {
    key: "history",
    storage
  },
  HistoryModule
);

export default persistedReducer;
