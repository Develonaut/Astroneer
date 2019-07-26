// eslint-disable no-useless-escape//
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/es/integration/react";
import { SnackbarProvider } from "notistack";
import { MuiThemeProvider } from "@material-ui/core/styles";
import { createBrowserHistory } from "history";
import App from "components/base/App/App";
import WebFont from "webfontloader";
import Theme from "components/base/Theme";
import configureStore from "store/configureStore";

const { persistor, store } = configureStore();

const app = (
  <Provider store={store}>
    <PersistGate loading={null} onBeforeLift={null} persistor={persistor}>
      <BrowserRouter>
        <MuiThemeProvider theme={Theme}>
          <SnackbarProvider hideIconVariant>
            <App history={createBrowserHistory()} />
          </SnackbarProvider>
        </MuiThemeProvider>
      </BrowserRouter>
    </PersistGate>
  </Provider>
);

ReactDOM.render(app, document.getElementById("root"));

WebFont.load({
  google: {
    families: ["Open+Sans:300,400,500,700"]
  },
  // other options and settings
  active: function() {
    sessionStorage.fonts = true;
  }
});
