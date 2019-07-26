import * as Yup from "yup";
import { getKeyValuePair } from "conf/utils";

export const formFields = [
  {
    fieldName: "advertiser",
    schema: Yup.string().required("Advertiser is required."),
    initialValue: "",
    props: {
      type: "text",
      name: "advertiser",
      label: "Advertiser"
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
    fieldName: "primaryContact",
    schema: Yup.string(),
    initialValue: "",
    props: {
      type: "text",
      name: "primaryContact",
      label: "Primary Contact"
    }
  },
  {
    fieldName: "primaryPhone",
    schema: Yup.string(),
    initialValue: "",
    props: {
      type: "text",
      name: "primaryPhone",
      label: "Primary Phone"
    }
  },
  {
    fieldName: "primaryEmail",
    schema: Yup.string(),
    initialValue: "",
    props: {
      type: "text",
      name: "primaryEmail",
      label: "Primary Email"
    }
  },
  {
    fieldName: "primarySkype",
    schema: Yup.string(),
    initialValue: "",
    props: {
      type: "text",
      name: "primarySkype",
      label: "Primary Skype"
    }
  },
  {
    fieldName: "salesExecutive",
    schema: Yup.string(),
    initialValue: "",
    props: {
      type: "text",
      name: "salesExecutive",
      label: "Sales Executive"
    }
  },
  {
    fieldName: "accountManager",
    schema: Yup.string(),
    initialValue: "",
    props: {
      type: "text",
      name: "accountManager",
      label: "Account Manager"
    }
  },
  {
    fieldName: "termsDays",
    schema: Yup.string(),
    initialValue: "",
    props: {
      type: "text",
      name: "termsDays",
      label: "Terms Days"
    }
  },
  {
    fieldName: "billingType",
    schema: Yup.string(),
    initialValue: "Net Terms",
    props: {
      type: "text",
      name: "billingType",
      label: "Billing Type"
    }
  },
  {
    // TODO MAKE SELECT
    fieldName: "companyTimeZone",
    schema: Yup.string(),
    initialValue: "GMT+0",
    props: {
      type: "text",
      name: "companyTimeZone",
      label: "Company Time Zone"
    }
  },
  {
    fieldName: "companyZip",
    schema: Yup.string(),
    initialValue: "",
    props: {
      type: "text",
      name: "companyZip",
      label: "Company Zip"
    }
  },
  {
    fieldName: "companyState",
    schema: Yup.string(),
    initialValue: "",
    props: {
      type: "text",
      name: "companyState",
      label: "Company State"
    }
  },
  {
    fieldName: "companyCity",
    schema: Yup.string(),
    initialValue: "",
    props: {
      type: "text",
      name: "companyCity",
      label: "Company City"
    }
  },
  {
    fieldName: "companyAddress",
    schema: Yup.string(),
    initialValue: "",
    props: {
      type: "text",
      name: "companyAddress",
      label: "Company Address"
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
