import { PureComponent } from "react";
import { connect } from "react-redux";
import { withSnackbar } from "notistack";
import { getSnackbars } from "selectors/SnackbarSelectors";
import { removeSnackbar, enqueueSnackbar } from "actions/SnackbarActions";

class Notifier extends PureComponent {
  state = {
    displayed: []
  };

  storeDisplayed = key => {
    this.setState(({ displayed }) => ({
      displayed: [...displayed, key]
    }));
  };

  render() {
    const {
      snackbars = [],
      enqueueSnackbar: dispatchEnqueueSnackbar,
      removeSnackbar: dispatchRemoveSnackbar
    } = this.props;
    const { displayed } = this.state;

    snackbars.forEach(({ key, message, options }) => {
      setTimeout(() => {
        // If snackbar already displayed, abort
        if (displayed.indexOf(key) > -1) return;
        // Display snackbar using notistack
        dispatchEnqueueSnackbar(message, options);
        // Add snackbar's key to the local state
        this.storeDisplayed(key);
        // Dispatch action to remove the snackbar from the redux store
        dispatchRemoveSnackbar(key);
      }, 1);
    });

    return null;
  }
}

const mapStateToProps = state => ({
  snackbars: getSnackbars(state)
});

const mapDispatchToProps = {
  enqueueSnackbar,
  removeSnackbar
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withSnackbar(Notifier));
