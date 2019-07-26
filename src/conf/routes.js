import { getUrl, getUrls, getAuthUrls, matchRouteUrl } from "conf/urls.js";
import {
  faAd,
  faUsers,
  faBullhorn,
  faCommentAlt
} from "@fortawesome/free-solid-svg-icons";

import Auth from "components/views/Auth/Auth";
import Ads from "components/views/Ads/Ads";
import Advertisers from "components/views/Advertisers/Advertisers";
import Campaigns from "components/views/Campaigns/Campaigns";
import Notifications from "components/views/Notifications/Notifications";

export const baseRouteConfig = {
  id: "Ads",
  path: getUrls().ADS,
  component: Ads,
  props: {
    icon: faAd,
    name: "Ads",
    to: getUrl(getUrls().ADS),
    exact: false
  }
};

export function getRoutes() {
  return [
    {
      id: "Advertisers",
      path: getUrls().ADVERTISERS,
      component: Advertisers,
      props: {
        icon: faUsers,
        name: "Advertisers",
        to: getUrl(getUrls().ADVERTISERS),
        exact: false
      }
    },
    {
      id: "Campaigns",
      path: getUrls().CAMPAIGNS,
      component: Campaigns,
      props: {
        icon: faBullhorn,
        name: "Campaigns",
        to: getUrl(getUrls().CAMPAIGNS),
        exact: false
      }
    },
    {
      id: "Notifications",
      path: getUrls().NOTIFICATIONS,
      component: Notifications,
      props: {
        icon: faCommentAlt,
        name: "Notifications",
        to: getUrl(getUrls().NOTIFICATIONS),
        exact: false
      }
    }
  ].concat([baseRouteConfig]);
}

export function getAuthRoutes() {
  return [
    {
      id: "Login",
      path: getAuthUrls().LOGIN,
      component: Auth,
      privateRoute: false,
      invisible: true,
      props: {
        includeNav: false
      }
    }
  ];
}

export function getRouteBundles(blacklist = []) {
  const routes = [...getRoutes()];

  const bundle = routes.reduce((_routes, route) => {
    // If the route isn't blacklisted, add it to the routeBundle.
    if (!blacklist.includes(route.path)) _routes.push(route);
    return _routes;
  }, []);
  return bundle;
}

export function getRouteConfig({ pathname = "" }) {
  return (
    getRouteBundles().filter(
      route => route.path === matchRouteUrl(pathname)
    )[0] || baseRouteConfig
  );
}
