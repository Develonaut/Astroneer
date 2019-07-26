import React, { Component } from "react";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";
import { update } from "actions/AdUnitsActions";

import SwitchInput from "components/inputs/SwitchInput/SwitchInput";

class AdUnitStateTransformer extends Component {
  constructor(props) {
    super(props);
    const { props: unitProps, name } = props;
    this.state = {
      value: unitProps[name]
    };
  }

  handleChange = (name, value) => {
    const { props, update: dispatchUpdate } = this.props;
    this.setState({ value });
    dispatchUpdate({
      ...props,
      [name]: value
    });
  };

  render() {
    const { name, props } = this.props;
    const { value } = this.state;

    return (
      <SwitchInput
        props={{ name, ...props, value }}
        setFieldValue={this.handleChange}
      />
    );
  }
}

const mapDispatchToProps = {
  update
};

export default connect(
  null,
  mapDispatchToProps
)(AdUnitStateTransformer);
