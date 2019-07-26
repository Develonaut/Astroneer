import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { getRouteConfig } from "conf/routes";
import { withStyles } from "@material-ui/core/styles";
import { setState as setAdUnitsState } from "actions/AdUnitsActions";
import { setState as setCampaignsState } from "actions/CampaignsActions";
import {
  getPageSize as getAdUnitsPageSize,
  getPageOffset as getAdUnitsPageOffset,
  getFilteredByDate
} from "selectors/AdUnitsSelectors";
import {
  getPageSize as getCampaignsPageSize,
  getPageOffset as getCampaignsPageOffset,
  getFilteredCampaignsByOrganization
} from "selectors/CampaignsSelectors";

import Tooltip from "@material-ui/core/Tooltip";
import Button from "components/shared/Button/Button";
import { KeyboardArrowRight, KeyboardArrowLeft } from "@material-ui/icons";

import styles from "components/shared/PaginationControls/PaginationControls.styles";

const PaginationControls = ({
  pageOffset = 0,
  pageSize = 0,
  totalCount = 0,
  nextLabel = "Next",
  prevLabel = "Prev",
  setState: dispatchSetState,
  classes = {}
}) => {
  const total = totalCount;
  const increment = pageOffset + pageSize;
  const from = !total ? pageOffset : pageOffset + 1;
  const to = increment >= totalCount ? totalCount : increment;
  return (
    <div className={classes.root}>
      <p>{`${from} - ${to} of ${total}`}</p>
      <Tooltip title={prevLabel}>
        <div>
          <Button
            disabled={pageOffset === 0}
            type="icon"
            onClick={() =>
              dispatchSetState({ pageOffset: pageOffset - pageSize })
            }
          >
            <KeyboardArrowLeft fontSize="small" />
          </Button>
        </div>
      </Tooltip>
      <Tooltip title={nextLabel}>
        <div>
          <Button
            disabled={increment >= total}
            type="icon"
            onClick={() => {
              dispatchSetState({
                pageOffset: pageOffset + pageSize
              });
            }}
          >
            <KeyboardArrowRight fontSize="small" />
          </Button>
        </div>
      </Tooltip>
    </div>
  );
};

const mapStateToProps = (state, { location }) => {
  const { id } = getRouteConfig(location);
  const pageSizeSelector = {
    Ads: getAdUnitsPageSize(state),
    Campaigns: getCampaignsPageSize(state)
  };
  const pageOffsetSelector = {
    Ads: getAdUnitsPageOffset(state),
    Campaigns: getCampaignsPageOffset(state)
  };
  const totalCountSelector = {
    Ads: getFilteredByDate(state),
    Campaigns: getFilteredCampaignsByOrganization(state)
  };

  return {
    id,
    pageSize: pageSizeSelector[id],
    pageOffset: pageOffsetSelector[id],
    totalCount: totalCountSelector[id].length
  };
};

const mapDispatchToProps = (dispatch, { location }) => {
  const { id } = getRouteConfig(location);
  const setStateMethods = {
    Ads: setAdUnitsState,
    Campaigns: setCampaignsState
  };
  const setState = setStateMethods[id] ? setStateMethods[id] : () => {};
  return {
    setState: delta => dispatch(setState(delta))
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(withStyles(styles)(PaginationControls))
);
