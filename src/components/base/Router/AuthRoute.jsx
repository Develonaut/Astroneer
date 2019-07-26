import React from "react";

import { Route, Redirect } from "react-router-dom";
import { getAuthUrls } from "conf/urls";

export default function PrivateRoute({
  render: renderComponent,
  isAuthenticated,
  ...rest
}) {
  return (
    <Route
      {...rest}
      render={props => {
        return isAuthenticated ? (
          renderComponent()
        ) : (
          <Redirect
            to={{
              pathname: getAuthUrls().LOGIN,
              state: { from: props.location }
            }}
          />
        );
      }}
    />
  );
}
