import React, { PureComponent } from "react";

import Tooltip from "@material-ui/core/Tooltip";
import SelectInput from "components/inputs/SelectInput/SelectInput";
import IconButton from "@material-ui/core/IconButton";
import Copy from "@material-ui/icons/FileCopy";

const options = [
  { label: "1", value: 1 },
  { label: "2", value: 2 },
  { label: "3", value: 3 },
  { label: "4", value: 4 },
  { label: "5", value: 5 },
  { label: "6", value: 6 },
  { label: "7", value: 7 },
  { label: "8", value: 8 },
  { label: "9", value: 9 }
];

class CopyButton extends PureComponent {
  state = {
    count: { label: "1", value: 1 }
  };

  render() {
    const { count: { value = 1 } = {} } = this.state;
    const { onClick = () => {}, allowCount = false } = this.props;
    return (
      <Tooltip title="Copy" aria-label="Copy">
        <div>
          <IconButton onClick={() => onClick(value)} variant="icon">
            <Copy fontSize="small" />
          </IconButton>
          {allowCount && (
            <SelectInput
              props={{
                name: "copy",
                value: this.state.count
              }}
              options={options}
              setFieldValue={(name, data) => this.setState({ count: data })}
            />
          )}
        </div>
      </Tooltip>
    );
  }
}

export default CopyButton;
