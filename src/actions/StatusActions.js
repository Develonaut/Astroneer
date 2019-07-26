// Actions
export const STATUS_SET_STATE = "STATUS:SET:STATE";

export function setStatusState(delta = {}) {
  return {
    type: STATUS_SET_STATE,
    delta
  };
}
