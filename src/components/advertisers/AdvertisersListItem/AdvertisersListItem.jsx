import React from "react";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";
import { setState } from "actions/AdvertisersActions";
import { getSelectedIds } from "selectors/AdvertisersSelectors";

import Avatar from "@material-ui/core/Avatar";
import Checkbox from "@material-ui/core/Checkbox";
import ListItem from "components/shared/ListItem/ListItem";

import styles from "components/advertisers/AdvertisersListItem/AdvertisersListItem.styles";

const AdvertisersListItem = ({
  classes,
  props,
  selectedIds,
  setState: dispatchSetState,
  layoutType
}) => {
  const { advertiser, advertiserId, hex } = props;
  const onClick = event => {
    event.stopPropagation();
    const selectedState = selectedIds.includes(advertiserId)
      ? { selectedIds: [] }
      : { selectedIds: [advertiserId] };
    dispatchSetState(selectedState);
  };

  const onItemClick = () => {
    dispatchSetState({
      isEditing: false,
      isViewing: true,
      isCreating: false,
      selectedIds: [advertiserId]
    });
  };

  return (
    <ListItem onClick={onItemClick} layoutType={layoutType}>
      <Checkbox
        checked={selectedIds.includes(advertiserId)}
        onClick={onClick}
        color="primary"
      />
      <Avatar className={classes.avatar} style={{ backgroundColor: hex }}>
        {advertiser.charAt(0).toUpperCase()}
      </Avatar>
      {advertiser}
    </ListItem>
  );
};

function mapStateToProps(state) {
  return {
    selectedIds: getSelectedIds(state)
  };
}

const mapDispatchToProps = {
  setState
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(AdvertisersListItem));
