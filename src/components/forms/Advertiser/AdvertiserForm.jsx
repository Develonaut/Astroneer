import React from "react";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";
import {
  getSelectedAdvertisers,
  getIsEditing,
  getIsCreating
} from "selectors/AdvertisersSelectors";
import { setState, create, update } from "actions/AdvertisersActions";
import {
  formFieldProps as createAdvertiserProps,
  initialValues as createInitialValues,
  validationSchema as createValidationSchema
} from "components/forms/configs/CreateAdvertiser";
import {
  // formFieldProps as editAdvertiserProps,
  initialValues as editInitialValues,
  validationSchema as editValidationSchema
} from "components/forms/configs/EditAdvertiser";

import Button from "components/shared/Button/Button";
import Form from "components/forms/Form/Form";
import FieldSet from "components/inputs/FieldSet/FieldSet";

import styles from "components/forms/Advertiser/AdvertiserForm.styles";

const Advertiser = ({
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
        return (
          <React.Fragment>
            <h6 className={classes.title}>
              {isEditing ? "Edit Advertiser" : "Create Advertiser"}
            </h6>
            <section className={classes.form}>
              <section className={classes.details}>
                {[
                  "advertiser",
                  "active",
                  "primaryContact",
                  "primaryPhone",
                  "primaryEmail",
                  "primarySkype",
                  "salesExecutive",
                  "accountManager",
                  "termsDays",
                  "billingType",
                  "companyTimeZone",
                  "companyZip",
                  "companyState",
                  "companyCity",
                  "companyAddress"
                ].map(fieldName => {
                  return (
                    <FieldSet
                      key={fieldName}
                      extClasses={{ root: classes.FieldSet }}
                      fieldProps={createAdvertiserProps[fieldName]}
                    />
                  );
                })}
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
  const selectedItems = getSelectedAdvertisers(state);
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
)(withStyles(styles)(Advertiser));
