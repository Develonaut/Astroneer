// Suggestion taken from the CRA Issue Board https://github.com/facebook/create-react-app/issues/5890#issuecomment-450915616
// Add a listener to receive messages from clients
self.addEventListener("message", function(event) {
  if (!event.data) return;
  // Force SW upgrade (activation of new installed SW version)
  if (event.data === "skipWaiting") {
    self.skipWaiting();
  }
});
