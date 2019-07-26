import { transformObjectKeyCasing } from "conf/utils";
import { formFieldProps } from "components/forms/configs/CreateAdUnit";
import { getFormattedUTCDate } from "conf/date";
import { getFormattedUTCtime } from "conf/time";
import { getAdvertisersByOrgAsSelectOptions } from "selectors/AdvertisersSelectors";

let getState = null;

function transformStringValue(value) {
  const conversionChars = {
    "'": "''"
  };

  return Object.keys(conversionChars).map(char => {
    if (typeof value !== "string" || value.indexOf(char) === -1) return value;
    var regex = new RegExp(char, "g");
    return value.replace(regex, conversionChars[char]);
  })[0];
}

export function transformCopyDelta(raw = {}) {
  const blacklist = ["pushId", "advertiserId"];
  const filtered = Object.keys(raw)
    .filter(key => !blacklist.includes(key))
    .reduce((obj, key) => {
      obj[key] = raw[key];
      return obj;
    }, {});

  return transformPostDelta(filtered);
}

export function transformPostDelta(delta = {}) {
  return Object.keys(delta).reduce((transformedDelta, rawKey) => {
    let rawDelta = delta[rawKey];
    let value = !!rawDelta.value
      ? {
          [rawKey]: transformStringValue(rawDelta.value)
        }
      : {
          [rawKey]: transformStringValue(rawDelta)
        };

    switch (rawKey) {
      case "daysOfWeek":
        value = {
          [rawKey]: Object.values(rawDelta)
            .map(({ value }) => value)
            .join("|")
        };
        break;
      default:
        break;
    }

    transformedDelta = {
      ...transformedDelta,
      ...value
    };

    return transformedDelta;
  }, {});
}

export function transformAdUnitsPerformanceFetch({
  adUnits,
  getState: dispatchGetState = () => {}
}) {
  getState = dispatchGetState;
  const transformedAdUnitsPerformance = adUnits.map(adUnit => {
    return transformObjectKeyCasing(adUnit);
  });

  return transformedAdUnitsPerformance;
}

// The AdUnit data needs to be formatted to be camel case and transform
// booleans and other values to be their actuall values instead of strings.
export function transformAdUnitsFetch({
  adUnits,
  getState: dispatchGetState = () => {}
}) {
  getState = dispatchGetState;
  let transformedAdUnits = adUnits.map(adUnit => {
    return transformObjectKeyCasing(adUnit);
  });

  transformedAdUnits = transformedAdUnits.reduce((transformedUnits, adUnit) => {
    const transformedAdUnit = Object.keys(adUnit).reduce(
      (transformedKeyValuesPairs, key) => {
        let value = adUnit[key];
        const { type = null, name, options = [] } = formFieldProps[key] || {};
        switch (type) {
          case "switch":
            value = value === "true";
            break;
          case "select":
            value = translateSelectOption({
              name,
              value,
              options
            });
            break;
          case "time":
            value = getFormattedUTCtime(value);
            break;
          case "date":
            value = getFormattedUTCDate(value);
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
    return [...transformedUnits, transformedAdUnit];
  }, []);

  return transformedAdUnits;
}

function translateSelectOption({ name, value = "", options }) {
  let translatedValue = options.find(
    ({ value: optionValue = "" }) =>
      String(optionValue).toLowerCase() === String(value).toLowerCase()
  );

  switch (name) {
    case "advertiser":
      const advertisers = getAdvertisersByOrgAsSelectOptions(getState());
      const translatedAdvertiser = advertisers.find(
        ({ value: selectValue }) => selectValue === value.toLowerCase()
      ) || {
        label: "N/A",
        value: "N/A"
      };
      translatedValue = translatedAdvertiser;
      break;
    case "daysOfWeek":
      translatedValue = value.split("|").reduce((transformedDays, day) => {
        const transformedDay = {
          label: day,
          value: day.toLowerCase()
        };
        return [...transformedDays, transformedDay];
      }, []);
      break;
    default:
      break;
  }

  return translatedValue;
}
