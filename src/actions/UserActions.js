export const USER_SET_STATE = "USER:SET:STATE";
export const USER_REQUEST_LOGIN = "USER:FETCH:LOGIN";
export const USER_LOGIN = "USER:LOGIN";
export const USER_LOGOUT = "USER:LOGOUT";

export function setUserState(delta = {}) {
  return {
    type: USER_SET_STATE,
    delta
  };
}

export function requestUserLogin(delta = {}, formActions = {}) {
  return {
    type: USER_REQUEST_LOGIN,
    delta,
    formActions
  };
}

export function userLogin(delta = {}) {
  return {
    type: USER_LOGIN,
    delta
  };
}

export function userLogout() {
  return {
    type: USER_LOGOUT
  };
}
