import React, { forwardRef } from "react";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";
import {
  getSelectedAdUnits,
  getIsEditing,
  getIsCreating
} from "selectors/AdUnitsSelectors";
import { setState, create, update, fetch } from "actions/AdUnitsActions";
import {
  formFieldProps as createAdUnitProps,
  initialValues as createInitialValues,
  validationSchema as createValidationSchema
} from "components/forms/configs/CreateAdUnit";
import {
  initialValues as editInitialValues,
  validationSchema as editValidationSchema
} from "components/forms/configs/EditAdUnit";
import { showNotification } from "conf/pushNotifications";

import Button from "components/shared/Button/Button";
import CloseIcon from "@material-ui/icons/Close";
import Form from "components/forms/Form/Form";
import FieldSet from "components/inputs/FieldSet/FieldSet";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

import styles from "components/forms/AdUnit/AdUnitForm.styles.js";

const AdUnitForm = forwardRef(
  (
    {
      classes = {},
      isEditing = false,
      selectedItems = [],
      create: dispatchCreate,
      fetch: dispatchFetch,
      update: dispatchUpdate,
      setState: dispatchSetState,
      ...rest
    },
    ref
  ) => {
    console.log({
      ref,
      rest
    });

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
        ref={ref}
        extClasses={{ root: classes.root, header: classes.header }}
        onSubmit={(formValues, formActions) =>
          onSubmitMethod(formValues, formActions)
        }
        initialValues={initialValues}
        validationSchema={validationSchema}
        formRenderer={formikProps => {
          const { values: { title = null } = {} } = formikProps;
          return (
            <React.Fragment>
              <header className={classes.header}>
                <Button
                  className={classes.headerClose}
                  type="icon"
                  onClick={() => {
                    dispatchFetch({ force: true, silent: true });
                    dispatchSetState({ isEditing: false, isCreating: false });
                  }}
                  aria-label="Close"
                >
                  <CloseIcon />
                </Button>
                <section className={classes.headerSummary}>
                  {editingValues.pushId && (
                    <div className={classes.pushId}>
                      Push Id: {editingValues.pushId}
                    </div>
                  )}
                  {["active", "turnedOn"].map(fieldName => (
                    <FieldSet
                      key={fieldName}
                      extClasses={{ input: classes[fieldName] }}
                      fieldProps={createAdUnitProps[fieldName]}
                    />
                  ))}
                  {["title"].map(fieldName => (
                    <FieldSet
                      key={fieldName}
                      fullWidth
                      extClasses={{ input: classes[fieldName] }}
                      fieldProps={createAdUnitProps[fieldName]}
                    />
                  ))}
                  <section className={classes.schedule}>
                    <section className={classes.scheduleSection}>
                      {["startTime", "startDate"].map(fieldName => (
                        <FieldSet
                          key={fieldName}
                          extClasses={{ input: classes[fieldName] }}
                          fieldProps={createAdUnitProps[fieldName]}
                        />
                      ))}
                    </section>
                    <span className={classes.scheduleDivider}>to</span>
                    <section className={classes.scheduleSection}>
                      {["endTime", "endDate"].map(fieldName => (
                        <FieldSet
                          key={fieldName}
                          extClasses={{ input: classes[fieldName] }}
                          fieldProps={createAdUnitProps[fieldName]}
                        />
                      ))}
                    </section>
                  </section>
                  <Tabs
                    value={0}
                    onChange={() => {}}
                    variant="fullWidth"
                    indicatorColor="primary"
                    classes={{ root: classes.headerTabs }}
                  >
                    <Tab label="Ad Details" />
                  </Tabs>
                </section>
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
                <Button
                  className={classes.headerSubmit}
                  variant="contained"
                  color="primary"
                  size="medium"
                  onClick={formikProps.submitForm}
                  disabled={formikProps.isSubmitting}
                >
                  Submit
                </Button>
              </header>
              <section className={classes.form}>
                <section className={classes.details}>
                  {["body", "url"].map(fieldName => (
                    <FieldSet
                      key={fieldName}
                      fullWidth
                      extClasses={{ input: classes[fieldName] }}
                      fieldProps={createAdUnitProps[fieldName]}
                    />
                  ))}
                </section>
                <section>
                  {[
                    "advertiser",
                    "platform",
                    "imp",
                    "ageBucket",
                    "country"
                  ].map(fieldName => (
                    <FieldSet
                      key={fieldName}
                      extClasses={{ input: classes[fieldName] }}
                      fieldProps={createAdUnitProps[fieldName]}
                    />
                  ))}
                  <section className={classes.rate}>
                    {["rate", "rateType"].map(fieldName => (
                      <FieldSet
                        key={fieldName}
                        extClasses={{ input: classes[fieldName] }}
                        fieldProps={createAdUnitProps[fieldName]}
                      />
                    ))}
                  </section>
                  <section className={classes.budget}>
                    {["budget", "budgetType", "maxReceives"].map(fieldName => (
                      <FieldSet
                        key={fieldName}
                        extClasses={{ input: classes[fieldName] }}
                        fieldProps={createAdUnitProps[fieldName]}
                      />
                    ))}
                  </section>
                  <section className={classes.cap}>
                    {["capPeriod", "priority", "weighting"].map(fieldName => (
                      <FieldSet
                        key={fieldName}
                        extClasses={{ input: classes[fieldName] }}
                        fieldProps={createAdUnitProps[fieldName]}
                      />
                    ))}
                  </section>
                  <section className={classes.images}>
                    {["icon", "image"].map(fieldName => (
                      <FieldSet
                        key={fieldName}
                        extClasses={{ input: classes[fieldName] }}
                        fieldProps={createAdUnitProps[fieldName]}
                      />
                    ))}
                  </section>
                  <section className={classes.action}>
                    {["actionText", "actionIcon"].map(fieldName => (
                      <FieldSet
                        key={fieldName}
                        extClasses={{ input: classes[fieldName] }}
                        fieldProps={createAdUnitProps[fieldName]}
                      />
                    ))}
                  </section>
                </section>
              </section>
            </React.Fragment>
          );
        }}
      />
    );
  }
);

const mapDispatchToProps = {
  setState,
  create,
  update,
  fetch
};

const mapStateToProps = state => {
  const selectedItems = getSelectedAdUnits(state);
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
)(withStyles(styles)(AdUnitForm));
