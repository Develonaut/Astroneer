import { createSelector } from "reselect";
import { userOrganizationSelector } from "selectors/UserSelectors";
import { AdvertisersSelectedIdsSelector } from "selectors/AdvertisersSelectors";

function filterByFilters(campaigns, filters = []) {
  if (!filters.length) return campaigns;
  return filters.reduce((filteredCampaigns, { key, value }) => {
    return filteredCampaigns.filter(campaign => campaign[key] === value);
  }, campaigns);
}

// Selectors
const CampaignsByOrganizationSelector = ({
  campaigns: { campaignsByOrganization = {} }
}) => campaignsByOrganization;
const CampaignsIsCreatingSelector = ({
  campaigns: { isCreating = false } = {}
}) => isCreating;
const CampaignsIsEditingSelector = ({
  campaigns: { isEditing = false } = {}
}) => isEditing;
const CampaignsSelectedIdsSelector = ({
  campaigns: { selectedIds = [] } = {}
}) => selectedIds;
const CampaignsFiltersSelector = ({ campaigns: { filters = [] } = {} } = {}) =>
  filters;
const CampaignsLayoutTypeSelector = ({
  campaigns: { layoutType = "compact" } = {}
} = {}) => layoutType;
const CampaignsPageSizeSelector = ({
  campaigns: { pageSize = 25 } = {}
} = {}) => pageSize;
const CampaignsPageOffsetSelector = ({
  campaigns: { pageOffset = 0 } = {}
} = {}) => pageOffset;

export const getIsCreating = createSelector(
  [CampaignsIsCreatingSelector],
  isCreating => isCreating
);

export const getSelectedCampaignsByOrganization = createSelector(
  [
    CampaignsByOrganizationSelector,
    userOrganizationSelector,
    CampaignsSelectedIdsSelector
  ],
  (campaignsByOrganization, organization, selectedIds) =>
    campaignsByOrganization[organization].filter(({ campaignId }) =>
      selectedIds.includes(campaignId)
    )
);

export const getIsEditing = createSelector(
  [CampaignsIsEditingSelector],
  isEditing => isEditing
);

export const getSelectedIds = createSelector(
  [CampaignsSelectedIdsSelector],
  selectedIds => selectedIds
);

export const getLayoutType = createSelector(
  [CampaignsLayoutTypeSelector],
  layoutType => layoutType
);

export const getPageSize = createSelector(
  [CampaignsPageSizeSelector],
  pageSize => pageSize
);

export const getPageOffset = createSelector(
  [CampaignsPageOffsetSelector],
  pageOffset => pageOffset
);

export const getCampaignsByOrganization = createSelector(
  [CampaignsByOrganizationSelector, userOrganizationSelector],
  (campaignsByOrganization, organization) =>
    campaignsByOrganization[organization]
);

export const getFilteredCampaignsByOrganization = createSelector(
  [
    CampaignsByOrganizationSelector,
    userOrganizationSelector,
    CampaignsFiltersSelector
  ],
  (campaignsByOrganization, organization, filters) =>
    filterByFilters(campaignsByOrganization[organization], filters)
);

export const getCampaignsBySelectedAdvertisers = createSelector(
  [
    CampaignsByOrganizationSelector,
    userOrganizationSelector,
    AdvertisersSelectedIdsSelector
  ],
  (campaigns, organization, selectedAdvertisers) => {
    return selectedAdvertisers.reduce((advertisers, advertiser) => {
      return {
        ...advertisers,
        [advertiser]: campaigns[organization].filter(
          campaign => campaign.advertiserId === advertiser
        )
      };
    }, {});
  }
);
