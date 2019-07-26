import axios from "axios";
import { getUrl, getAPIUrls, getExternalUrls } from "conf/urls";
import parse from "url-parse";
import { getS3Images } from "selectors/ImagesSelectors";

import {
  GET_IMAGE_URL,
  FETCH_S3_IMAGES,
  setImageState,
  setS3Images
} from "actions/ImagesActions";

const bucketName = "push.images";

let dispatch = null;
let getState = null;

const ImagesMiddleware = ({
  dispatch: storeDispatch,
  getState: storeGetState
}) => {
  dispatch = storeDispatch;
  getState = storeGetState;
  return next => action => {
    switch (action.type) {
      case GET_IMAGE_URL:
        fetchImageUrl(action);
        break;
      case FETCH_S3_IMAGES:
        fetchS3Images(action.delta);
        break;
      default:
        break;
    }

    return next(action);
  };
};

async function fetchImageUrl({ id = null, file }) {
  if (!id) return null;
  const {
    data: { payload: signedUrl }
  } = await axios({
    url: getUrl(getAPIUrls().S3, {
      endPoint: "s3"
    }),
    method: "POST",
    data: {
      action: "getSignUrl",
      fileName: file.name,
      fileType: file.type
    }
  });

  axios
    .put(signedUrl, file, {
      headers: {
        "Content-Type": file.type
      }
    })
    .then(() => {
      const { pathname = "" } = parse(signedUrl);
      const imagePath = pathname.replace(`/${bucketName}`, "");
      const imageUrl = `${getUrl(getExternalUrls().S3IMAGES)}${imagePath}`;
      dispatch(
        setImageState(id, {
          signedUrl,
          imageUrl
        })
      );
    })
    .catch(e => {
      throw new Error(e);
    });
}

function fetchS3Images({ force = false }) {
  if (getS3Images(getState()).length && !force) return;

  axios({
    url: getUrl(getAPIUrls().S3),
    method: "POST",
    data: {
      action: "getS3Images"
    }
  })
    .then(({ data: { payload } } = {}) => {
      dispatch(setS3Images(payload));
    })
    .catch(err => {
      throw new Error(err);
    });
}

export default ImagesMiddleware;
