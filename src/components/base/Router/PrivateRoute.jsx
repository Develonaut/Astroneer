import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { setHistoryState } from "actions/HistoryActions";
import { Route, Redirect } from "react-router-dom";
import { getAuthUrls } from "conf/urls";

class PrivateRoute extends PureComponent {
  componentDidMount() {
    const {
      setHistoryState: dispatchSetHistoryState,
      isAuthenticated,
      location = {}
    } = this.props;

    if (!isAuthenticated) {
      dispatchSetHistoryState({ returnLocation: location });
    }
  }

  render() {
    const { render: renderComponent, isAuthenticated, ...rest } = this.props;
    return (
      <Route
        {...rest}
        render={() => {
          if (!isAuthenticated) return <Redirect to={getAuthUrls().LOGIN} />;
          return renderComponent();
        }}
      />
    );
  }
}

const mapDispatchToProps = {
  setHistoryState
};

export default withRouter(
  connect(
    null,
    mapDispatchToProps
  )(PrivateRoute)
);
