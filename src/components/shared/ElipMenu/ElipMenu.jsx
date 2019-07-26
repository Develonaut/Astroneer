import React, { PureComponent } from "react";

import Tooltip from "@material-ui/core/Tooltip";
import Button from "components/shared/Button/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import MoreVertIcon from "@material-ui/icons/MoreVert";

class SimpleMenu extends PureComponent {
  state = {
    anchorEl: null
  };

  handleMenuClick = event => {
    event.stopPropagation();
    this.setState({ anchorEl: event.currentTarget });
  };

  handleMenuItemClick = (event, onClick = () => {}) => {
    event.stopPropagation();
    onClick();
    this.handleClose(event);
  };

  handleClose = event => {
    event.stopPropagation();
    this.setState({ anchorEl: null });
  };

  render() {
    const { options } = this.props;
    const { anchorEl } = this.state;

    return (
      <div>
        <Tooltip title="View More" aria-label="View More">
          <Button
            type="icon"
            aria-label="More"
            aria-haspopup="true"
            onClick={this.handleMenuClick}
          >
            <MoreVertIcon />
          </Button>
        </Tooltip>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleClose}
        >
          {options.map(({ label, onClick }) => (
            <MenuItem
              key={label}
              onClick={event => this.handleMenuItemClick(event, onClick)}
            >
              {label}
            </MenuItem>
          ))}
        </Menu>
      </div>
    );
  }
}

export default SimpleMenu;
