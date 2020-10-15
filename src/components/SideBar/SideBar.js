import React from 'react';

import Tags from '../Tags/Tags';
import Button from '../Button/Button';

import classes from './SideBar.module.css';

const SideBar = (props) => {
  return (
    <div className={classes.SideBar}>
      <Tags />
      <div className={classes.SideBarFooter}>
        <Button type="success">
          New Idea
        </Button>
      </div>
    </div>
  )
};

export default SideBar;