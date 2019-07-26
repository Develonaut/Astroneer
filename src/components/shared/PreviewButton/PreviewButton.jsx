import React from "react";
import { connect } from "react-redux";
import { showNotification } from "conf/pushNotifications";
import { getSelectedAdUnits } from "selectors/AdUnitsSelectors";

import Tooltip from "@material-ui/core/Tooltip";
import Button from "components/shared/Button/Button";
import NotificationsActive from "@material-ui/icons/NotificationsActive";

const PreviewButton = ({ content, buttonRenderer = null, className = "" }) => {
  const onClick = () => {
    showNotification({
      ...content,
      requireInteraction: true
    });
  };

  return (
    <Tooltip title="Preview" aria-label="Preview">
      {buttonRenderer ? (
        buttonRenderer({ onClick, className })
      ) : (
        <Button onClick={onClick} type="icon" className={className}>
          <NotificationsActive fontSize="small" />
        </Button>
      )}
    </Tooltip>
  );
};

const mapStateToProps = (state, { content = null }) => {
  return {
    content: !content ? getSelectedAdUnits(state)[0] : content
  };
};

export default connect(mapStateToProps)(PreviewButton);
