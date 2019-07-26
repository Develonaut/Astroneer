// Actions
export const UI_SET_STATE = "UI:SET:STATE";

export function setState(delta) {
  return {
    type: UI_SET_STATE,
    delta
  };
}
