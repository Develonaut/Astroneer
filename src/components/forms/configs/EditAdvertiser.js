import * as Yup from "yup";
import {
  formFields as createFormFields,
  initialValues as createInitialValues,
  validationSchema as createValidationSchema,
  formFieldProps as createFormFieldProps
} from "components/forms/configs/CreateAdvertiser";

export const formFields = [
  {
    fieldName: "uniqueId",
    schema: Yup.string().required("Unique Id is required."),
    initialValue: "",
    props: {
      type: "text",
      name: "uniqueId",
      label: "Unique Id",
      hidden: true
    }
  },
  {
    fieldName: "advertiserId",
    schema: Yup.string().required("Advertiser Id is required."),
    initialValue: "",
    props: {
      type: "text",
      name: "advertiserId",
      label: "Advertiser Id",
      hidden: true
    }
  },
  ...createFormFields
];

export const formFieldProps = createFormFieldProps;
export const initialValues = createInitialValues;
export const validationSchema = createValidationSchema;
