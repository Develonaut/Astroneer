import React from "react";
import { connect } from "react-redux";
import { setState } from "actions/AdUnitsActions";

import ControlBar from "components/shared/ControlBar/ControlBar";
import ControlBarSection from "components/shared/ControlBar/ControlBarSection/ControlBarSection";
import PaginationControls from "components/shared/PaginationControls/PaginationControls";
import Menu from "components/shared/Menu/Menu";
import Button from "components/shared/Button/Button";
import RefreshIcon from "@material-ui/icons/Refresh";

const AdUnitsControls = ({
  setState: dispatchSetState,
  fetch: dispatchFetch
}) => {
  const menuItems = [
    {
      label: "Comfortable",
      onClick: () => dispatchSetState({ layoutType: "comfortable" })
    },
    {
      label: "Compact",
      onClick: () => dispatchSetState({ layoutType: "compact" })
    }
  ];

  return (
    <ControlBar>
      <ControlBarSection align="end">
        <PaginationControls />
      </ControlBarSection>
      <ControlBarSection align="end" transparent height="short">
        <Menu items={menuItems} />
        <Button type="icon" onClick={() => dispatchFetch({ force: true })}>
          <RefreshIcon fontSize="small" />
        </Button>
      </ControlBarSection>
    </ControlBar>
  );
};

const mapDispatchToProps = {
  setState,
  fetch
};

export default connect(
  null,
  mapDispatchToProps
)(AdUnitsControls);
