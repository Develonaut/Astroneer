import React from "react";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";
import {
  getPageSize,
  getPageOffset,
  getCampaignsByOrganization,
  getIsEditing,
  getIsCreating,
  getSelectedIds
  // getCampaignsSearchResults,
  // getIsSearching
} from "selectors/CampaignsSelectors";
import { setState } from "actions/CampaignsActions";

import CampaignsControls from "components/campaigns/CampaignsControls/CampaignsControls";
import CampaignListItem from "components/campaigns/CampaignListItem/CampaignListItem";
import AsyncFormActionButton from "components/shared/FormActionButton/AsyncFormActionButton";
import AsyncPaginatedList from "components/shared/PaginatedList/AsyncPaginatedList";
import ModalDialog from "components/shared/Dialogs/ModalDialog/ModalDialog";
import AsyncCampaignForm from "components/forms/Campaign/AsyncCampaignForm";

import styles from "components/views/Campaigns/Campaigns.styles";

const Campaigns = ({
  classes = {},
  pageOffset = 0,
  pageSize = 25,
  items = [],
  selectedIds = [],
  isActive,
  setState: dispatchSetState
}) => {
  return (
    <React.Fragment>
      <ModalDialog
        isActive={isActive}
        onClose={() =>
          dispatchSetState({ isEditing: false, isCreating: false })
        }
      >
        <AsyncCampaignForm />
      </ModalDialog>

      <section className={classes.root}>
        <CampaignsControls />
        <AsyncPaginatedList
          items={items}
          pageSize={pageSize}
          pageOffset={pageOffset}
          itemRenderer={props => (
            <CampaignListItem key={props.campaignId} {...props} />
          )}
        />
        <AsyncFormActionButton
          isEditing={selectedIds.length}
          onClick={dispatchSetState}
        />
      </section>
    </React.Fragment>
  );
};

const mapDispatchToProps = {
  setState
};

const mapStateToProps = state => {
  // TODO: Uncomment once campaigns can be searched.
  // const isSearching = getIsSearching(state) || false;
  return {
    pageSize: getPageSize(state),
    pageOffset: getPageOffset(state),
    isActive: getIsEditing(state) || getIsCreating(state),
    items: getCampaignsByOrganization(state),
    selectedIds: getSelectedIds(state)
    // items: isSearching
    //   ? getCampaignsSearchResults(state)
    //   : getCampaignsByOrganization(state)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(Campaigns));
