import React from "react";

import CopyButton from "components/shared/CopyButton/CopyButton";
import DeleteButton from "components/shared/DeleteButton/DeleteButton";
import Checkbox from "components/shared/Checkbox/Checkbox";
import PreviewButton from "components/shared/PreviewButton/PreviewButton";

const ContextMenu = ({
  copyButton = null,
  deleteButton = null,
  selectedButton = null,
  previewButton = null
}) => {
  return (
    <React.Fragment>
      {!!selectedButton && <Checkbox {...selectedButton} />}
      {!!previewButton && <PreviewButton {...previewButton} />}
      {!!copyButton && <CopyButton {...copyButton} />}
      {!!deleteButton && <DeleteButton {...deleteButton} />}
    </React.Fragment>
  );
};

export default ContextMenu;
