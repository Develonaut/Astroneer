import React, { PureComponent } from "react";
import { withStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import { getSignedImageUrl, setImageState } from "actions/ImagesActions";
import { getImage } from "selectors/ImagesSelectors";
import classNames from "classnames";

import Dropzone from "react-dropzone";
import Button from "components/shared/Button/Button";

import styles from "components/shared/ImageUploader/ImageUploader.styles";

class ImageUploader extends PureComponent {
  componentDidMount() {
    const { setImageState: dispatchSetImageState, id } = this.props;
    if (id) dispatchSetImageState(id);
  }

  onDrop = files => {
    const { getSignedImageUrl: dispatchgetSignedImageUrl, id } = this.props;
    var file = files[0];
    dispatchgetSignedImageUrl(id, file);
  };

  componentDidUpdate({ image: { imageUrl: prevImage } }) {
    const {
      image: { imageUrl: curImage },
      onUpload
    } = this.props;
    if (prevImage !== curImage) onUpload(curImage);
  }

  render() {
    const { className } = this.props;
    return (
      <Button color="primary">
        <Dropzone
          // Resetting Dropzones inline styling
          style={{}}
          onDrop={this.onDrop}
          className={classNames([styles.root, className])}
        >
          Upload
        </Dropzone>
      </Button>
    );
  }
}

const mapDispatchToProps = {
  setImageState,
  getSignedImageUrl
};

function mapStateToProps(state, { id }) {
  return {
    image: getImage(state, id)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(ImageUploader));
