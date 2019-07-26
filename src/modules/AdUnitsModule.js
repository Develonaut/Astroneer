import { getFormattedTodaysDate } from "conf/date";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import { UPDATE_AD_UNIT, SET_AD_UNITS_STATE } from "actions/AdUnitsActions";

const initialState = {
  units: [],
  selectedIds: [],
  isCreating: false,
  isEditing: false,
  isSearching: false,
  pageSize: 25,
  pageOffset: 0,
  layoutType: "compact",
  selectedDate: getFormattedTodaysDate(),
  quickFilters: [
    {
      value: "active",
      label: "Active"
    }
  ]
};

function AdUnits(state = initialState, action) {
  switch (action.type) {
    case SET_AD_UNITS_STATE:
      return {
        ...state,
        ...action.delta
      };
    case UPDATE_AD_UNIT:
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
    key: "adUnits",
    whitelist: ["units", "quickFilters", "layoutType", "performance"],
    storage
  },
  AdUnits
);

export default persistedReducer;
