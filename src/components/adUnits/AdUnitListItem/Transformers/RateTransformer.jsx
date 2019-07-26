import React from "react";

const RateTransformer = ({
  value,
  props: {
    rateType: { value: rateType }
  }
}) => {
  return (
    <span style={{ verticalAlign: "middle " }}>
      <span>{value}</span>
      <span style={{ marginLeft: "5px" }}>{rateType}</span>
    </span>
  );
};

export default RateTransformer;
