import * as Yup from "yup";
import {
  formFields as createFormFields,
  initialValues as createInitialValues,
  validationSchema as createValidationSchema,
  formFieldProps as createFormFieldProps
} from "components/forms/configs/CreateCampaign";

export const formFields = [
  {
    fieldName: "pushId",
    schema: Yup.string().required("Push Id is required."),
    initialValue: "",
    props: {
      type: "text",
      name: "pushId",
      label: "Push Id",
      hidden: true
    }
  },
  ...createFormFields
];

export const formFieldProps = createFormFieldProps;
export const initialValues = createInitialValues;
export const validationSchema = createValidationSchema;
