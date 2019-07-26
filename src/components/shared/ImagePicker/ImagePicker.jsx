import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { getS3Images } from "selectors/ImagesSelectors";
import { fetchS3Images } from "actions/ImagesActions";

import ImageList from "components/shared/ImageList/ImageList";
import Paper from "@material-ui/core/Paper";
import Button from "components/shared/Button/Button";
import Modal from "@material-ui/core/Modal";
class ImagePicker extends PureComponent {
  state = {
    active: false,
    canFetch: true
  };

  toggleModalClose = () => {
    const { active } = this.state;
    this.setState({ active: !active });
  };

  onClickHandler = ({ target: { id } }) => {
    const {
      onClick = () => {},
      fetchS3Images: dispatchFetchS3Images
    } = this.props;
    onClick(id);
    dispatchFetchS3Images({ force: true });
    this.toggleModalClose();
  };

  render() {
    const { images = [], className } = this.props;
    const { active = false } = this.state;
    return (
      <React.Fragment>
        <Modal open={active} onClose={this.toggleModalClose}>
          <Paper>
            <ImageList images={images} onClick={this.onClickHandler} />
          </Paper>
        </Modal>
        <Button
          color="primary"
          className={className}
          onClick={this.onClickHandler}
        >
          Choose
        </Button>
      </React.Fragment>
    );
  }
}

function mapStateToProps(state) {
  return {
    images: getS3Images(state)
  };
}

const mapPropsToDispatch = {
  fetchS3Images
};

export default connect(
  mapStateToProps,
  mapPropsToDispatch
)(ImagePicker);
