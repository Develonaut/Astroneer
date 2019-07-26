import axios from "axios";
import { getUrl, getAPIUrls } from "conf/urls";
import { FETCH_CAMPAIGNS, setState } from "actions/CampaignsActions";
import { getCampaignsByOrganization } from "selectors/CampaignsSelectors";

import { transformCampaignsFetch } from "transformers/CampaignsTransformer";

let dispatch = null;
let getState = null;

const CampaignsMiddleware = ({
  dispatch: storeDispatch,
  getState: storeGetState
}) => {
  dispatch = storeDispatch;
  getState = storeGetState;

  return next => action => {
    switch (action.type) {
      case FETCH_CAMPAIGNS:
        fetchCampaigns(action.delta);
        break;
      default:
        break;
    }

    return next(action);
  };
};

async function fetchCampaigns({ force = false }) {
  if (getCampaignsByOrganization(getState()).length && !force) return;
  axios({
    url: getUrl(getAPIUrls().CAMPAIGNS, { action: "get" }),
    method: "GET"
  })
    .then(({ data: { payload } }) => {
      dispatch(
        setState({
          campaignsByOrganization: {
            Spigot: transformCampaignsFetch(payload)
          }
        })
      );
    })
    .catch(err => {
      throw new Error(err);
    });
}

export default CampaignsMiddleware;
