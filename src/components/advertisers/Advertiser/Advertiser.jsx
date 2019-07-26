import React from "react";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";
import {
  getSelectedAdvertisers,
  getSelectedIds
} from "selectors/AdvertisersSelectors";
import { setState, remove } from "actions/AdvertisersActions";

import Divider from "@material-ui/core/Divider";
import AdvertiserCampaigns from "components/advertisers/AdvertiserCampaigns/AdvertiserCampaigns";
import AdvertiserMenu from "components/advertisers/AdvertiserMenu/AdvertiserMenu";
import Avatar from "@material-ui/core/Avatar";
import Button from "components/shared/Button/Button";

import styles from "components/advertisers/Advertiser/Advertiser.styles";
import AdvertiserContactDetails from "components/advertisers/AdvertiserContactDetails/AdvertiserContactDetails";

const Advertiser = ({
  classes = {},
  selectedItems = [],
  selectedIds = [],
  setState: dispatchSetState,
  remove: dispatchRemove
}) => {
  const selectedAdvertiser = selectedItems[0];
  const { advertiser, advertiserId, hex } = selectedAdvertiser;
  return (
    <div className={classes.root}>
      <header className={classes.header}>
        <Avatar className={classes.avatar} style={{ backgroundColor: hex }}>
          {advertiser.charAt(0).toUpperCase()}
        </Avatar>
        <h2>{advertiser}</h2>
        <AdvertiserMenu
          deleteButton={{
            onClick: () => dispatchRemove(selectedIds)
          }}
          editButton={{
            onClick: () =>
              dispatchSetState({
                isEditing: true,
                isCreating: false,
                isViewing: false
              })
          }}
        />
      </header>
      <Divider />
      <section className={classes.details}>
        <AdvertiserContactDetails advertiser={selectedAdvertiser} />
        <Divider />
        <AdvertiserCampaigns advertiserId={advertiserId} />
      </section>
      <Divider />
      <footer className={classes.footer}>
        <Button
          size="medium"
          className={classes.footerClose}
          onClick={() =>
            dispatchSetState({
              isEditing: false,
              isCreating: false,
              isViewing: false
            })
          }
          aria-label="Close"
        >
          Close
        </Button>
      </footer>
    </div>
  );
};

const mapDispatchToProps = {
  setState,
  remove
};

const mapStateToProps = state => {
  return {
    selectedItems: getSelectedAdvertisers(state),
    selectedIds: getSelectedIds(state)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(Advertiser));
