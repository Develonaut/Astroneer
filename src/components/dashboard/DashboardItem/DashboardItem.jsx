import React from "react";
import classnames from "classnames";

import styles from "components/dashboard/DashboardItem/DashboardItem.module.css";

const DashboardItem = ({
  title = "",
  children = [],
  third = false,
  half = false,
  whole = false,
  transparent = false,
  className = ""
}) => {
  const itemClass = classnames([styles.root, className], {
    [styles["root--third"]]: third,
    [styles["root--half"]]: half,
    [styles["root--whole"]]: whole || (!third && !half),
    [styles["root--transparent"]]: transparent
  });

  return (
    <div className={itemClass}>
      <header className={styles.root__title}>{title}</header>
      {children}
    </div>
  );
};
export default DashboardItem;
