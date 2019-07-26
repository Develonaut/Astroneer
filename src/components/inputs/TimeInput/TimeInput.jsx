import React from "react";

const TimeInput = ({ setFieldValue, props = {} }) => {
  const { name } = props;
  const onChange = ({ target: { value } }) => setFieldValue(name, value);
  return <input type="time" onChange={onChange} {...props} />;
};

export default TimeInput;
