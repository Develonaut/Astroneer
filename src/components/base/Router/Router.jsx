import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { Switch, Route, Redirect } from "react-router-dom";
import { getRoutes, getAuthRoutes, baseRouteConfig } from "conf/routes";
import { setHistoryState } from "actions/HistoryActions";
import { getIsAuthenticated } from "selectors/UserSelectors";
import { getAuthIsFetching } from "selectors/StatusSelectors";
import { getReturnLocation } from "selectors/HistorySelectors";

import PrivateRoute from "components/base/Router/PrivateRoute";
import ViewBundler from "components/base/ViewBundler/ViewBundler";

export class Router extends PureComponent {
  componentDidMount() {
    const { history, setHistoryState: dispatchSetHistoryState } = this.props;
    history.listen(location =>
      dispatchSetHistoryState({ currentLocation: location })
    );
  }

  componentDidUpdate({ isAuthenticated: wasAuthenticated, location }) {
    const {
      isAuthenticated = false,
      history = {},
      returnLocation: { pathname = baseRouteConfig.props.to } = {},
      setHistoryState: dispatchSetHistoryState
    } = this.props;

    dispatchSetHistoryState({ previousLocation: location });
    if (!wasAuthenticated && isAuthenticated) {
      dispatchSetHistoryState({ returnLocation: {} });
      history.push(pathname);
    }
  }

  render() {
    const { isAuthenticated } = this.props;
    let routes = !isAuthenticated
      ? [...getAuthRoutes(), ...getRoutes()]
      : getRoutes();

    return (
      <React.Fragment>
        <Switch>
          {routes
            .filter(item => item.path)
            .map(
              ({
                exact = true,
                props = {},
                path,
                privateRoute = true,
                component = null
              }) => {
                const routeParams = {
                  key: path,
                  exact,
                  path,
                  isAuthenticated,
                  progressBar: this.progressBar,
                  render: () => {
                    return (
                      <ViewBundler
                        id={path}
                        props={props}
                        component={component}
                      />
                    );
                  }
                };

                return privateRoute ? (
                  <PrivateRoute {...routeParams} />
                ) : (
                  <Route {...routeParams} />
                );
              }
            )}
          <Redirect to={baseRouteConfig.props.to} />
        </Switch>
      </React.Fragment>
    );
  }
}

const mapPropsToDispatch = {
  setHistoryState
};

function mapStateToProps(state) {
  return {
    returnLocation: getReturnLocation(state),
    isFetching: getAuthIsFetching(state),
    isAuthenticated: getIsAuthenticated(state)
  };
}

export default withRouter(
  connect(
    mapStateToProps,
    mapPropsToDispatch
  )(Router)
);
