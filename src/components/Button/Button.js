import React from 'react';

import styles from './Button.module.css';

const Button = (props) => {

  let buttonType = styles.ButtonDefault;

  switch (props.type) {
    case 'success':
      buttonType = styles.ButtonSuccess;
      break;
    case 'danger':
      buttonType = styles.ButtonDanger;
      break;
    default:
  }

  const btnStyles = [styles.Button, buttonType].join(' ');
  return (
    <div 
      className={btnStyles} 
      onClick={props.onClick}>
      <span className={styles.ButtonChildContainer}>
        {props.children}
      </span>
    </div>
  );
};

export default Button;