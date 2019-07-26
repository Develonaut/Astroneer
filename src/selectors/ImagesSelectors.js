import { createSelector } from "reselect";

const ImagesSelector = state => state.images.S3Images || [];
const ImageSelector = (state, id) => state.images.imagesById[id] || {};

export const getImage = createSelector(
  [ImageSelector],
  image => image
);

export const getS3Images = createSelector(
  [ImagesSelector],
  images => images
);
