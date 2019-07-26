import { transformObjectKeyCasing } from "conf/utils";
import { formFieldProps } from "components/forms/configs/CreateCampaign";
import { getFormattedUTCtime } from "conf/time";

// The AdUnit data needs to be formatted to be camel case and transform
// booleans and other values to be their actuall values instead of strings.
export function transformCampaignsFetch(campaignss = []) {
  let transformedCampaigns = campaignss.map(campaigns => {
    return transformObjectKeyCasing(campaigns);
  });

  transformedCampaigns = transformedCampaigns.reduce(
    (transformed, campaigns) => {
      const transformedCampaign = Object.keys(campaigns).reduce(
        (transformedKeyValuesPairs, key) => {
          let value = campaigns[key];
          const { type = null, name, options = [] } = formFieldProps[key] || {};
          switch (type) {
            case "switch":
              value = value === "true";
              break;
            case "select":
              value = translateSelectOption({ name, value, options });
              break;
            case "time":
              value = getFormattedUTCtime(value);
              break;
            default:
              break;
          }

          value = value === null ? "" : value;
          return {
            ...transformedKeyValuesPairs,
            [key]: value
          };
        },
        {}
      );
      return [...transformed, transformedCampaign];
    },
    []
  );

  return transformedCampaigns;
}

function translateSelectOption({ name, value, options }) {
  let translatedValue = options.find(
    ({ value: optionValue }) =>
      optionValue.toLowerCase() === value.toLowerCase()
  );

  switch (name) {
    case "advertiser":
      translatedValue = { label: value, value: value.toLowerCase() };
      break;
    case "daysOfWeek":
      translatedValue = value.split("|").reduce((transformedDays, day) => {
        const transformedDay = { label: day, value: day.toLowerCase() };
        return [...transformedDays, transformedDay];
      }, []);
      break;
    default:
      break;
  }

  return translatedValue;
}
