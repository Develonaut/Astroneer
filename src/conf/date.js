import moment from "moment";
import "moment-timezone";

export const dateFormats = {
  YYYY_MM_DD: "YYYY-MM-DD",
  MMMM_DO_YYYY: "MMMM Do YYYY",
  MMM_DO_YYYY: "MMM Do YYYY",
  MMM_DO: "MMM Do"
};

export function getTodaysDate() {
  return moment();
}

export function getUTCDate(date = null) {
  return !date ? getTodaysDate().utc() : moment(date).utc();
}

export function formatDate(date = null, format = null) {
  const { YYYY_MM_DD } = dateFormats;
  const _format = format ? format : YYYY_MM_DD;
  return !date ? getTodaysDate().format(_format) : moment(date).format(_format);
}

export function getFormattedTodaysDate(format = null) {
  const { YYYY_MM_DD } = dateFormats;
  const _format = format ? format : YYYY_MM_DD;
  return getTodaysDate().format(_format);
}

export function getFormattedUTCDate(date = null, format = null) {
  return formatDate(getUTCDate(date), format);
}

export function getXDaysFromDate(date, inc) {
  return formatDate(moment(date).add(inc, "days"));
}
