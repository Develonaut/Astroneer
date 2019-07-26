import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { getFilteredByDate } from "selectors/AdUnitsSelectors";
import {
  getLayoutType,
  getPageOffset,
  getPageSize
} from "selectors/AdUnitsSelectors";
import { setState } from "actions/AdUnitsActions";
import { debounce } from "conf/utils";

import Measure from "react-measure";
import { FixedSizeList as List } from "react-window";
import AdUnit from "components/adUnits/AdUnit/AdUnit";

import styles from "components/adUnits/AdUnits/AdUnits.module.css";
import adUnitStyles from "components/adUnits/AdUnit/AdUnit.module.css";
import Button from "components/shared/Button/Button";

// Note This was made for huge lists, but if we do pagination this seems like a bit overkill
// performance isn't great and feels slow, only should use this if for some reason we can't paginate.

class VirtualizedAdUnits extends PureComponent {
  state = {
    width: -1,
    height: -1
  };

  updateDimensions = debounce(
    ({ bounds }) => this.setState({ ...bounds }),
    250
  );

  render() {
    const { width, height } = this.state;
    const { adUnits = [], layoutType } = this.props;
    const { compactHeight, comfortableHeight } = adUnitStyles;
    const itemSize =
      layoutType === "compact"
        ? parseInt(compactHeight.replace("px", ""), 10)
        : parseInt(comfortableHeight.replace("px", ""), 10);
    return (
      <Measure bounds onResize={this.updateDimensions}>
        {({ measureRef }) => (
          <section ref={measureRef} className={styles.root}>
            <List
              height={height}
              itemCount={adUnits.slice(0, 50).length}
              itemSize={itemSize}
              width={width}
            >
              {({ index, style }) => (
                <AdUnit
                  props={{ layoutType, ...adUnits[index] }}
                  style={style}
                />
              )}
            </List>
          </section>
        )}
      </Measure>
    );
  }
}

function mapStateToProps(state) {
  return {
    layoutType: getLayoutType(state),
    pageSize: getPageSize(state),
    pageOffset: getPageOffset(state),
    adUnits: getFilteredByDate(state)
  };
}

const mapDispatchToProps = {
  setState
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AdUnits);
