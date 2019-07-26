// Actions
export const FORM_SET_STATE = "FORM:SET:STATE";

export function setState(delta) {
  return {
    type: FORM_SET_STATE,
    delta
  };
}
