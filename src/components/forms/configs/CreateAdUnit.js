import * as Yup from "yup";
import { getAdvertisersByOrgAsSelectOptions } from "selectors/AdvertisersSelectors";
import { getKeyValuePair } from "conf/utils";
import countries from "data/countries";

export const formFields = [
  {
    fieldName: "startDate",
    schema: Yup.string().required("Start Date is required."),
    initialValue: "",
    props: {
      type: "date",
      name: "startDate",
      label: "Start Date*"
    }
  },
  {
    fieldName: "startTime",
    schema: Yup.string().required("Start Time is required."),
    initialValue: "00:00:00",
    props: {
      type: "time",
      name: "startTime",
      label: "Start Time*"
    }
  },
  {
    fieldName: "endTime",
    schema: Yup.string().required("End Time is required."),
    initialValue: "23:59:59",
    props: {
      type: "time",
      name: "endTime",
      label: "End Time*"
    }
  },
  {
    fieldName: "endDate",
    schema: Yup.string().required("End Date is required."),
    initialValue: "23:59:59",
    props: {
      type: "date",
      name: "endDate",
      label: "End Date*"
    }
  },
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
    fieldName: "advertiser",
    schema: Yup.string().required("Advertiser is required."),
    initialValue: "",
    props: {
      type: "select",
      name: "advertiser",
      label: "Advertiser*",
      selector: state => getAdvertisersByOrgAsSelectOptions(state)
    }
  },
  {
    fieldName: "rate",
    schema: Yup.string(),
    initialValue: "0",
    props: {
      name: "rate",
      label: "Rate",
      type: "number",
      step: "0.01",
      placeholder: "0.00"
    }
  },
  {
    fieldName: "actionText",
    schema: Yup.string(),
    initialValue: "",
    props: {
      name: "actionText",
      label: "Action Text"
    }
  },
  {
    fieldName: "actionIcon",
    schema: Yup.string(),
    initialValue: "",
    props: {
      type: "image",
      name: "actionIcon",
      label: "Action Icon"
    }
  },
  {
    fieldName: "rateType",
    schema: Yup.string(),
    initialValue: "",
    props: {
      type: "select",
      name: "rateType",
      label: "Rate Type",
      options: [
        {
          label: "CPM (Cost Per Mil)",
          value: "CPM"
        },
        {
          label: "CPC (Cost Per Click)",
          value: "CPC"
        },
        {
          label: "CPA (Cost Per Acquisition)",
          value: "CPA"
        }
      ]
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
      label: "Live"
    }
  },
  {
    fieldName: "daysOfWeek",
    schema: Yup.string(),
    initialValue: "",
    props: {
      type: "select",
      name: "daysOfWeek",
      label: "Days Of Week",
      isMulti: true,
      closeMenuOnSelect: false,
      options: [
        {
          label: "Sunday",
          value: "sunday"
        },
        {
          label: "Monday",
          value: "monday"
        },
        {
          label: "Tuesday",
          value: "tuesday"
        },
        {
          label: "Wednesday",
          value: "wednesday"
        },
        {
          label: "Thursday",
          value: "thursday"
        },
        {
          label: "Friday",
          value: "friday"
        },
        {
          label: "Saturday",
          value: "saturday"
        }
      ]
    }
  },
  {
    fieldName: "budget",
    schema: Yup.string(),
    initialValue: "0",
    props: {
      type: "number",
      name: "budget",
      label: "Budget",
      step: "0.01",
      placeholder: "0.00"
    }
  },
  {
    fieldName: "budgetType",
    schema: Yup.string(),
    initialValue: {
      label: "Spend",
      value: "spend"
    },
    props: {
      type: "select",
      name: "budgetType",
      label: "Budget Type",
      options: [
        {
          label: "Spend",
          value: "spend"
        },
        {
          label: "Receives",
          value: "receives"
        },
        {
          label: "Clicks",
          value: "clicks"
        },
        {
          label: "Conversions",
          value: "conversions"
        }
      ]
    }
  },
  {
    fieldName: "maxReceives",
    schema: Yup.string(),
    initialValue: "0",
    props: {
      type: "number",
      name: "maxReceives",
      label: "Max Receives",
      step: "1",
      placeholder: "0"
    }
  },
  {
    fieldName: "country",
    schema: Yup.string(),
    initialValue: {
      label: "United States",
      value: "US"
    },
    props: {
      type: "select",
      name: "country",
      label: "Country",
      options: countries
    }
  },
  {
    fieldName: "platform",
    schema: Yup.string().required("Platform is required."),
    initialValue: "",
    props: {
      type: "select",
      name: "platform",
      label: "Platform*",
      options: [
        {
          label: "Desktop",
          value: "desktop"
        },
        {
          label: "Mobile",
          value: "mobile"
        }
      ]
    }
  },
  {
    fieldName: "imp",
    schema: Yup.string().required("Imp is required."),
    initialValue: {
      label: "Horoscope Microsite",
      value: "horoscope_microsite"
    },
    props: {
      name: "imp",
      label: "Imp*",
      type: "select",
      options: [
        {
          label: "All",
          value: "all"
        },
        {
          label: "Horoscope Microsite",
          value: "horoscope_microsite"
        },
        {
          label: "News Microsite",
          value: "news_microsite"
        },
        {
          label: "Weather Microsite",
          value: "weather_microsite"
        },
        {
          label: "Weather",
          value: "weather"
        },
        {
          label: "Bible",
          value: "bible"
        }
      ]
    }
  },
  {
    fieldName: "ageBucket",
    schema: Yup.string(),
    initialValue: {
      label: "All ",
      value: "all"
    },
    props: {
      type: "select",
      name: "ageBucket",
      label: "Age bucket",
      options: [
        {
          label: "All ",
          value: "all"
        },
        {
          label: "1",
          value: "1"
        },
        {
          label: "2",
          value: "2"
        },
        {
          label: "3",
          value: "3"
        }
      ]
    }
  },
  {
    fieldName: "capPeriod",
    schema: Yup.string(),
    initialValue: "1",
    props: {
      name: "capPeriod",
      label: "Cap Period (Days)",
      type: "number",
      min: "1",
      max: "7",
      step: "1"
    }
  },
  {
    fieldName: "capAmount",
    schema: Yup.string(),
    initialValue: "0",
    props: {
      name: "capAmount",
      label: "Cap Amount",
      type: "number",
      step: "0.01",
      placeholder: "0.00"
    }
  },
  {
    fieldName: "priority",
    schema: Yup.string(),
    initialValue: {
      label: "1",
      value: "1"
    },
    props: {
      type: "select",
      name: "priority",
      label: "Priority",
      options: [
        {
          label: "1",
          value: "1"
        },
        {
          label: "2",
          value: "2"
        },
        {
          label: "3",
          value: "3"
        }
      ]
    }
  },
  {
    fieldName: "weighting",
    schema: Yup.string(),
    initialValue: "100",
    props: {
      type: "number",
      name: "weighting",
      label: "Weighting",
      min: "0",
      max: "100",
      step: "1"
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
