import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import {
  SET_ADVERTISERS,
  SET_ADVERTISERS_STATE
} from "actions/AdvertisersActions";

const initialState = {
  isCreating: false,
  isEditing: false,
  isViewing: false,
  isSearching: false,
  searchResults: [],
  selectedIds: [],
  advertisersByOrganization: {
    Spigot: []
  }
};

function AdvertisersModule(state = initialState, action) {
  switch (action.type) {
    case SET_ADVERTISERS_STATE:
      return {
        ...state,
        ...action.delta
      };
    case SET_ADVERTISERS:
      return {
        ...state,
        advertisersByOrganization: {
          ...state.advertisersByOrganization,
          ...action.delta
        }
      };
    default:
      return state;
  }
}

const persistedReducer = persistReducer(
  {
    key: "advertisers",
    storage,
    whitelist: ["advertisersByOrganization"]
  },
  AdvertisersModule
);

export default persistedReducer;
