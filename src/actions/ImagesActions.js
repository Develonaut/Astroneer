export const GET_IMAGE_URL = "IMAGES:GET:SIGNED:URL";
export const SET_IMAGE_STATE = "IMAGES:SET:STATE";
export const FETCH_S3_IMAGES = "IMAGES:FETCH:S3";
export const SET_S3_IMAGES = "IMAGES:SET:S3";

export function getSignedImageUrl(id, file) {
  return {
    type: GET_IMAGE_URL,
    id,
    file
  };
}

export function fetchS3Images(delta = {}) {
  return {
    type: FETCH_S3_IMAGES,
    delta
  };
}

export function setImageState(id, delta = {}) {
  return {
    type: SET_IMAGE_STATE,
    id,
    delta
  };
}

export function setS3Images(delta = {}) {
  return {
    type: SET_S3_IMAGES,
    delta
  };
}
