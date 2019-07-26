import React from "react";
import { connect } from "react-redux";
import { getIdsWithPerformanceData } from "selectors/AdUnitsSelectors";

import Timeline from "@material-ui/icons/Timeline";
import Button from "components/shared/Button/Button";
import PopoverMenu from "components/shared/PopoverMenu/PopoverMenu";
import AsyncAdUnitPerformance from "components/adUnits/AdUnitPerformance/AsyncAdUnitPerformance";
import onEventPreloader from "conf/onEventPreloader";

const AdUnitPerformacePopover = ({ id = null, adUnitPerformanceIds = [] }) => {
  return (
    <PopoverMenu
      toolTip={
        !adUnitPerformanceIds.includes(id)
          ? "Performance Unavailable"
          : "View Performance"
      }
      buttonRenderer={({ onClick, setButtonRef }) => {
        return (
          <Button
            disabled={!adUnitPerformanceIds.includes(id)}
            buttonRef={node => setButtonRef(node)}
            onClick={onClick}
            {...onEventPreloader({
              event: "onMouseOver",
              component: AsyncAdUnitPerformance
            })}
            type="icon"
          >
            <Timeline fontSize="small" />
          </Button>
        );
      }}
      contentRenderer={() => <AsyncAdUnitPerformance id={id} />}
    />
  );
};

function mapStateToProps(state) {
  return {
    adUnitPerformanceIds: getIdsWithPerformanceData(state)
  };
}

export default connect(mapStateToProps)(AdUnitPerformacePopover);
