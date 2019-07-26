import React from "react";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";
import {
  getPageSize,
  getPageOffset,
  getFiltered,
  getIsSearching,
  getSearchResults,
  getIsEditing,
  getIsCreating,
  getSelectedIds
} from "selectors/NotificationsSelectors";
import { setState, fetch } from "actions/NotificationsActions";
import {
  headerColumns,
  itemColumns,
  headerGridStyles,
  itemGridStyles
} from "components/views/Notifications/NotificationsListConfig.js";

import AsyncListHeader from "components/shared/ListHeader/AsyncListHeader";
import AsyncNotificationForm from "components/forms/Notification/AsyncNotificationForm";
import AsyncPaginatedList from "components/shared/PaginatedList/AsyncPaginatedList";
import AsyncFormActionButton from "components/shared/FormActionButton/AsyncFormActionButton";
import AsyncEmptyList from "components/shared/EmptyList/EmptyList";
import ModalDialog from "components/shared/Dialogs/ModalDialog/ModalDialog";
import NotificationsControls from "components/notifications/NotificationsControls/NotificationsControls";
import NotificationListItem from "components/notifications/NotificationListItem/NotificationListItem";

import styles from "components/views/Notifications/Notifications.styles";

const Notifications = ({
  classes = {},
  pageOffset = 0,
  pageSize = 25,
  items = [],
  isActive,
  setState: dispatchSetState,
  selectedIds = []
}) => {
  return (
    <section className={classes.root}>
      <ModalDialog
        extClasses={{ paper: classes.modal }}
        isActive={isActive}
        onClose={() =>
          dispatchSetState({ isEditing: false, isCreating: false })
        }
      >
        <AsyncNotificationForm />
      </ModalDialog>
      <NotificationsControls />
      <AsyncPaginatedList
        items={items}
        pageSize={pageSize}
        pageOffset={pageOffset}
        headerRenderer={() => (
          <AsyncListHeader
            style={{
              ...headerGridStyles
            }}
            extClasses={{ root: classes.listHeader }}
            columns={headerColumns}
          />
        )}
        itemRenderer={props => (
          <NotificationListItem
            style={{ ...itemGridStyles }}
            extClasses={{ root: classes.listItem }}
            key={props.notificationId}
            columns={itemColumns}
            props={props}
          />
        )}
        emptyListRenderer={() => (
          <AsyncEmptyList subTitle="Any created Notifications will show up here. Friendly reminder: make sure you don't have the wrong filter on!" />
        )}
      />
      <AsyncFormActionButton
        isEditing={selectedIds.length}
        onClick={dispatchSetState}
      />
    </section>
  );
};

const mapDispatchToProps = {
  setState,
  fetch
};

const mapStateToProps = state => {
  const isSearching = getIsSearching(state);
  return {
    isActive: getIsEditing(state) || getIsCreating(state),
    pageSize: getPageSize(state),
    pageOffset: getPageOffset(state),
    selectedIds: getSelectedIds(state),
    items: isSearching ? getSearchResults(state) : getFiltered(state)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(Notifications));
