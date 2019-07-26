import React from "react";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";

import Select from "react-select";

import styles from "components/inputs/SelectInput/SelectInput.styles";

const SelectInput = ({
  setFieldValue,
  props = {},
  className = "",
  classes = {},
  options = {}
}) => {
  const { name } = props;
  return (
    <Select
      {...props}
      options={options}
      className={classNames([classes.root, className])}
      onChange={data => setFieldValue(name, data)}
    />
  );
};

function mapStateToProps(state, { props: { selector, options } = {} }) {
  if (!selector && !options) return {};
  return {
    options: !options ? selector(state) : options
  };
}

export default connect(mapStateToProps)(withStyles(styles)(SelectInput));
