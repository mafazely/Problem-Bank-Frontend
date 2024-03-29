import { Button } from '@material-ui/core';
import Grow from '@material-ui/core/Grow';
import { useSnackbar } from 'notistack';
import React from 'react';
import { connect } from 'react-redux';

import { removeSnackbar } from '../../redux/actions/notifications';

let displayed = [];

const Notifications = ({ notifications = [], removeSnackbar }) => {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  const storeDisplayed = (id) => {
    displayed = [...displayed, id];
  };

  const removeDisplayed = (id) => {
    displayed = [...displayed.filter((key) => id !== key)];
  };


  React.useEffect(() => {
    notifications.forEach(
      ({ key, message, options = {}, dismissed = false }) => {
        if (dismissed) {
          closeSnackbar(key);
          return;
        }
        if (displayed.includes(key)) return;

        enqueueSnackbar(message, {
          key,
          anchorOrigin: {
            vertical: 'top',
            horizontal: 'left',
          },
          TransitionComponent: (props) => <Grow {...props} />,
          ...options,
          onClose: (event, reason, myKey) => {
            if (options.onClose) {
              options.onClose(event, reason, myKey);
            }
          },
          onExited: (event, myKey) => {
            removeSnackbar(myKey);
            removeDisplayed(myKey);
          },
          action: (
            <Button
              onClick={() => {
                closeSnackbar(key);
                removeSnackbar(key);
                removeDisplayed(key);
              }}>
                حله
            </Button>
          ),
        });

        storeDisplayed(key);
      }
    );
  }, [notifications, closeSnackbar, enqueueSnackbar, removeSnackbar]);

  return null;
};

const mapStateToProps = (state) => ({
  notifications: state.notifications.notifications,
});

export default connect(mapStateToProps, { removeSnackbar })(Notifications);
