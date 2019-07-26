import { createSelector } from "reselect";

function filterByFilters(notifications = [], filters = []) {
  let filteredNotifications = notifications;
  // filters.forEach(({ value }) => {
  //   const type = validationSchema[value]._type;
  //   switch (type) {
  //     case "boolean":
  //       filteredNotifications = notifications.filter(
  //         notification => notification[value] === true
  //       );
  //       break;
  //     default:
  //       break;
  //   }
  // });

  return filteredNotifications;
}

// Selectors
const NotificationsSelector = ({ notifications: { items = [] } = {} } = {}) =>
  items;

const NotificationsPerformanceDataSelector = ({
  notifications: { performance = [] } = {}
} = {}) => performance;

const NotificationsLayoutTypeSelector = ({
  notifications: { layoutType = "compact" } = {}
} = {}) => layoutType;

const NotificationsisCreatingSelector = ({
  notifications: { isCreating = false } = {}
} = {}) => isCreating;

const NotificationsPageSizeSelector = ({
  notifications: { pageSize = 25 } = {}
} = {}) => pageSize;

const NotificationsPageOffsetSelector = ({
  notifications: { pageOffset = 0 } = {}
} = {}) => pageOffset;

const NotificationsSelectedIdsSelector = ({
  notifications: { selectedIds = [] } = {}
} = {}) => selectedIds;

const NotificationsisEditingSelector = ({
  notifications: { isEditing = false } = {}
} = {}) => isEditing;

export const NotificationsIsSearchingSelector = ({
  notifications: { isSearching = false } = {}
}) => isSearching;
const NotificationsDateSelector = ({
  notifications: { selectedDate } = {}
} = {}) => selectedDate;

const NotificationsQuickFilterSelector = ({
  notifications: { quickFilters = [] } = {}
} = {}) => quickFilters;

export const NotificationsSearchResultsSelector = ({
  notifications: { searchResults = [] } = {}
}) => searchResults;

export const getNotifications = createSelector(
  [NotificationsSelector],
  notifications => notifications
);

export const getIdsWithPerformanceData = createSelector(
  [NotificationsPerformanceDataSelector],
  notificationsPerformanceData =>
    notificationsPerformanceData.map(unit => unit.pushId)
);

export const getPerformanceData = createSelector(
  [NotificationsPerformanceDataSelector],
  notificationsPerformanceData => notificationsPerformanceData
);

export const getSelectedNotifications = createSelector(
  [NotificationsSelector, NotificationsSelectedIdsSelector],
  (notifications, selectedIds) =>
    notifications.filter(({ notificationId }) =>
      selectedIds.includes(notificationId)
    )
);

export const getFiltered = createSelector(
  [NotificationsSelector, NotificationsQuickFilterSelector],
  (notifications, quickFilters) => filterByFilters(notifications, quickFilters)
);

export const getSelectedDate = createSelector(
  [NotificationsDateSelector],
  selectedDate => selectedDate
);

export const getSelectedIds = createSelector(
  [NotificationsSelectedIdsSelector],
  selectedIds => selectedIds
);

export const getQuickFilters = createSelector(
  [NotificationsQuickFilterSelector],
  quickFilters => quickFilters
);

export const getIsCreating = createSelector(
  [NotificationsisCreatingSelector],
  isCreating => isCreating
);

export const getIsEditing = createSelector(
  [NotificationsisEditingSelector],
  isEditing => isEditing
);

export const getIsSearching = createSelector(
  [NotificationsIsSearchingSelector],
  isSearching => isSearching
);

export const getPageSize = createSelector(
  [NotificationsPageSizeSelector],
  pageSize => pageSize
);

export const getPageOffset = createSelector(
  [NotificationsPageOffsetSelector],
  pageOffset => pageOffset
);

export const getLayoutType = createSelector(
  [NotificationsLayoutTypeSelector],
  layoutType => layoutType
);

export const getSearchResults = createSelector(
  [NotificationsSearchResultsSelector],
  searchResults => searchResults
);
