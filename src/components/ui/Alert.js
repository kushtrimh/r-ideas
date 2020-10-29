import React from 'react';

import { IconButton, makeStyles, Snackbar, SnackbarContent } from '@material-ui/core';
import { Close } from '@material-ui/icons';

var useStyles = makeStyles((theme) => ({
  alertError: {
    backgroundColor: theme.palette.warning.main
  },
  alertSuccess: {
    backgroundColor: theme.palette.success.main
  },
  closeIcon: {
    color: theme.palette.common.white
  }
}));

function Alert(props) {

  const classes = useStyles();

  let alertClassName;
  switch (props.type) {
    case 'success':
      alertClassName = classes.alertSuccess;
      break;
    case 'error':
      alertClassName = classes.alertError;
      break;
    default:
      alertClassName = null;
  }

  
  return (
    <Snackbar
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'center'
      }}
      open={props.open} variant="filled" autoHideDuration={6500}>
      <SnackbarContent className={alertClassName} message={props.message}
        action={
          <IconButton size="small" onClick={props.onClose} 
            className={classes.closeIcon}>
            <Close fontSize="small" />
          </IconButton>
        }>
      </SnackbarContent>
    </Snackbar>
  );
}

export default Alert;