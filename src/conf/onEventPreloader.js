const hasPreloaded = false;
const onEventPreloader = ({ event = null, component = null }) => {
  if (!event || !component) return {};
  return !hasPreloaded
    ? {
        [event]: () => component.preload()
      }
    : {};
};

export default onEventPreloader;
