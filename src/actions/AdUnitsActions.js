export const COPY_AD_UNITS = "AD:UNITS:COPY";
export const REMOVE_AD_UNITS = "AD:UNITS:REMOVE";
export const CREATE_AD_UNIT = "AD:UNIT:CREATE";
export const UPDATE_AD_UNIT = "AD:UNIT:UPDATE";
export const FETCH_AD_UNITS = "AD:UNITS:FETCH";
export const FETCH_AD_UNITS_PERFORMANCE = "AD:UNITS:FETCH:PERFORMANCE";
export const SET_AD_UNITS = "AD:UNITS:SET";
export const SET_AD_UNITS_PERFORMANCE = "AD:UNITS:SET:PERFORMANCE";
export const SET_AD_UNITS_STATE = "AD:UNITS:SET:STATE";
export const SET_AD_UNITS_QUICKFILTERS = "AD:UNITS:SET:QUICKFILTERS";
export const SET_AD_UNITS_DATE_FILTER = "AD:UNITS:SET:DATE:FILTER";

export function setState(delta) {
  return {
    type: SET_AD_UNITS_STATE,
    delta
  };
}

export function fetch(delta = {}) {
  return {
    type: FETCH_AD_UNITS,
    delta
  };
}

export function fetchPerformance() {
  return {
    type: FETCH_AD_UNITS_PERFORMANCE
  };
}

export function setPerformance(delta = {}) {
  return {
    type: SET_AD_UNITS_PERFORMANCE,
    delta
  };
}

export function set(delta = {}) {
  return {
    type: SET_AD_UNITS,
    delta
  };
}

export function create(delta = {}, formActions) {
  return {
    type: CREATE_AD_UNIT,
    delta,
    formActions
  };
}

export function update(delta = {}, formActions) {
  return {
    type: UPDATE_AD_UNIT,
    delta,
    formActions
  };
}

export function copy(count = 1) {
  return {
    type: COPY_AD_UNITS,
    count
  };
}

export function remove(delta = []) {
  return {
    type: REMOVE_AD_UNITS,
    delta
  };
}
