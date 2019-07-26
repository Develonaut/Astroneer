import React from "react";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";
import {
  getPageSize,
  getPageOffset,
  getFilteredByDate,
  getIsSearching,
  getSearchResults,
  getIsEditing,
  getIsCreating,
  getSelectedIds
} from "selectors/AdUnitsSelectors";
import { setState, fetch } from "actions/AdUnitsActions";

import {
  headerColumns,
  itemColumns,
  headerGridStyles,
  itemGridStyles
} from "components/views/Ads/AdsListConfig.js";

import FormDialog from "components/shared/Dialogs/FormDialog/FormDialog";
import AsyncListHeader from "components/shared/ListHeader/AsyncListHeader";
import AsyncPaginatedList from "components/shared/PaginatedList/AsyncPaginatedList";
import AsyncFormActionButton from "components/shared/FormActionButton/AsyncFormActionButton";
import AdUnitsControls from "components/adUnits/AdUnitsControls/AdUnitsControls";
import AsyncEmptyList from "components/shared/EmptyList/AsyncEmptyList";
import AdUnitListItem from "components/adUnits/AdUnitListItem/AdUnitListItem";
import AsyncAdUnitForm from "components/forms/AdUnit/AsyncAdUnitForm";

import styles from "components/views/Ads/Ads.styles";

const Ads = ({
  classes = {},
  pageOffset = 0,
  pageSize = 25,
  items = [],
  isActive,
  setState: dispatchSetState,
  selectedIds = []
}) => {
  const handleDialogClose = () =>
    dispatchSetState({ isEditing: false, isCreating: false });

  const itemRenderer = props => (
    <AdUnitListItem
      style={{ ...itemGridStyles }}
      extClasses={{ root: classes.listItem }}
      key={props.pushId}
      columns={itemColumns}
      props={props}
    />
  );

  const headerRenderer = () => (
    <AsyncListHeader
      style={{
        ...headerGridStyles
      }}
      extClasses={{ root: classes.listHeader }}
      columns={headerColumns}
    />
  );

  const emptyListRenderer = () => (
    <AsyncEmptyList subTitle="Friendly reminder: Make sure you don't have the wrong filter on!" />
  );

  return (
    <React.Fragment>
      <FormDialog isActive={isActive} onClose={handleDialogClose}>
        <AsyncAdUnitForm />
      </FormDialog>
      <section className={classes.root}>
        <AdUnitsControls />
        <AsyncPaginatedList
          items={items}
          pageSize={pageSize}
          pageOffset={pageOffset}
          headerRenderer={headerRenderer}
          itemRenderer={itemRenderer}
          emptyListRenderer={emptyListRenderer}
        />
        <AsyncFormActionButton
          isEditing={selectedIds.length}
          onClick={dispatchSetState}
        />
      </section>
    </React.Fragment>
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
    items: isSearching ? getSearchResults(state) : getFilteredByDate(state)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(Ads));
