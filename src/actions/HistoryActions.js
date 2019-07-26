// Actions
export const HISTORY_SET_STATE = "HISTORY:SET:STATE";

export function setHistoryState(delta) {
  return {
    type: HISTORY_SET_STATE,
    delta
  };
}
