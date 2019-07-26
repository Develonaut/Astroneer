import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import { FORM_SET_STATE } from "actions/FormActions";

const initialState = {
  actionType: null
};

function FormModule(state = initialState, action) {
  switch (action.type) {
    case FORM_SET_STATE:
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
    key: "form",
    storage,
    blacklist: ["actionType", "contentType"]
  },
  FormModule
);

export default persistedReducer;
