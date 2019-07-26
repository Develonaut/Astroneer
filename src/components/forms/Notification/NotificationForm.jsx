import React from "react";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";
import {
  getSelectedNotifications,
  getIsEditing,
  getIsCreating
} from "selectors/NotificationsSelectors";
import { setState, create, update } from "actions/NotificationsActions";
import {
  formFieldProps as createNotificationProps,
  initialValues as createInitialValues,
  validationSchema as createValidationSchema
} from "components/forms/configs/CreateNotification";
import {
  // formFieldProps as editNotificationProps,
  initialValues as editInitialValues,
  validationSchema as editValidationSchema
} from "components/forms/configs/EditNotification";
import { showNotification } from "conf/pushNotifications";

import Button from "components/shared/Button/Button";
import Form from "components/forms/Form/Form";
import FieldSet from "components/inputs/FieldSet/FieldSet";

import styles from "components/forms/Notification/NotificationForm.styles";

const Notification = ({
  classes = {},
  isEditing = false,
  selectedItems = [],
  create: dispatchCreate,
  update: dispatchUpdate,
  setState: dispatchSetState
}) => {
  const defaultValues = isEditing ? editInitialValues : createInitialValues;
  const editingValues = isEditing ? { ...selectedItems[0] } : {};
  const validationSchema = isEditing
    ? createValidationSchema
    : editValidationSchema;
  const initialValues = {
    ...defaultValues,
    ...editingValues
  };

  const onSubmitMethod = isEditing ? dispatchUpdate : dispatchCreate;
  return (
    <Form
      extClasses={{ root: classes.root, footer: classes.footer }}
      onSubmit={(formValues, formActions) =>
        onSubmitMethod(formValues, formActions)
      }
      onClose={() => dispatchSetState({ isEditing: false, isCreating: false })}
      initialValues={initialValues}
      validationSchema={validationSchema}
      formRenderer={formikProps => {
        const { values: { title = null } = {} } = formikProps;
        return (
          <React.Fragment>
            <header className={classes.header}>
              <h6 className={classes.title}>
                {isEditing ? "Edit Notification" : "Create Notification"}
              </h6>
              <Button
                className={classes.headerPreview}
                variant="contained"
                color="primary"
                size="medium"
                onClick={() =>
                  showNotification({
                    ...formikProps.values,
                    requireInteraction: true
                  })
                }
                disabled={!title}
              >
                Preview
              </Button>
            </header>
            <section className={classes.form}>
              <section className={classes.images}>
                {["image", "icon"].map(fieldName => (
                  <FieldSet
                    key={fieldName}
                    extClasses={{ input: classes[fieldName] }}
                    fieldProps={createNotificationProps[fieldName]}
                  />
                ))}
              </section>
              <section className={classes.details}>
                {["implementation", "title", "body", "url", "subid6"].map(
                  fieldName => {
                    return (
                      <FieldSet
                        key={fieldName}
                        extClasses={{ root: classes.FieldSet }}
                        fieldProps={createNotificationProps[fieldName]}
                      />
                    );
                  }
                )}
              </section>
            </section>
            <footer className={classes.footer}>
              <Button
                size="medium"
                className={classes.footerClose}
                onClick={() =>
                  dispatchSetState({
                    isEditing: false,
                    isCreating: false,
                    isViewing: false
                  })
                }
                aria-label="Close"
              >
                Cancel
              </Button>
              <Button
                className={classes.footerSubmit}
                color="primary"
                size="medium"
                onClick={formikProps.submitForm}
                disabled={formikProps.isSubmitting}
              >
                Submit
              </Button>
            </footer>
          </React.Fragment>
        );
      }}
    />
  );
};

const mapDispatchToProps = {
  setState,
  create,
  update
};

const mapStateToProps = state => {
  const selectedItems = getSelectedNotifications(state);
  const isEditing = getIsEditing(state);
  const isCreating = getIsCreating(state);
  return {
    isActive: isEditing || isCreating,
    isEditing,
    selectedItems
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(Notification));
