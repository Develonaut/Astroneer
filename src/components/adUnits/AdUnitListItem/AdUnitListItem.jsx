import React from "react";
import classNames from "classnames";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";
import { setState } from "actions/AdUnitsActions";
import { getLayoutType, getSelectedIds } from "selectors/AdUnitsSelectors";
import { getValueByString } from "conf/utils";
import onEventPreloader from "conf/onEventPreloader";

import styles from "components/adUnits/AdUnitListItem/AdUnitListItem.styles";

import AsyncContextButtons from "components/shared/ContextMenu/AsyncContextButtons";
import AdUnitPerformacePopover from "components/adUnits/AdUnitPerformancePopover/AdUnitPerformacePopover";
import ListItem from "components/shared/ListItem/ListItem";
import Checkbox from "components/shared/Checkbox/Checkbox";
import AdUnitDetailsPopover from "../AdUnitDetailsPopover/AdUnitDetailsPopover";

const AdUnitListItem = ({
  props = {},
  columns = [],
  layoutType,
  selectedIds,
  setState: dispatchSetState,
  extClasses = {},
  classes = {},
  style = {}
}) => {
  const { pushId, active, turnedOn } = props;

  const onClick = event => {
    event.stopPropagation();
    const selectedState = selectedIds.includes(pushId)
      ? { selectedIds: [] }
      : { selectedIds: [pushId] };
    dispatchSetState(selectedState);
  };

  const onItemClick = () => {
    dispatchSetState({
      isEditing: true,
      isCreating: false,
      selectedIds: [pushId]
    });
  };

  const itemClass = classNames([classes.root, extClasses.root], {
    [classes.rootLive]: turnedOn,
    [classes.rootInactive]: !active,
    [classes.rootSelected]: selectedIds.includes(pushId)
  });

  return (
    <ListItem
      style={style}
      layoutType={layoutType}
      onClick={onItemClick}
      extClasses={{
        root: itemClass
      }}
    >
      <div>
        <Checkbox
          checked={selectedIds.includes(pushId)}
          onClick={onClick}
          color="primary"
          disableTooltip
          {...onEventPreloader({
            event: "onMouseOver",
            component: AsyncContextButtons
          })}
        />
        <AdUnitDetailsPopover id={pushId} />
        <AdUnitPerformacePopover id={pushId} />
      </div>
      {columns.map(
        ({
          key = "",
          transformer = ({ value }) => `${value}`,
          align = "auto"
        }) => {
          const value = transformer({
            value: getValueByString(props, key),
            props
          });
          return (
            <div
              key={key}
              className={classes.column}
              style={{ justifySelf: align }}
            >
              {value}
            </div>
          );
        }
      )}
    </ListItem>
  );
};

function mapStateToProps(state) {
  return {
    layoutType: getLayoutType(state),
    selectedIds: getSelectedIds(state)
  };
}

const mapDispatchToProps = {
  setState
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(AdUnitListItem));
