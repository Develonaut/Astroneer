import * as Yup from "yup";
import {
  formFields as createFormFields,
  initialValues as createInitialValues,
  validationSchema as createValidationSchema,
  formFieldProps as createFormFieldProps
} from "components/forms/configs/CreateNotification";

export const formFields = [
  {
    fieldName: "notificationId",
    schema: Yup.string().required("Notification Id is required."),
    initialValue: "",
    props: {
      type: "text",
      name: "notificationId",
      label: "Notification Id",
      hidden: true
    }
  },
  ...createFormFields
];

export const formFieldProps = createFormFieldProps;
export const initialValues = createInitialValues;
export const validationSchema = createValidationSchema;
