import React from "react";

import Info from "@material-ui/icons/InfoOutlined";
import Button from "components/shared/Button/Button";
import PopoverMenu from "components/shared/PopoverMenu/PopoverMenu";
import AsyncAdUnitDetails from "components/adUnits/AdUnitDetails/AsyncAdUnitDetails";
import onEventPreloader from "conf/onEventPreloader";

const AdUnitDetailsPopover = ({ id = null }) => {
  return (
    <PopoverMenu
      toolTip="View Details"
      buttonRenderer={({ onClick, setButtonRef }) => {
        return (
          <Button
            buttonRef={node => setButtonRef(node)}
            onClick={onClick}
            {...onEventPreloader({
              event: "onMouseOver",
              component: AsyncAdUnitDetails
            })}
            type="icon"
          >
            <Info fontSize="small" />
          </Button>
        );
      }}
      contentRenderer={() => <AsyncAdUnitDetails id={id} />}
    />
  );
};

export default AdUnitDetailsPopover;
