import React from "react";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";
import {
  getSelectedCampaignsByOrganization,
  getIsEditing,
  getIsCreating
} from "selectors/CampaignsSelectors";
import { setState, create, update } from "actions/CampaignsActions";
import {
  formFieldProps as createCampaignProps,
  initialValues as createInitialValues,
  validationSchema as createValidationSchema
} from "components/forms/configs/CreateCampaign";
import {
  // formFieldProps as editCampaignProps,
  initialValues as editInitialValues,
  validationSchema as editValidationSchema
} from "components/forms/configs/EditCampaign";

import Form from "components/forms/Form/Form";
import FieldSet from "components/inputs/FieldSet/FieldSet";

import styles from "components/forms/Campaign/CampaignForm.styles";

const Campaign = ({
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
      extClasses={{ root: classes.root, header: classes.header }}
      onSubmit={(formValues, formActions) =>
        onSubmitMethod(formValues, formActions)
      }
      onClose={() => dispatchSetState({ isEditing: false, isCreating: false })}
      initialValues={initialValues}
      validationSchema={validationSchema}
      formRenderer={formikProps => {
        return (
          <section className={classes.form}>
            <section className={classes.details}>
              {[
                "campaignName",
                "active",
                "turnedOn",
                "weighting",
                "priority",
                "rateType",
                "rate",
                "budget",
                "budgetType",
                "maxReceives",
                "maxClicks"
              ].map(fieldName => {
                return (
                  <FieldSet
                    key={fieldName}
                    extClasses={{ root: classes.FieldSet }}
                    fieldProps={createCampaignProps[fieldName]}
                  />
                );
              })}
            </section>
          </section>
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
  const selectedItems = getSelectedCampaignsByOrganization(state);
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
)(withStyles(styles)(Campaign));
