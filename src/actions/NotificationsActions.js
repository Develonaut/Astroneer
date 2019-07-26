export const COPY_NOTIFICATIONS = "NOTIFICATIONS:COPY";
export const REMOVE_NOTIFICATIONS = "NOTIFICATIONS:REMOVE";
export const CREATE_NOTIFICATION = "NOTIFICATION:CREATE";
export const UPDATE_NOTIFICATION = "NOTIFICATION:UPDATE";
export const FETCH_NOTIFICATIONS = "NOTIFICATIONS:FETCH";
export const SET_NOTIFICATIONS = "NOTIFICATIONS:SET";
export const SET_NOTIFICATIONS_STATE = "NOTIFICATIONS:SET:STATE";

export function setState(delta) {
  return {
    type: SET_NOTIFICATIONS_STATE,
    delta
  };
}

export function fetch(delta = {}) {
  return {
    type: FETCH_NOTIFICATIONS,
    delta
  };
}

export function set(delta = {}) {
  return {
    type: SET_NOTIFICATIONS,
    delta
  };
}

export function create(delta = {}, formActions) {
  return {
    type: CREATE_NOTIFICATION,
    delta,
    formActions
  };
}

export function update(delta = {}, formActions) {
  return {
    type: UPDATE_NOTIFICATION,
    delta,
    formActions
  };
}

export function copy(count = 1) {
  return {
    type: COPY_NOTIFICATIONS,
    count
  };
}

export function remove(delta = []) {
  return {
    type: REMOVE_NOTIFICATIONS,
    delta
  };
}
