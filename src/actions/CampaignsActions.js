export const FETCH_CAMPAIGNS = "CAMPAIGNS:FETCH";
export const CREATE_CAMPAIGN = "CAMPAIGN:CREATE";
export const UPDATE_CAMPAIGN = "CAMPAIGN:UPDATE";
export const SET_CAMPAIGNS = "CAMPAIGNS:SET";
export const SET_CAMPAIGNS_STATE = "CAMPAIGNS:SET:STATE";

export function setState(delta) {
  return {
    type: SET_CAMPAIGNS_STATE,
    delta
  };
}

export function fetch(delta = {}) {
  return {
    type: FETCH_CAMPAIGNS,
    delta
  };
}

export function create(delta, formActions) {
  return {
    type: CREATE_CAMPAIGN,
    delta,
    formActions
  };
}

export function set(delta = {}) {
  return {
    type: SET_CAMPAIGNS,
    delta
  };
}

export function update(delta, formActions) {
  return {
    type: UPDATE_CAMPAIGN,
    delta,
    formActions
  };
}
