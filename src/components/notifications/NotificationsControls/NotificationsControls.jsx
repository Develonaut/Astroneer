import React from "react";
import { connect } from "react-redux";
import { setState, fetch, copy, remove } from "actions/NotificationsActions";
import {
  getFiltered,
  getIsSearching,
  getSelectedIds
} from "selectors/NotificationsSelectors";

import ControlBar from "components/shared/ControlBar/ControlBar";
import ControlBarSection from "components/shared/ControlBar/ControlBarSection/ControlBarSection";
import ControlBarSubSection from "components/shared/ControlBar/ControlBarSubSection/ControlBarSubSection";
import AsyncQuickFilterSelect from "components/shared/QuickFilterSelect/AsyncQuickFilterSelect";
import AsyncFuzzySearch from "components/shared/FuzzySearch/AsyncFuzzySearch";
import AsyncContextMenu from "components/shared/ContextMenu/AsyncContextMenu";

const NotificationsControls = ({
  setState: dispatchSetState,
  fetch: dispatchFetch,
  copy: dispatchCopy,
  remove: dispatchRemove,
  items = [],
  isSearching = false,
  selectedIds = []
}) => {
  return (
    <ControlBar>
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
            hasContext={selectedIds.length}
          />
          <AsyncFuzzySearch
            keys={["notificationId", "title"]}
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
    items: getFiltered(state),
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
)(NotificationsControls);
