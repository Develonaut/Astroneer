import React, { PureComponent } from "react";
import Fuse from "fuse.js";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import Button from "components/shared/Button/Button";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import ClearIcon from "@material-ui/icons/Clear";

import styles from "components/shared/FuzzySearch/FuzzySearch.styles";

const fuseConf = {
  shouldSort: true,
  threshold: 0.4,
  location: 0,
  distance: 100,
  maxPatternLength: 32,
  minMatchCharLength: 1,
  key: []
};

class FuzzySearch extends PureComponent {
  constructor(props) {
    super(props);
    const { items = [], keys = [] } = props;
    this.input = React.createRef();
    this.fuse = new Fuse(items, {
      ...fuseConf,
      keys
    });
    this.state = {
      value: ""
    };
  }

  componentDidUpdate({ items: prevItems = [] }) {
    const { items: curItems = [] } = this.props;
    // Only need a new Fuse instance if new items come in, otherwise
    // we can keep using the one we made in the constructor.
    const prevItemsDelta = JSON.stringify(prevItems);
    const curItemsDelta = JSON.stringify(curItems);
    if (curItemsDelta !== prevItemsDelta) {
      const { items = [], keys = [] } = this.props;
      const { value = "" } = this.state;
      this.fuse = new Fuse(items, {
        ...fuseConf,
        keys
      });
      this.searchItems({ target: { value } });
    }
  }

  searchItems = ({ target: { value = null } }) => {
    const { setState: dispatchSetState } = this.props;
    this.setState({ value: value }, () => {
      dispatchSetState({
        isSearching: !!value.trim() ? true : false,
        searchResults: this.fuse.search(value.trim())
      });
    });
  };

  onBlur = () => {
    const { value = null } = this.state;
    if (!value || value === "") this.clearSearch();
  };

  clearSearch = () => {
    const { setState: dispatchSetState } = this.props;
    this.setState({ value: "" });
    dispatchSetState({
      isSearching: false,
      searchResults: []
    });
  };

  handleKeyDown = event => {
    if (event.keyCode === 27) {
      this.clearSearch();
      this.input.current.blur();
    }
  };

  render() {
    const { classes = {}, placeholder = "Search" } = this.props;
    const { value } = this.state;
    const isClearable = !!value.trim();

    const rootClass = classNames(classes.root);
    const searchClass = classNames(classes.search, {});
    const clearButtonClass = classNames(classes.clearButtonRoot, {
      [classes.clearButtonRootVisible]: isClearable
    });

    return (
      <div className={rootClass}>
        <div className={searchClass}>
          <div className={classes.searchIcon}>
            <SearchIcon fontSize="small" />
          </div>
          <InputBase
            inputRef={this.input}
            value={value}
            placeholder={placeholder}
            onChange={this.searchItems}
            onFocus={this.onFocus}
            onBlur={this.onBlur}
            onKeyDown={this.handleKeyDown}
            classes={{
              root: classes.inputRoot,
              input: classNames(classes.inputInput)
            }}
          />
          <Button
            type="icon"
            disabled={!isClearable}
            onClick={this.clearSearch}
            classes={{
              root: clearButtonClass
            }}
          >
            <ClearIcon fontSize="small" />
          </Button>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(FuzzySearch);
