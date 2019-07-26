import React, { PureComponent } from "react";

import Button from "components/shared/Button/Button";
import MUIMenu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import shortid from "shortid";

class Menu extends PureComponent {
  state = {
    anchorEl: null
  };

  onToggleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  onItemClick = () => {
    this.closeMenu();
  };

  onMenuClose = () => {
    this.setState({ anchorEl: null });
  };

  closeMenu = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const {
      children = [],
      items = [],
      toggleProps = {
        size: "small",
        type: "icon"
      }
    } = this.props;
    let { toggleRenderer = null } = this.props;
    const { anchorEl } = this.state;

    if (!toggleRenderer) {
      toggleRenderer = ({ onClick }) => (
        <Button {...toggleProps} onClick={onClick}>
          <MoreVertIcon fontSize="small" />
        </Button>
      );
    }

    return (
      <div>
        {toggleRenderer({ onClick: this.onToggleClick })}
        <MUIMenu
          id={shortid.generate()}
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.onMenuClose}
        >
          {children}
          {items.length &&
            !children.length &&
            items.map(({ label, onClick }) => (
              <MenuItem
                key={label}
                onClick={() => {
                  onClick();
                  this.onItemClick();
                }}
              >
                {label}
              </MenuItem>
            ))}
        </MUIMenu>
      </div>
    );
  }
}

export default Menu;
