import moment from "moment";
import "moment-timezone";

export const timeFormats = {
  HOUR_MINUTE_SECOND: "HH:mm:ss"
};

export function getUTCTime(time = null) {
  return !time ? moment().utc() : moment(time).utc();
}

export function formatTime(time, format = null) {
  const { HOUR_MINUTE_SECOND } = timeFormats;
  const _format = format ? format : HOUR_MINUTE_SECOND;
  return !time ? getUTCTime().format(_format) : time.format(_format);
}

export function getFormattedUTCtime(time = null, format) {
  return formatTime(getUTCTime(time), format);
}
