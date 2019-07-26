import { createSelector } from "reselect";
import { validationSchema } from "components/forms/configs/CreateAdUnit";

function filterByDate(adUnits = [], date = null) {
  if (!date) return adUnits;
  return adUnits.filter(
    ({ startDate, endDate }) => date >= startDate && date <= endDate
  );
}

function filterByFilters(adUnits = [], filters = []) {
  let filteredAdUnits = adUnits;
  filters.forEach(({ value }) => {
    const type = validationSchema[value]._type;
    switch (type) {
      case "boolean":
        filteredAdUnits = adUnits.filter(adUnit => adUnit[value] === true);
        break;
      default:
        break;
    }
  });

  return filteredAdUnits;
}

// Selectors
const AdUnitsSelector = ({ adUnits: { units = [] } = {} } = {}) => units;
const AdUnitsPerformanceDataSelector = ({
  adUnits: { performance = [] } = {}
} = {}) => performance;

const AdUnitsLayoutTypeSelector = ({
  adUnits: { layoutType = "compact" } = {}
} = {}) => layoutType;

const AdUnitsisCreatingSelector = ({
  adUnits: { isCreating = false } = {}
} = {}) => isCreating;

const AdUnitsPageSizeSelector = ({ adUnits: { pageSize = 25 } = {} } = {}) =>
  pageSize;

const AdUnitsPageOffsetSelector = ({ adUnits: { pageOffset = 0 } = {} } = {}) =>
  pageOffset;

const AdUnitsSelectedIdsSelector = ({
  adUnits: { selectedIds = [] } = {}
} = {}) => selectedIds;

const AdUnitsisEditingSelector = ({
  adUnits: { isEditing = false } = {}
} = {}) => isEditing;

export const AdUnitsIsSearchingSelector = ({
  adUnits: { isSearching = false } = {}
}) => isSearching;
const AdUnitsDateSelector = ({ adUnits: { selectedDate } = {} } = {}) =>
  selectedDate;

const AdUnitsQuickFilterSelector = ({
  adUnits: { quickFilters = [] } = {}
} = {}) => quickFilters;

export const AdUnitsSearchResultsSelector = ({
  adUnits: { searchResults = [] } = {}
}) => searchResults;

export const getAdUnits = createSelector(
  [AdUnitsSelector],
  adUnits => adUnits
);

export const getIdsWithPerformanceData = createSelector(
  [AdUnitsPerformanceDataSelector],
  adUnitsPerformanceData => adUnitsPerformanceData.map(unit => unit.pushId)
);

export const getPerformanceData = createSelector(
  [AdUnitsPerformanceDataSelector],
  adUnitsPerformanceData => adUnitsPerformanceData
);

export const getByDate = createSelector(
  [AdUnitsSelector, AdUnitsDateSelector],
  (adUnits, selectedDate) => filterByDate(adUnits, selectedDate)
);

export const getSelectedAdUnits = createSelector(
  [AdUnitsSelector, AdUnitsSelectedIdsSelector],
  (adUnits, selectedIds) =>
    adUnits.filter(({ pushId }) => selectedIds.includes(pushId))
);

export const getFilteredByDate = createSelector(
  [AdUnitsSelector, AdUnitsDateSelector, AdUnitsQuickFilterSelector],
  (adUnits, selectedDate, quickFilters) =>
    filterByFilters(filterByDate(adUnits, selectedDate), quickFilters)
);

export const getSelectedDate = createSelector(
  [AdUnitsDateSelector],
  selectedDate => selectedDate
);

export const getSelectedIds = createSelector(
  [AdUnitsSelectedIdsSelector],
  selectedIds => selectedIds
);

export const getQuickFilters = createSelector(
  [AdUnitsQuickFilterSelector],
  quickFilters => quickFilters
);

export const getIsCreating = createSelector(
  [AdUnitsisCreatingSelector],
  isCreating => isCreating
);

export const getIsEditing = createSelector(
  [AdUnitsisEditingSelector],
  isEditing => isEditing
);

export const getIsSearching = createSelector(
  [AdUnitsIsSearchingSelector],
  isSearching => isSearching
);

export const getPageSize = createSelector(
  [AdUnitsPageSizeSelector],
  pageSize => pageSize
);

export const getPageOffset = createSelector(
  [AdUnitsPageOffsetSelector],
  pageOffset => pageOffset
);

export const getLayoutType = createSelector(
  [AdUnitsLayoutTypeSelector],
  layoutType => layoutType
);

export const getSearchResults = createSelector(
  [AdUnitsSearchResultsSelector],
  searchResults => searchResults
);
