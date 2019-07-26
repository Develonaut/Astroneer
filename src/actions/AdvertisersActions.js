export const COPY_ADVERTISER = "ADVERTISER:COPY";
export const REMOVE_ADVERTISER = "ADVERTISERS:REMOVE";
export const FETCH_ADVERTISERS = "ADVERTISERS:FETCH";
export const CREATE_ADVERTISER = "ADVERTISER:CREATE";
export const UPDATE_ADVERTISER = "ADVERTISER:UPDATE";
export const SET_ADVERTISERS = "ADVERTISERS:SET";
export const SET_ADVERTISERS_STATE = "ADVERTISERS:SET:STATE";

export function setState(delta) {
  return {
    type: SET_ADVERTISERS_STATE,
    delta
  };
}

export function fetch(delta = {}) {
  return {
    type: FETCH_ADVERTISERS,
    delta
  };
}

export function create(delta, formActions) {
  return {
    type: CREATE_ADVERTISER,
    delta,
    formActions
  };
}

export function set(delta = {}) {
  return {
    type: SET_ADVERTISERS,
    delta
  };
}

export function update(delta, formActions) {
  return {
    type: UPDATE_ADVERTISER,
    delta,
    formActions
  };
}

export function copy(count = 1) {
  return {
    type: COPY_ADVERTISER,
    count
  };
}

export function remove(delta = []) {
  return {
    type: REMOVE_ADVERTISER,
    delta
  };
}
