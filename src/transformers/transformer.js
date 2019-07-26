import { getFormattedUTCDate } from "conf/date";
import { getFormattedUTCtime } from "conf/time";
import { toCamelCase } from "conf/utils";

export function transformObjectKeyCasing(object) {
  return Object.keys(object).reduce((transformedObj, key) => {
    return {
      ...transformedObj,
      [toCamelCase(key)]: object[key]
    };
  }, {});
}

// Takes data we fetch from the API and transforms it into values that
// the FE can work with.
export function transformFetchedData(data = [], formFieldProps = {}) {
  let transformedDeltas = data.map(delta => {
    return transformObjectKeyCasing(delta);
  });

  transformedDeltas = transformedDeltas.reduce((deltas, delta = {}) => {
    // This will be removed once we reformate the date select inputs since they
    // just take the start and end date directly.
    if (delta.startDate && delta.endDate) {
      const { startDate, endDate } = delta;
      delta.schedule = {
        from: getFormattedUTCDate(startDate),
        to: getFormattedUTCDate(endDate)
      };

      delete delta.startDate;
      delete delta.endDate;
    }
    const transformedDelta = Object.keys(delta).reduce(
      (transformedKeyValuesPairs, key) => {
        let value = delta[key];
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
    return [...deltas, transformedDelta];
  }, []);

  return transformedDeltas;
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
