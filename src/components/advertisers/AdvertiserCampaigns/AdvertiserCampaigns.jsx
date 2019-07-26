import React from "react";
import classNames from "classnames";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";
import { getCampaignsBySelectedAdvertisers } from "selectors/CampaignsSelectors";
import { setState as setCampaignsState } from "actions/CampaignsActions";
import { setState as setAdvertisersState } from "actions/AdvertisersActions";
import { getUrls } from "conf/urls";

import ModalList from "components/shared/ModalList/ModalList";
import Button from "components/shared/Button/Button";

import styles from "components/advertisers/AdvertiserCampaigns/AdvertiserCampaigns.styles";

const AdvertiserCampaigns = ({
  classes,
  advertiserId,
  campaigns = {},
  setCampaignsState: dispatchSetCampaignsState,
  setAdvertisersState: dispatchSetAdvertisersState
}) => {
  const resetAdvertisersState = () => {
    dispatchSetAdvertisersState({
      isEditing: false,
      isCreating: false,
      isViewing: false
    });
  };

  const onCampaignClick = ({ campaignId }) => {
    dispatchSetCampaignsState({
      selectedIds: [campaignId],
      isEditing: true,
      isCreating: false
    });
    resetAdvertisersState();
  };

  return (
    <ModalList
      items={campaigns[advertiserId]}
      headerRenderer={({ extClasses }) => {
        return (
          <header className={classNames(extClasses, classes.header)}>
            <h3>Related Campaigns</h3>
            <Button to={getUrls().CAMPAIGNS}>View All</Button>
            <Button
              to={getUrls().CAMPAIGNS}
              onClick={() => {
                dispatchSetCampaignsState({
                  selectedIds: [],
                  isEditing: false,
                  isCreating: true
                });
              }}
            >
              Create
            </Button>
          </header>
        );
      }}
      itemRenderer={({ campaignId, campaignName }) => {
        return (
          <li key={campaignId}>
            <span>{campaignName}</span>
            <Button
              onClick={() => onCampaignClick({ campaignId })}
              to={getUrls().CAMPAIGNS}
            >
              Edit Campaign
            </Button>
          </li>
        );
      }}
    />
  );
};

const mapDispatchToProps = {
  setCampaignsState,
  setAdvertisersState
};

const mapStateToProps = state => ({
  campaigns: getCampaignsBySelectedAdvertisers(state)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(AdvertiserCampaigns));
