import React from "react";
import { connect } from "react-redux";
import { setState, fetch, copy, remove } from "actions/AdUnitsActions";
import {
  getFilteredByDate,
  getIsSearching,
  getSelectedIds
} from "selectors/AdUnitsSelectors";

import ControlBar from "components/shared/ControlBar/ControlBar";
import ControlBarSection from "components/shared/ControlBar/ControlBarSection/ControlBarSection";
import ControlBarSubSection from "components/shared/ControlBar/ControlBarSubSection/ControlBarSubSection";
import AsyncCalendarControls from "components/shared/CalendarControls/AsyncCalendarControls";
import AsyncPaginationControls from "components/shared/PaginationControls/AsyncPaginationControls";
import AsyncQuickFilterSelect from "components/shared/QuickFilterSelect/AsyncQuickFilterSelect";
import AsyncFuzzySearch from "components/shared/FuzzySearch/AsyncFuzzySearch";
import AsyncContextMenu from "components/shared/ContextMenu/AsyncContextMenu";

const AdUnitsControls = ({
  setState: dispatchSetState,
  fetch: dispatchFetch,
  copy: dispatchCopy,
  remove: dispatchRemove,
  items = [],
  isSearching = false,
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
      <ControlBarSection>
        <AsyncCalendarControls />
        <AsyncPaginationControls />
      </ControlBarSection>
      <ControlBarSection transparent height="short">
        <ControlBarSubSection>
          <AsyncContextMenu
            selectedButton={{
              color: "primary",
              checked: !!selectedIds.length,
              onClick: () => dispatchSetState({ selectedIds: [] }),
              toolTip: !!selectedIds.length ? "Unselect All" : "Select All",
              indeterminate: selectedIds.length > 1
            }}
            previewButton
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
              tooltipTitle: "Options",
              items: optionMenuItems
            }}
            hasContext={selectedIds.length}
          />
          <AsyncFuzzySearch
            keys={[
              "pushId",
              "title",
              "advertiserId",
              "advertiser.label",
              "platform.label",
              "budgetType.label"
            ]}
            items={items}
            isSearching={isSearching}
            setState={dispatchSetState}
            placeholder="Search Title, Id, etc..."
          />
        </ControlBarSubSection>
        <AsyncQuickFilterSelect />
      </ControlBarSection>
    </ControlBar>
  );
};

const mapStateToProps = state => {
  return {
    items: getFilteredByDate(state),
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
