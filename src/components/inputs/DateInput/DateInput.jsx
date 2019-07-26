import React from "react";

const DateInput = ({ setFieldValue, props = {} }) => {
  const { name } = props;
  const onChange = ({ target: { value } }) => setFieldValue(name, value);
  return <input type="date" onChange={onChange} {...props} />;
};

export default DateInput;
