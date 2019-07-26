import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import { ENQUEUE_SNACKBAR, REMOVE_SNACKBAR } from "actions/SnackbarActions";

const initialState = {
  snackbars: []
};

function SnackbarModule(state = initialState, action) {
  switch (action.type) {
    case ENQUEUE_SNACKBAR:
      return {
        ...state,
        snackbars: [
          ...state.snackbars,
          {
            ...action.snackbar
          }
        ]
      };
    case REMOVE_SNACKBAR:
      return {
        ...state,
        snackbars: state.snackbars.filter(
          snackbar => snackbar.key !== action.key
        )
      };
    default:
      return state;
  }
}

const persistedReducer = persistReducer(
  {
    key: "snackbars",
    blacklist: ["snackbars"],
    storage
  },
  SnackbarModule
);

export default persistedReducer;
