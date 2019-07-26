import React from "react";

import styles from "components/shared/Content/Content.module.css";

const Content = ({ children = [] }) => {
  return <section className={styles.root}>{children}</section>;
};

export default Content;
