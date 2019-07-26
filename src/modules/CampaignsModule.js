import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import { SET_CAMPAIGNS, SET_CAMPAIGNS_STATE } from "actions/CampaignsActions";

const initialState = {
  isCreating: false,
  isEditing: false,
  selectedIds: [],
  filters: [],
  pageSize: 25,
  pageOffset: 0,
  layoutType: "compact",
  campaignsByOrganization: {
    Spigot: []
  }
};

function CampaignsModule(state = initialState, action) {
  switch (action.type) {
    case SET_CAMPAIGNS_STATE:
      return {
        ...state,
        ...action.delta
      };
    case SET_CAMPAIGNS:
      return {
        ...state,
        campaignsByOrganization: {
          ...state.campaignsByOrganization,
          ...action.delta
        }
      };
    default:
      return state;
  }
}

const persistedReducer = persistReducer(
  {
    key: "campaigns",
    storage,
    whitelist: ["campaignsByOrganization", "filters", "layoutType"]
  },
  CampaignsModule
);

export default persistedReducer;
