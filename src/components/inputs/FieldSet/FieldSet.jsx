import React from "react";
import classnames from "classnames";
import { FastField } from "formik";
import { withStyles } from "@material-ui/core/styles";

import styles from "components/inputs/FieldSet/FieldSet.styles";

import ImageInput from "components/inputs/ImageInput/ImageInput";
import SelectInput from "components/inputs/SelectInput/SelectInput";
import SwitchInput from "components/inputs/SwitchInput/SwitchInput";
import TextInput from "components/inputs/TextInput/TextInput";
import DateInput from "components/inputs/DateInput/DateInput";
import TimeInput from "components/inputs/TimeInput/TimeInput";

function renderComponent(
  Component,
  {
    formikProps = {},
    fieldProps = {},
    extClasses = {},
    classes = {},
    fullWidth = false
  }
) {
  const { name = "", label = "", type = "text" } = fieldProps;
  const {
    form: {
      values: { [name]: value } = {},
      errors: { [name]: errorMsg = "" } = {},
      touched: { [name]: touched = false } = {},
      setFieldValue
    } = {}
  } = formikProps;

  const error = !!errorMsg && touched;
  const statusText = !!errorMsg && touched ? errorMsg : "";

  const fieldTypes = {
    text: ["text", "password", "number"],
    switch: ["switch"],
    date: ["date"],
    time: ["time"],
    select: ["select"]
  };

  const wrapperClass = classnames([classes.root, extClasses.root], {
    [classes["root_error"]]: error,
    [classes["root_fullWidth"]]: fullWidth,
    [classes["root_filled"]]: fieldTypes.text.includes(type) && value !== "",
    [classes["text"]]: fieldTypes.text.includes(type),
    [classes["switch"]]: fieldTypes.switch.includes(type),
    [classes["time"]]: fieldTypes.time.includes(type),
    [classes["date"]]: fieldTypes.date.includes(type),
    [classes["select"]]: fieldTypes.select.includes(type)
  });

  const labelClass = classnames([classes.label, extClasses.label], {
    [classes["labelText"]]: fieldTypes.text.includes(type),
    [classes["labelSwitch"]]: fieldTypes.switch.includes(type),
    [classes["labelTime"]]: fieldTypes.time.includes(type),
    [classes["labelDate"]]: fieldTypes.date.includes(type),
    [classes["labelSelect"]]: fieldTypes.select.includes(type)
  });

  const inputClass = classnames([classes.input, extClasses.input], {
    [classes["inputText"]]: fieldTypes.text.includes(type),
    [classes["inputSwitch"]]: fieldTypes.switch.includes(type),
    [classes["inputTime"]]: fieldTypes.time.includes(type),
    [classes["inputDate"]]: fieldTypes.date.includes(type),
    [classes["inputSelect"]]: fieldTypes.select.includes(type)
  });

  const statusClass = classnames([classes.status], {
    [classes["statusText"]]: fieldTypes.text.includes(type),
    [classes["statusSwitch"]]: fieldTypes.switch.includes(type),
    [classes["statusTime"]]: fieldTypes.time.includes(type),
    [classes["statusDate"]]: fieldTypes.date.includes(type),
    [classes["statusSelect"]]: fieldTypes.select.includes(type)
  });

  return (
    <div className={wrapperClass}>
      {label && <span className={labelClass}>{label}</span>}
      {React.createElement(Component, {
        setFieldValue,
        props: {
          ...fieldProps,
          className: inputClass,
          value
        }
      })}
      <span className={statusClass}>{statusText}</span>
    </div>
  );
}

const FieldSet = ({ fieldProps = {}, ...restProps }) => {
  const renderComponents = {
    image: ImageInput,
    icon: ImageInput,
    select: SelectInput,
    switch: SwitchInput,
    date: DateInput,
    time: TimeInput
  };

  const { type = "text", name } = fieldProps;

  const Component = renderComponents[type] || TextInput;
  return (
    <FastField
      id={name}
      type={type}
      name={name}
      render={formikProps =>
        renderComponent(Component, {
          formikProps,
          fieldProps,
          ...restProps
        })
      }
    />
  );
};

export default withStyles(styles)(FieldSet);
