import React from "react";

const ListHeaderColumn = ({ className = "", label, align = "auto" }) => {
  return (
    <div className={className} style={{ justifySelf: align }}>
      {label}
    </div>
  );
};

export default ListHeaderColumn;
