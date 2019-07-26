import React, { PureComponent } from "react";
import Helmet from "react-helmet";
import { withRouter } from "react-router";
import { getRouteConfig, baseRouteConfig } from "conf/routes";

class PageHead extends PureComponent {
  render() {
    const {
      title: defaultTitle,
      description: defaultDescription
    } = baseRouteConfig;

    const { location = {} } = this.props;
    const {
      title = defaultTitle,
      description = defaultDescription,
      scripts = []
    } = getRouteConfig(location);
    return (
      <Helmet>
        {scripts.map(
          ({ src = "", async = false, defer = false, inline = false }) => {
            if (inline) {
              return <script key={src}>{src}</script>;
            }
            return <script key={src} src={src} async={async} defer={defer} />;
          }
        )}
        <title>{title}</title>
        <meta name="description" content={description} />
      </Helmet>
    );
  }
}

export default withRouter(PageHead);
