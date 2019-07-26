import * as Yup from "yup";
import { getKeyValuePair } from "conf/utils";

export const formFields = [
  {
    fieldName: "campaignName",
    schema: Yup.string().required("Campaign Name is required."),
    initialValue: "",
    props: {
      type: "text",
      name: "campaignName",
      label: "Campaign Name"
    }
  },
  {
    fieldName: "rateType",
    schema: Yup.string().required("Rate Type is required."),
    initialValue: "",
    props: {
      type: "select",
      name: "rateType",
      label: "Rate Type",
      options: [
        { label: "CPM (Cost Per Mil)", value: "CPM" },
        { label: "CPC (Cost Per Click)", value: "CPC" },
        { label: "CPA (Cost Per Acquisition)", value: "CPA" }
      ]
    }
  },
  {
    fieldName: "rate",
    schema: Yup.string(),
    initialValue: "0",
    props: {
      name: "rate",
      label: "$ Rate",
      placeholder: "0.00",
      type: "number",
      step: "0.01"
    }
  },
  {
    fieldName: "budget",
    schema: Yup.string(),
    initialValue: "0",
    props: {
      type: "number",
      name: "budget",
      label: "Budget"
    }
  },
  {
    fieldName: "budgetType",
    schema: Yup.string(),
    initialValue: '{ label: "Spend", value: "spend" }',
    props: {
      type: "select",
      name: "budgetType",
      label: "Budget Type",
      options: [
        { label: "Spend", value: "spend" },
        { label: "Receives", value: "receives" },
        { label: "Clicks", value: "clicks" },
        { label: "Conversions", value: "Conversions" }
      ]
    }
  },
  {
    fieldName: "maxReceives",
    schema: Yup.string(),
    initialValue: "0",
    props: {
      name: "maxReceives",
      label: "Max Receives",
      placeholder: "0.00",
      type: "number",
      step: "0.01"
    }
  },
  {
    fieldName: "maxClicks",
    schema: Yup.string(),
    initialValue: "0",
    props: {
      name: "maxClicks",
      label: "Max Clicks",
      placeholder: "0.00",
      type: "number",
      step: "0.01"
    }
  },
  {
    fieldName: "active",
    schema: Yup.boolean(),
    initialValue: true,
    props: {
      type: "switch",
      name: "active",
      label: "Active"
    }
  },
  {
    fieldName: "turnedOn",
    schema: Yup.boolean(),
    initialValue: false,
    props: {
      type: "switch",
      name: "turnedOn",
      label: "Turned On"
    }
  },
  {
    fieldName: "weighting",
    schema: Yup.string(),
    initialValue: "1",
    props: {
      type: "number",
      name: "weighting",
      label: "Weighting"
    }
  },
  {
    fieldName: "priority",
    schema: Yup.string(),
    initialValue: "0",
    props: {
      type: "number",
      name: "priority",
      label: "Priority"
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
