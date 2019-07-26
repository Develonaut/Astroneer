export const ENQUEUE_SNACKBAR = "SNACKBAR:ENQUEUE";
export const REMOVE_SNACKBAR = "SNACKBAR:REMOVE";

export function enqueueSnackbar(snackbar) {
  return {
    type: ENQUEUE_SNACKBAR,
    snackbar: {
      key: new Date().getTime() + Math.random(),
      ...snackbar
    }
  };
}

export function removeSnackbar(key) {
  return {
    type: REMOVE_SNACKBAR,
    key
  };
}
