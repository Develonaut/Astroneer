import React from "react";
import { connect } from "react-redux";
import { setState, copy, remove, fetch } from "actions/AdvertisersActions";
import {
  getAdvertisersByOrganization,
  getIsSearching,
  getSelectedIds
} from "selectors/AdvertisersSelectors";

import ControlBar from "components/shared/ControlBar/ControlBar";
import ControlBarSection from "components/shared/ControlBar/ControlBarSection/ControlBarSection";
import AsyncFuzzySearch from "components/shared/FuzzySearch/AsyncFuzzySearch";
import ControlBarSubSection from "components/shared/ControlBar/ControlBarSubSection/ControlBarSubSection";
import AsyncContextMenu from "components/shared/ContextMenu/AsyncContextMenu";

const AdUnitsControls = ({
  setState: dispatchSetState,
  fetch: dispatchFetch,
  remove: dispatchRemove,
  copy: dispatchCopy,
  isSearching = false,
  items = [],
  selectedIds = []
}) => {
  const optionMenuItems = [
    {
      label: "Comfortable",
      onClick: () => dispatchSetState({ layoutType: "comfortable" })
    },
    {
      label: "Compact",
      onClick: () => dispatchSetState({ layoutType: "compact" })
    }
  ];

  return (
    <ControlBar>
      <ControlBarSection transparent height="short">
        <ControlBarSubSection>
          <AsyncContextMenu
            selectedButton={{
              color: "primary",
              checked: !!selectedIds.length,
              onClick: () => dispatchSetState({ selectedIds: [] }),
              indeterminate: selectedIds.length > 1
            }}
            copyButton={{
              onClick: count => dispatchCopy(count)
            }}
            deleteButton={{
              onClick: () => dispatchRemove(selectedIds)
            }}
            refreshButton={{
              onClick: () => dispatchFetch({ force: true })
            }}
            optionMenu={{
              items: optionMenuItems
            }}
            hasContext={selectedIds.length}
          />
          <AsyncFuzzySearch
            keys={["advertiser", "advertiserId"]}
            items={items}
            isSearching={isSearching}
            setState={dispatchSetState}
            placeholder="Search Name, etc..."
          />
        </ControlBarSubSection>
      </ControlBarSection>
    </ControlBar>
  );
};

const mapStateToProps = state => {
  return {
    items: getAdvertisersByOrganization(state),
    isSearching: getIsSearching(state),
    selectedIds: getSelectedIds(state)
  };
};

const mapDispatchToProps = {
  setState,
  fetch,
  copy,
  remove
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AdUnitsControls);
