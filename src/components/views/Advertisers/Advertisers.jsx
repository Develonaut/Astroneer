import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import {
  getIsEditing,
  getIsCreating,
  getIsViewing,
  getIsSearching,
  getSelectedIds,
  getAdvertisersByOrganizationSortedAlphabetically,
  getAdvertisersSearchResults
} from "selectors/AdvertisersSelectors";
import { setState } from "actions/AdvertisersActions";

import AdvertisersControls from "components/advertisers/AdvertisersControls/AdvertisersControls";
import AsyncFormActionButton from "components/shared/FormActionButton/AsyncFormActionButton";
import AsyncList from "components/shared/List/AsyncList";
import ModalDialog from "components/shared/Dialogs/ModalDialog/ModalDialog";
import AsyncAdvertiser from "components/advertisers/Advertiser/AsyncAdvertiser";
import AsyncAdvertiserForm from "components/forms/Advertiser/AsyncAdvertiserForm";
import AdvertisersListItem from "components/advertisers/AdvertisersListItem/AdvertisersListItem";

import styles from "components/views/Advertisers/Advertisers.styles";

const Advertisers = ({
  classes = {},
  isViewing,
  isEditing,
  isActive,
  setState: dispatchSetState,
  selectedIds = [],
  items
}) => {
  return (
    <section className={classes.root}>
      <ModalDialog
        extClasses={{ paper: classes.modal }}
        isActive={isActive}
        onClose={() =>
          dispatchSetState({
            isEditing: false,
            isCreating: false,
            isViewing: false
          })
        }
      >
        {isViewing && <AsyncAdvertiser />}
        {!isViewing && isActive && (
          <AsyncAdvertiserForm isEditing={isEditing} />
        )}
      </ModalDialog>
      <AdvertisersControls />
      <AsyncFormActionButton
        isEditing={selectedIds.length}
        onClick={dispatchSetState}
      />
      <AsyncList
        items={items}
        itemRenderer={props => (
          <AdvertisersListItem
            extClasses={{ root: classes.listItem }}
            key={props.advertiserId}
            props={props}
          />
        )}
      />
    </section>
  );
};

const mapDispatchToProps = {
  setState
};

const mapStateToProps = state => {
  const isViewing = getIsViewing(state);
  const isSearching = getIsSearching(state);
  const isEditing = getIsEditing(state);
  const isCreating = getIsCreating(state);
  const selectedIds = getSelectedIds(state);
  return {
    isViewing,
    isEditing,
    isCreating,
    selectedIds,
    isActive: isEditing || isCreating || isViewing,
    items: isSearching
      ? getAdvertisersSearchResults(state)
      : getAdvertisersByOrganizationSortedAlphabetically(state)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(Advertisers));
