import React from "react";
import moment from "moment";
import { dateFormats, formatDate } from "conf/date";

import BudgetTransformer from "components/adUnits/AdUnitListItem/Transformers/BudgetTransformer";
import RateTransformer from "components/adUnits/AdUnitListItem/Transformers/RateTransformer";

const dateTransformer = date => formatDate(date, dateFormats.MMM_DO_YYYY);
const timeTransformer = ({ value }) =>
  moment(value, ["HH:mm:"]).format("hh:mm A");

export const columnConfig = [
  {
    key: "pushId",
    label: "Id",
    header: {
      columnSize: "70px"
    }
  },
  {
    key: "advertiser.label",
    label: "Advertiser",
    header: {
      columnSize: "100px"
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
    key: "budget",
    label: "Budget",
    header: {
      columnSize: "80px"
    },
    items: {
      transformer: props => <BudgetTransformer {...props} />
    }
  },
  {
    key: "rate",
    label: "Rate",
    header: {
      columnSize: "80px"
    },
    items: {
      transformer: props => <RateTransformer {...props} />
    }
  },
  {
    key: "startTime",
    label: "Start Time",
    header: {
      columnSize: "80px"
    },
    items: {
      transformer: timeTransformer
    }
  },
  {
    key: "endTime",
    label: "End Time",
    header: {
      columnSize: "80px"
    },
    items: {
      transformer: timeTransformer
    }
  },
  {
    key: "endDate",
    label: "End Date",
    header: {
      columnSize: "80px"
    },
    items: {
      transformer: dateTransformer
    }
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
  paddingLeft: "154px",
  gridTemplateColumns: `${columnConfig
    .map(({ header: { columnSize = "40px" } }) => columnSize)
    .join(" ")}`
};

export const itemGridStyles = {
  gridTemplateColumns: `136px ${columnConfig
    .map(({ header: { columnSize = "40px" } }) => columnSize)
    .join(" ")}`
};
