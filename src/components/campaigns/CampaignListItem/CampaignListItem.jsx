import React from "react";
import { connect } from "react-redux";
import { setState } from "actions/CampaignsActions";
import { getLayoutType, getSelectedIds } from "selectors/CampaignsSelectors";

import ListItem from "components/shared/ListItem/ListItem";
import Checkbox from "@material-ui/core/Checkbox";

const CampaignListItem = ({
  campaignName,
  campaignId,
  selectedIds = [],
  setState: dispatchSetState
}) => {
  const onClick = event => {
    event.stopPropagation();
    const selectedState = selectedIds.includes(campaignId)
      ? { selectedIds: [] }
      : { selectedIds: [campaignId] };
    dispatchSetState(selectedState);
  };

  return (
    <ListItem>
      <Checkbox
        checked={selectedIds.includes(campaignId)}
        onClick={onClick}
        color="primary"
      />
      <section>{campaignName}</section>
    </ListItem>
  );
};

function mapStateToProps(state) {
  return {
    layoutType: getLayoutType(state),
    selectedIds: getSelectedIds(state)
  };
}

const mapDispatchToProps = {
  setState
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CampaignListItem);
