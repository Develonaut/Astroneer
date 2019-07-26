import { formFieldProps } from "components/forms/configs/CreateNotification";

export function transformPostDelta(delta = {}) {
  return Object.keys(delta).reduce((transformed, key) => {
    const value = delta[key];
    // Update transformed to have the new property.
    transformed = {
      ...transformed,
      // Is the value nested within an object? If so grab
      // the value from it.
      [key]: !!value.value ? value.value : value
    };
    // Return the updated transformed object
    // to be used in the next iteration.
    return transformed;
  }, {});
}

export function transformCopyDelta(delta = {}) {
  const blacklist = ["notificationId"];
  const filtered = Object.keys(delta)
    .filter(key => !blacklist.includes(key))
    .reduce((obj, key) => {
      obj[key] = delta[key];
      return obj;
    }, {});

  return transformPostDelta(filtered);
}

// The Notification data needs to be formatted to be camel case and transform
// booleans and other values to be their actual values instead of strings.
export function transformNotificationsFetch({ items }) {
  let transformedItems = items.reduce((transformedItems, item) => {
    const transformedItem = Object.keys(item).reduce(
      (transformedKeyValuesPairs, key) => {
        let value = item[key];
        const { type = null, name, options = [] } = formFieldProps[key] || {};
        switch (type) {
          case "select":
            value = translateSelectOption({
              name,
              value,
              options
            });
            break;
          default:
            break;
        }

        // Convert null values to empty string for form
        // validation and editing.
        value = value === null ? "" : value;
        return {
          ...transformedKeyValuesPairs,
          [key]: value
        };
      },
      {}
    );
    return [...transformedItems, transformedItem];
  }, []);

  return transformedItems;
}

function translateSelectOption({ value = "", options }) {
  let translatedValue = options.find(
    ({ value: optionValue = "" }) =>
      String(optionValue).toLowerCase() === String(value).toLowerCase()
  );
  return translatedValue;
}
