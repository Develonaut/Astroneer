import React from "react";

import styles from "components/shared/ImageList/ImageList.module.css";

const ImageList = ({ images, onClick = () => {} }) => {
  return (
    <ul className={styles.root}>
      {images.map(({ url }) => {
        return (
          <li
            id={url}
            onClick={onClick}
            className={styles.root__image__wrapper}
            key={url}
          >
            <img className={styles.root__image} src={url} alt="Uploaded" />
          </li>
        );
      })}
    </ul>
  );
};

export default ImageList;
