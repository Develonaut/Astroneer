import React from "react";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import { getPerformanceData } from "selectors/AdUnitsSelectors";

import styles from "components/adUnits/AdUnitPerformance/AdUnitPerformance.styles";

const AdUnitPerformance = ({ classes, performance }) => {
  const {
    dollarSpend,
    ecpc,
    ecpm,
    receives,
    clicks,
    conversions
  } = performance;
  return (
    <div className={classes.root}>
      <Typography variant="h6" gutterBottom>
        Ad Unit Performance:
      </Typography>
      <ul>
        {[
          { label: "Est. Cost Per Click", value: `$${ecpc}` },
          { label: "Est. Cost Per Mil", value: `$${ecpm}` },
          { label: "Conversions", value: conversions },
          { label: "Clicks", value: clicks },
          { label: "Receives", value: receives },
          { label: "Spend", value: `$${dollarSpend}` }
        ].map(({ label, value }) => (
          <span key={label}>
            <Typography variant="subtitle2" gutterBottom>
              {label}: {value}
            </Typography>
          </span>
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = (state, { id }) => {
  const performanceData = getPerformanceData(state);
  return {
    performance: performanceData.find(performance => performance.pushId === id)
  };
};

export default connect(mapStateToProps)(withStyles(styles)(AdUnitPerformance));
