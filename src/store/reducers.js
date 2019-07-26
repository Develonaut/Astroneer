import { combineReducers } from "redux";
import history from "modules/HistoryModule";
import status from "modules/StatusModule";
import ui from "modules/UIModule";
import form from "modules/FormModule";
import user from "modules/UserModule";
import snackbars from "modules/SnackbarModule";
import advertisers from "modules/AdvertisersModule";
import adUnits from "modules/AdUnitsModule";
import campaigns from "modules/CampaignsModule";
import images from "modules/ImagesModule";
import notifications from "modules/NotificationsModule";

const reducers = combineReducers({
  history,
  status,
  ui,
  form,
  user,
  snackbars,
  adUnits,
  advertisers,
  campaigns,
  images,
  notifications
});

export default reducers;
