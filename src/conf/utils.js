import slugify from "slugify";

export function isDev() {
  return process.env.NODE_ENV === "development";
}

export function localAPIUrls() {
  return process.env.REACT_APP_USE_LOCAL_API === "true";
}

/**
 * Convert a string to title case
 * source: https://gist.github.com/SonyaMoisset/aa79f51d78b39639430661c03d9b1058#file-title-case-a-sentence-for-loop-wc-js
 * @param  {string} str The string to convert to title case
 * @return {string}     The converted string
 */
export function titleCase(str) {
  str = str.toLowerCase().split(" ");
  for (var i = 0; i < str.length; i++) {
    str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
  }
  return str.join(" ");
}

export function camelCaseToTitleCase(string = "") {
  const spacedString = string.replace(/([a-z])([A-Z])/g, "$1 $2");
  return `${spacedString.charAt(0).toUpperCase()}${spacedString.substring(1)}`;
}

// Returns a function, that, when invoked, will only be triggered at most once
// during a given window of time. Normally, the throttled function will run
// as much as it can, without ever going more than once per `wait` duration;
// but if you'd like to disable the execution on the leading edge, pass
// `{leading: false}`. To disable execution on the trailing edge, ditto.
export function throttle(func, wait, options) {
  var context, args, result;
  var timeout = null;
  var previous = 0;
  if (!options) options = {};
  var later = function() {
    previous = options.leading === false ? 0 : Date.now();
    timeout = null;
    result = func.apply(context, args);
    if (!timeout) context = args = null;
  };
  return function() {
    var now = Date.now();
    if (!previous && options.leading === false) previous = now;
    var remaining = wait - (now - previous);
    context = this;
    args = arguments;
    if (remaining <= 0 || remaining > wait) {
      if (timeout) {
        clearTimeout(timeout);
        timeout = null;
      }
      previous = now;
      result = func.apply(context, args);
      if (!timeout) context = args = null;
    } else if (!timeout && options.trailing !== false) {
      timeout = setTimeout(later, remaining);
    }
    return result;
  };
}

// Returns a function, that, as long as it continues to be invoked, will not
// be triggered. The function will be called after it stops being called for
// N milliseconds. If `immediate` is passed, trigger the function on the
// leading edge, instead of the trailing.
export function debounce(func, wait = 250, immediate = false) {
  var timeout;
  return function() {
    var context = this,
      args = arguments;
    var later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

export function getKeyValuePair(array = [], key = "", value = "") {
  return array.reduce((values, obj) => {
    return {
      ...values,
      [obj[key]]: obj[value]
    };
  }, {});
}

export function toCamelCase(str = "") {
  const stringMatch = str.match(/[A-Z][a-z]+/g) || [str];
  return stringMatch
    .map((word, idx) => {
      // If it is the first word make sure to lowercase all the chars.
      if (idx === 0) return word.toLowerCase();
      // If it is not the first word only upper case the first char and lowercase the rest.
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    })
    .join("");
}

export function transformObjectKeyCasing(object) {
  return Object.keys(object).reduce((transformedObj, key) => {
    return {
      ...transformedObj,
      [toCamelCase(key)]: object[key]
    };
  }, {});
}

export function groupBy(items, key) {
  return items.reduce(
    (result, item) => ({
      ...result,
      [item[key]]: [...(result[item[key]] || []), item]
    }),
    {}
  );
}

export function slugifyString(string = "") {
  return slugify(string, {
    replacement: "-", // replace spaces with replacement
    remove: null, // regex to remove characters
    lower: true // result in lower case
  });
}

export function getFormFields(formFields, fieldNames = []) {
  return formFields.filter(({ fieldName }) => fieldNames.includes(fieldName));
}

export function filterObjectByKeys(rawObj = {}, keys = []) {
  return Object.keys(rawObj)
    .filter(key => keys.includes(key))
    .reduce((obj, key) => {
      obj[key] = rawObj[key];
      return obj;
    }, {});
}

export function getValueByString(o, s) {
  s = s.replace(/\[(\w+)\]/g, ".$1"); // convert indexes to properties
  s = s.replace(/^\./, ""); // strip a leading dot
  var a = s.split(".");
  for (var i = 0, n = a.length; i < n; ++i) {
    var k = a[i];
    if (k in o) {
      o = o[k];
    } else {
      return;
    }
  }
  return o;
}

export function intToString(value) {
  const suffixes = ["", "k", "m", "b", "t"];
  const suffixNum = Math.floor(("" + value).length / 4);
  let shortValue = parseFloat(
    (suffixNum !== 0 ? value / Math.pow(1000, suffixNum) : value).toPrecision(2)
  );
  if (shortValue % 1 !== 0) shortValue = shortValue.toFixed(1);
  return shortValue + suffixes[suffixNum];
}

export function numberWithCommas(x) {
  var parts = x.toString().split(".");
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return parts.join(".");
}
