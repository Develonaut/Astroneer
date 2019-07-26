import { createStore, applyMiddleware, compose } from "redux";
import { persistStore } from "redux-persist";

import UserMiddleware from "middleware/UserMiddleware";
import ImagesMiddleware from "middleware/ImagesMiddleware";
import AdvertisersMiddleware from "middleware/AdvertisersMiddleware";
import AdUnitsMiddleware from "middleware/AdUnitsMiddleware";
import CampaignsMiddleware from "middleware/CampaignsMiddleware";
import NotificationsMiddleware from "middleware/NotificationsMiddleware";

import rootReducer from "./reducers";

const middleware = applyMiddleware(
  UserMiddleware,
  AdUnitsMiddleware,
  NotificationsMiddleware,
  AdvertisersMiddleware,
  CampaignsMiddleware,
  ImagesMiddleware
);

const composeEnhancers =
  (process.env.NODE_ENV !== "production" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;
const enhancers = composeEnhancers(middleware);

export default () => {
  const store = createStore(rootReducer, enhancers);
  const persistor = persistStore(store);
  return {
    store,
    persistor
  };
};
