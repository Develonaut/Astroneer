import React from "react";
import classnames from "classnames";
import ReactModal from "react-modal";

import Button from "components/shared/Button/Button";

import styles from "components/shared/Modal/Modal.module.css";

// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
ReactModal.setAppElement("#root");

export default function Modal({
  active = false,
  className = "",
  children = [],
  handleAfterOpenModal = () => {},
  handleCloseModal = () => {}
}) {
  return (
    <ReactModal
      isOpen={active}
      onAfterOpen={handleAfterOpenModal}
      onRequestClose={handleCloseModal}
      className={classnames([styles.root, className])}
      customStyles
    >
      {children}
      <Button onClick={handleCloseModal}>Close</Button>
    </ReactModal>
  );
}
