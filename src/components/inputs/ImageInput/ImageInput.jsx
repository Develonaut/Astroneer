import React, { PureComponent } from "react";
import { withStyles } from "@material-ui/core/styles";
import classNames from "classnames";
import shortid from "shortid";

import ImageUploader from "components/shared/ImageUploader/ImageUploader";
import ImagePicker from "components/shared/ImagePicker/ImagePicker";
import Button from "components/shared/Button/Button";

import styles from "components/inputs/ImageInput/ImageInput.styles";

class ImageInput extends PureComponent {
  constructor() {
    super();
    this.id = shortid.generate();
  }

  handleOnClick = (value = "") => {
    const { props: { name } = {}, setFieldValue } = this.props;
    setFieldValue(name, value);
  };

  render() {
    const { props: { name, value, type = "image" } = {}, classes } = this.props;
    const inputClass = classNames(classes.root);
    const imageWrapperClass = classNames([classes.imageWrapper], {
      [classes.imageWrapper_icon]: type === "icon",
      [classes.imageWrapper_image]: type === "image"
    });

    return (
      <div className={inputClass}>
        <span className={imageWrapperClass}>
          {value && <img className={classes.image} src={value} alt={value} />}
        </span>
        <section className={classes.buttons}>
          <ImageUploader
            name={name}
            id={this.id}
            onUpload={this.handleOnClick}
          />
          <ImagePicker onClick={this.handleOnClick} />
          <Button color="secondary" onClick={() => this.handleOnClick("")}>
            Delete
          </Button>
        </section>
      </div>
    );
  }
}

export default withStyles(styles)(ImageInput);
