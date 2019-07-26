import * as Yup from "yup";
import { getKeyValuePair } from "conf/utils";
import implementations from "data/implementations";

export const formFields = [
  {
    fieldName: "title",
    schema: Yup.string().required("Title is required."),
    initialValue: "",
    props: {
      type: "text",
      name: "title",
      label: "Title*",
      placeholder: "Add Title"
    }
  },
  {
    fieldName: "implementation",
    schema: Yup.string().required("Implementation is required."),
    initialValue: "",
    props: {
      type: "select",
      name: "implementation",
      label: "Implementation",
      options: implementations
    }
  },
  {
    fieldName: "body",
    schema: Yup.string().required("Body is required."),
    initialValue: "",
    props: {
      type: "text",
      name: "body",
      label: "Body*"
    }
  },
  {
    fieldName: "image",
    schema: Yup.string().required("Image is required."),
    initialValue: "",
    props: {
      type: "image",
      name: "image",
      label: "Image*"
    }
  },
  {
    fieldName: "url",
    schema: Yup.string().required("Url is required."),
    initialValue: "",
    props: {
      type: "text",
      name: "url",
      label: "Url*"
    }
  },
  {
    fieldName: "icon",
    schema: Yup.string().required("Icon is required."),
    initialValue: "",
    props: {
      type: "icon",
      name: "icon",
      label: "Icon*"
    }
  },
  {
    fieldName: "subid6",
    schema: Yup.string().required("Subid6 is required."),
    initialValue: "",
    props: {
      type: "text",
      name: "subid6",
      label: "Subid6*"
    }
  }
];

export const formFieldProps = getKeyValuePair(formFields, "fieldName", "props");
export const initialValues = getKeyValuePair(
  formFields,
  "fieldName",
  "initialValue"
);
export const validationSchema = getKeyValuePair(
  formFields,
  "fieldName",
  "schema"
);
