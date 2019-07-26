export async function requestPermission() {
  try {
    const permission = await window.Notification.requestPermission();
    return permission;
  } catch (error) {
    return "denied";
  }
}

export async function showNotification({ title = "", ...restProps }) {
  if (!title) return;
  try {
    await requestPermission();
    const registration = await window.navigator.serviceWorker.getRegistration();
    if (!registration)
      throw new Error("Service Worker registration doesn't exists");
    registration.showNotification(title, restProps);
  } catch (error) {
    throw new Error(error);
  }
}
