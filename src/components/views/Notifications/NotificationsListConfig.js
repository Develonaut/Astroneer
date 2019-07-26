export const columnConfig = [
  {
    key: "implementation.label",
    label: "Implementation",
    header: {
      columnSize: "200px"
    },
    items: {}
  },
  {
    key: "title",
    label: "Title",
    header: {
      columnSize: "minmax(400px, 1fr)"
    },
    items: {}
  },
  {
    key: "body",
    label: "Body",
    header: {
      columnSize: "minmax(400px, 1fr)"
    },
    items: {}
  }
];

export const headerColumns = [
  ...columnConfig.map(({ header, key, label }) => ({
    key,
    label,
    ...header
  }))
];

export const itemColumns = [
  ...columnConfig.map(({ key, label, items }) => ({
    key,
    label,
    ...items
  }))
];

export const headerGridStyles = {
  paddingLeft: "58px",
  gridTemplateColumns: `${columnConfig
    .map(({ header: { columnSize = "40px" } }) => columnSize)
    .join(" ")}`
};

export const itemGridStyles = {
  gridTemplateColumns: `48px ${columnConfig
    .map(({ header: { columnSize = "40px" } }) => columnSize)
    .join(" ")}`
};
