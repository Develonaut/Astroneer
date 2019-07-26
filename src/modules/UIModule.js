import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import { UI_SET_STATE } from "actions/UIActions";

const initialState = {
  nav: {
    isOpen: true
  },
  form: {
    actionType: null,
    contentType: null
  }
};

function UIModule(state = initialState, action) {
  switch (action.type) {
    case UI_SET_STATE:
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
    key: "ui",
    storage,
    blacklist: ["form"]
  },
  UIModule
);

export default persistedReducer;
