import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { withStyles } from "@material-ui/core/styles";
import { isMobile } from "react-device-detect";
import { enqueueSnackbar } from "actions/SnackbarActions";
import { fetch as fetchCampaigns } from "actions/CampaignsActions";
import { fetch as fetchAdvertisers } from "actions/AdvertisersActions";
import { fetch as fetchAdUnits } from "actions/AdUnitsActions";
// import { fetch as fetchNotifications } from "actions/NotificationsActions";
import * as serviceWorker from "serviceWorker";

import Router from "components/base/Router/Router";
import Header from "components/shared/Header/Header";
import Nav from "components/shared/Nav/Nav";
import Button from "@material-ui/core/Button";

import "stylesheets/reset.css";
import styles from "components/base/App/App.styles";

const HTML = document.querySelector("html");
const Body = document.querySelector("body");
const Root = document.getElementById("root");

let refreshing;
class App extends PureComponent {
  componentDidMount() {
    const {
      enqueueSnackbar: dispatchEnqueueSnackbar,
      fetchAdvertisers: dispatchFetchAdvertisers,
      fetchCampaigns: dispatchFetchCampaigns,
      fetchAdUnits: dispatchFetchAdUnits,
      // fetchNotifications: dispatchFetchNotifications,
      theme = {}
    } = this.props;

    // If you want your app to work offline and load faster, you can change
    // unregister() to register() below. Note this comes with some pitfalls.
    // Learn more about service workers: http://bit.ly/CRA-PWA
    serviceWorker.register({
      onUpdate: registration => {
        dispatchEnqueueSnackbar({
          message: "An update is available!",
          options: {
            autoHideDuration: null,
            action: (
              <Button
                style={{ color: theme.palette.primary.light }}
                onClick={() => {
                  navigator.serviceWorker.addEventListener(
                    "controllerchange",
                    function() {
                      if (refreshing) return;
                      refreshing = true;
                      window.location.reload();
                    }
                  );
                  registration.waiting.postMessage("skipWaiting");
                }}
              >
                Refresh
              </Button>
            )
          }
        });
      },
      onSuccess: () => {
        window.location.reload();
      }
    });

    dispatchFetchAdUnits();
    dispatchFetchCampaigns();
    dispatchFetchAdvertisers();
    // dispatchFetchNotifications();
  }

  render() {
    const { classes = {} } = this.props;
    if (!Body.classList.contains(classes.body)) {
      HTML.classList.add(classes.html);
      Body.classList.add(classes.body);
      Root.classList.add(classes.root);
      if (isMobile) Root.classList.add(classes.root_mobile);
    }

    return (
      <React.Fragment>
        <Header />
        <Nav />
        <Router />
      </React.Fragment>
    );
  }
}

const mapDispatchToProps = {
  enqueueSnackbar,
  fetchAdUnits,
  fetchAdvertisers,
  fetchCampaigns
  // fetchNotifications
};

export default withRouter(
  connect(
    null,
    mapDispatchToProps
  )(withStyles(styles, { withTheme: true })(App))
);
