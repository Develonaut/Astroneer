import React from "react";
import classNames from "classnames";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";
import { setState } from "actions/NotificationsActions";
import {
  getLayoutType,
  getSelectedIds
} from "selectors/NotificationsSelectors";
import { getValueByString } from "conf/utils";
import onEventPreloader from "conf/onEventPreloader";

import styles from "components/notifications/NotificationListItem/NotificationListItem.styles";

import AsyncContextButtons from "components/shared/ContextMenu/AsyncContextButtons";
import ListItem from "components/shared/ListItem/ListItem";
import Checkbox from "components/shared/Checkbox/Checkbox";

const NotificationListItem = ({
  props = {},
  columns = [],
  layoutType,
  selectedIds,
  setState: dispatchSetState,
  extClasses = {},
  classes = {},
  style = {}
}) => {
  const { notificationId, turnedOn } = props;
  const onClick = event => {
    event.stopPropagation();
    const selectedState = selectedIds.includes(notificationId)
      ? { selectedIds: [] }
      : { selectedIds: [notificationId] };
    dispatchSetState(selectedState);
  };

  const onItemClick = () => {
    dispatchSetState({
      isEditing: true,
      isCreating: false,
      selectedIds: [notificationId]
    });
  };

  const itemClass = classNames([classes.root, extClasses.root], {
    [classes.rootLive]: turnedOn,
    [classes.rootSelected]: selectedIds.includes(notificationId)
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
          checked={selectedIds.includes(notificationId)}
          onClick={onClick}
          color="primary"
          disableTooltip
          {...onEventPreloader({
            event: "onMouseOver",
            component: AsyncContextButtons
          })}
        />
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
)(withStyles(styles)(NotificationListItem));
