import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import { SET_IMAGE_STATE, SET_S3_IMAGES } from "actions/ImagesActions";

const initialState = {
  S3Images: [],
  imagesById: {}
};

function ImagesModule(state = initialState, action) {
  switch (action.type) {
    case SET_IMAGE_STATE:
      return {
        ...state,
        imagesById: {
          ...state.imagesById,
          [action.id]: {
            ...state.imagesById[action.id],
            ...action.delta
          }
        }
      };
    case SET_S3_IMAGES:
      return {
        ...state,
        S3Images: action.delta
      };
    default:
      return state;
  }
}

const persistedReducer = persistReducer(
  {
    key: "images",
    blacklist: ["imagesById"],
    storage
  },
  ImagesModule
);

export default persistedReducer;
