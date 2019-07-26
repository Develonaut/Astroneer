import { transformObjectKeyCasing } from "conf/utils";
import { formFieldProps } from "components/forms/configs/CreateAdUnit";
import { getFormattedUTCDate } from "conf/date";
import { getFormattedUTCtime } from "conf/time";
import { getRandomColor } from "conf/MUIColors";

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

    if (rawKey === "hex") value = {};
    switch (rawKey) {
      case "advertiser":
        value = {
          [rawKey]: value[rawKey].replace(/ /g, "")
        };
        break;
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

// The AdUnit data needs to be formatted to be camel case and transform
// booleans and other values to be their actuall values instead of strings.
export function transformAdvertisersFetch({ advertisers }) {
  let transformedAdvertisers = advertisers.map(advertiser => {
    advertiser.hex = getRandomColor();
    return transformObjectKeyCasing(advertiser);
  });

  transformedAdvertisers = transformedAdvertisers.reduce(
    (transformed, advertiser) => {
      const transformedAdvertiser = Object.keys(advertiser).reduce(
        (transformedKeyValuesPairs, key) => {
          let value = advertiser[key];
          const { type = null } = formFieldProps[key] || {};
          switch (type) {
            case "switch":
              value = value === "true";
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

          const keyTranslations = {
            uniqueid: "uniqueId"
          };

          const translatedKey = keyTranslations[key]
            ? keyTranslations[key]
            : key;
          value = value === null ? "" : value;
          return {
            ...transformedKeyValuesPairs,
            [translatedKey]: value
          };
        },
        {}
      );
      return [...transformed, transformedAdvertiser];
    },
    []
  );

  return transformedAdvertisers;
}
