import React from "react";
import { withStyles } from "@material-ui/core/styles";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Button from "@material-ui/core/Button";
import Popover from "@material-ui/core/Popover";
import Tooltip from "@material-ui/core/Tooltip";

import styles from "components/shared/PopoverMenu/PopoverMenu.styles.js";

class PopoverMenu extends React.Component {
  state = {
    open: false,
    anchorReference: "anchorEl"
  };

  handleClickButton = event => {
    event.stopPropagation();
    this.setState({
      open: true
    });
  };

  handleClose = event => {
    event.stopPropagation();
    this.setState({
      open: false
    });
  };

  setButtonRef = node => {
    this.anchorEl = node;
  };

  defaultButton() {
    return (
      <Button
        type="icon"
        aria-label="More"
        aria-haspopup="true"
        onClick={this.handleClickButton}
        buttonRef={node => this.setButtonRef(node)}
      >
        <MoreVertIcon />
      </Button>
    );
  }

  render() {
    const {
      toolTip = "Show More",
      buttonRenderer = this.defaultButton(),
      contentRenderer = () => {}
    } = this.props;
    const { open } = this.state;

    return (
      <React.Fragment>
        <Tooltip title={toolTip} aria-label={toolTip}>
          <span>
            {buttonRenderer({
              onClick: this.handleClickButton,
              setButtonRef: this.setButtonRef
            })}
          </span>
        </Tooltip>
        <Popover
          open={open}
          anchorEl={this.anchorEl}
          onClose={this.handleClose}
          onClick={event => {
            event.stopPropagation();
          }}
          anchorOrigin={{
            vertical: "center",
            horizontal: "center"
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "left"
          }}
        >
          {contentRenderer()}
        </Popover>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(PopoverMenu);
