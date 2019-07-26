import { createSelector } from "reselect";
import { userOrganizationSelector } from "selectors/UserSelectors";

function sortAdvertisersAlphabetically(advertisers) {
  return advertisers.sort(function(a, b) {
    if (a.advertiser < b.advertiser) return -1;
    if (a.advertiser > b.advertiser) return 1;
    return 0;
  });
}

// Selectors
const AdvertisersByOrganizationSelector = ({
  advertisers: { advertisersByOrganization = {} }
}) => advertisersByOrganization;
const AdvertisersIsCreatingSelector = ({
  advertisers: { isCreating = false } = {}
}) => isCreating;
const AdvertisersIsEditingSelector = ({
  advertisers: { isEditing = false } = {}
}) => isEditing;
const AdvertisersIsViewingSelector = ({
  advertisers: { isViewing = false } = {}
}) => isViewing;
export const AdvertisersSelectedIdsSelector = ({
  advertisers: { selectedIds = [] } = {}
}) => selectedIds;
export const AdvertisersIsSearchingSelector = ({
  advertisers: { isSearching = false } = {}
}) => isSearching;
export const AdvertisersSearchResultsSelector = ({
  advertisers: { searchResults = [] } = {}
}) => searchResults;

export const getIsCreating = createSelector(
  [AdvertisersIsCreatingSelector],
  isCreating => isCreating
);

export const getIsEditing = createSelector(
  [AdvertisersIsEditingSelector],
  isEditing => isEditing
);

export const getIsSearching = createSelector(
  [AdvertisersIsSearchingSelector],
  isSearching => isSearching
);

export const getIsViewing = createSelector(
  [AdvertisersIsViewingSelector],
  isViewing => isViewing
);

export const getSelectedIds = createSelector(
  [AdvertisersSelectedIdsSelector],
  selectedIds => selectedIds
);

export const getAdvertisersByOrganization = createSelector(
  [AdvertisersByOrganizationSelector, userOrganizationSelector],
  (advertisersByOrganization, organization) =>
    advertisersByOrganization[organization]
);

export const getAdvertisersByOrganizationSortedAlphabetically = createSelector(
  [AdvertisersByOrganizationSelector, userOrganizationSelector],
  (advertisersByOrganization, organization) =>
    sortAdvertisersAlphabetically(advertisersByOrganization[organization])
);

export const getAdvertisersByOrgAsSelectOptions = createSelector(
  [AdvertisersByOrganizationSelector, userOrganizationSelector],
  (advertisersByOrganization, organization) =>
    sortAdvertisersAlphabetically(
      advertisersByOrganization[organization]
    ).reduce((advertisers, { advertiser = "" }) => {
      return [
        ...advertisers,
        {
          label: advertiser.trim(),
          value: advertiser
            .trim()
            .replace(/ /g, "_")
            .toLowerCase()
        }
      ];
    }, [])
);

export const getAdvertisersSearchResults = createSelector(
  [AdvertisersSearchResultsSelector],
  searchResults => searchResults
);

export const getSelectedAdvertisers = createSelector(
  [
    AdvertisersByOrganizationSelector,
    AdvertisersSelectedIdsSelector,
    userOrganizationSelector
  ],
  (advertisersByOrganization, selectedIds, organization) =>
    advertisersByOrganization[organization].filter(({ advertiserId }) =>
      selectedIds.includes(advertiserId)
    )
);
