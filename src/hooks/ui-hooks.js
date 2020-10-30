import React, { useState, useEffect } from 'react';

import Alert from '../components/ui/Alert';

export function useAlert(props) {
  const [alertProps, setAlertProps] = useState({
    open: false,
    onClose: handleClose, 
    ...props
  });
  const [alert, setAlert] = useState(<Alert {...alertProps} />);

  function updateAlertProps(props) {
    setAlertProps({
      ...alertProps,
      ...props
    });
  }

  function handleClose() {
    updateAlertProps({ open: false });
    console.log('closed');
  }

  useEffect(() => {
    setAlert(<Alert {...alertProps} />);
  }, [alertProps]);

  return [alert, updateAlertProps];
}