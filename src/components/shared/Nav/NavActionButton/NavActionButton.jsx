import React from "react";
import { connect } from "react-redux";
import { setState } from "actions/UIActions";
import { getNavState } from "selectors/UISelectors";

import Button from "components/shared/Button/Button";
import MenuIcon from "@material-ui/icons/Menu";

const NavActionButton = ({ isOpen = true, setState: dispatchSetState }) => {
  return (
    <Button
      type="icon"
      aria-label="Nav"
      onClick={() => {
        dispatchSetState({ nav: { isOpen: !isOpen } });
      }}
    >
      <MenuIcon />
    </Button>
  );
};

function mapStateToProps(state) {
  return {
    isOpen: getNavState(state)
  };
}

const mapDispatchToProps = {
  setState
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavActionButton);
