const styles = theme => ({
  root: {
    display: "inline-grid",
    gridTemplateColumns: "630px auto",
    gridTemplateRows: "min-content auto",
    gridGap: "20px",
    padding: "0 64px"
  },
  header: {
    top: "0",
    padding: "20px 0 10px 0",
    position: "sticky",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "space-between",
    backgroundColor: theme.palette.common.nova,
    zIndex: "999",
    gridRow: "1",
    gridColumn: "1"
  },
  headerSubmit: {
    position: "absolute",
    top: "20px",
    right: "-54px"
  },
  headerPreview: {
    position: "absolute",
    top: "20px",
    right: "35px"
  },
  headerClose: {
    position: "absolute",
    top: "20px",
    left: "-56px"
  },
  headerSummary: {
    width: "100%"
  },
  headerTabs: {
    borderBottom: `1px solid ${theme.palette.common.asteroid}`
  },
  pushId: {
    padding: "12px",
    display: "inline-block",
    color: "#99A2B1",
    fontSize: "12px",
    fontWeight: 500,
    lineHeight: "12px",
    marginBottom: "3px",
    pointerEvents: "none"
  },
  form: {
    gridRow: "2",
    gridColumn: "1",
    height: "auto",
    overflow: "auto",
    padding: "20px 0"
  },
  schedule: {
    display: "flex",
    flexDirection: "row",
    whiteSpace: "nowrap",
    alignItems: "center"
  },
  scheduleSection: {
    display: "grid",
    gridTemplateColumns: "120px 140px",
    gridGap: "10px"
  },
  scheduleDivider: {
    margin: "0 10px"
  },
  rate: {
    display: "inline-flex",
    flexDirection: "row",
    alignItems: "flex-end"
  },
  budget: {
    display: "inline-flex",
    flexDirection: "row",
    alignItems: "flex-end"
  },
  images: {
    display: "inline-flex",
    flexDirection: "column"
  },
  cap: {
    display: "inline-flex",
    alignItems: "flex-end"
  },
  action: {
    display: "inline-flex",
    flexDirection: "column"
  }
});

export default styles;
