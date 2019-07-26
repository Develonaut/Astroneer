import React from "react";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import { Formik, Form as FormikForm } from "formik";
import * as Yup from "yup";

import styles from "components/forms/Form/Form.styles";

const Form = ({
  classes = {},
  extClasses = {},
  onSubmit = () => {},
  initialValues = {},
  validationSchema = {},
  formRenderer = () => {}
}) => {
  const formClass = classNames([classes.root, extClasses.root]);
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={Yup.object().shape(validationSchema)}
      onSubmit={onSubmit}
      render={formikProps => (
        <FormikForm className={formClass}>
          {formRenderer(formikProps)}
        </FormikForm>
      )}
    />
  );
};

export default withStyles(styles)(Form);
