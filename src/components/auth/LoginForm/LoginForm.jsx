import React, { PureComponent } from "react";
import * as Yup from "yup";
import classNames from "classnames";
import { withStyles } from "@material-ui/core";
import { connect } from "react-redux";
import { Formik, Form } from "formik";
import { requestUserLogin } from "actions/UserActions";

import FieldSet from "components/inputs/FieldSet/FieldSet";
import Button from "components/shared/Button/Button";

import styles from "components/auth/LoginForm/LoginForm.styles";

class LoginForm extends PureComponent {
  constructor(props) {
    super(props);
    this.initialValues = {
      email: "",
      passWord: "",
      rememberMe: false
    };

    this.validationSchema = Yup.object().shape({
      email: Yup.string()
        .email("Please enter a valid email")
        .required("Email is required."),
      passWord: Yup.string().required("Password is required.")
    });
  }

  onSubmit = (formValues, formActions) => {
    const { requestUserLogin: dispatchRequestUserLogin } = this.props;
    dispatchRequestUserLogin(formValues, formActions);
  };

  render() {
    const { className = "", classes } = this.props;
    const formClass = classNames([classes.root, className]);
    return (
      <Formik
        initialValues={this.initialValues}
        validationSchema={this.validationSchema}
        onSubmit={this.onSubmit}
        render={formikProps => {
          const { isSubmitting, submitForm } = formikProps;
          return (
            <Form className={formClass}>
              <header>
                <section
                  className={classNames([classes.titleText, classes.subTitle])}
                >
                  Welcome back! Check in with ground control before you go.
                </section>
              </header>
              <section className={classes.fieldsWrapper}>
                <FieldSet
                  className={classes.emailInput}
                  name="email"
                  label="Email"
                  formikProps={formikProps}
                  fieldProps={{
                    type: "text",
                    name: "email",
                    label: "Email",
                    placeholder: "Enter your email",
                    autoComplete: "username"
                  }}
                />
                <FieldSet
                  className={classes.passwordInput}
                  formikProps={formikProps}
                  fieldProps={{
                    type: "password",
                    name: "passWord",
                    label: "Password",
                    placeholder: "Enter your Password",
                    autoComplete: "current-password"
                  }}
                />
              </section>
              <section className={classes.btns}>
                <Button
                  variant="text"
                  color="primary"
                  onClick={submitForm}
                  disabled={isSubmitting}
                >
                  <span>Login</span>
                </Button>
                <Button
                  variant="text"
                  color="primary"
                  type="submit"
                  disabled={isSubmitting}
                >
                  <span>Register</span>
                </Button>
              </section>
            </Form>
          );
        }}
      />
    );
  }
}

const mapDispatchToProps = {
  requestUserLogin
};

export default connect(
  null,
  mapDispatchToProps
)(withStyles(styles)(LoginForm));
