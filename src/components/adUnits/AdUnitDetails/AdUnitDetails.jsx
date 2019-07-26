import React from "react";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import { getAdUnits } from "selectors/AdUnitsSelectors";
import { formFieldProps } from "components/forms/configs/EditAdUnit";
import { transformPostDelta } from "transformers/AdUnitsTransformer";

import styles from "components/adUnits/AdUnitDetails/AdUnitDetails.styles";

const AdUnitDetails = ({ classes, adUnit }) => {
  if (!adUnit) return null;
  return (
    <div className={classes.root}>
      <Typography variant="h6" gutterBottom>
        Ad Unit Details:
      </Typography>
      <ul>
        {Object.values(formFieldProps).map(({ label, name }) => {
          return (
            <span key={label}>
              <Typography variant="subtitle2" gutterBottom>
                <span>{`${label.replace("*", "")}: ${adUnit[name]}`}</span>
              </Typography>
            </span>
          );
        })}
      </ul>
    </div>
  );
};

const mapStateToProps = (state, { id }) => {
  const adUnits = getAdUnits(state);
  const adUnit = adUnits.find(adUnit => adUnit.pushId === id);
  return {
    adUnit: adUnit ? transformPostDelta(adUnit) : undefined
  };
};

export default connect(mapStateToProps)(withStyles(styles)(AdUnitDetails));
