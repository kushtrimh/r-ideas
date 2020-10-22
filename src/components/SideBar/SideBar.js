import React from 'react';

import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import { makeStyles } from '@material-ui/core';

import Tags from '../Tags/Tags';

const useStyles = makeStyles((theme) => ({
  drawer: props => ({
    width: props.width,
    flexShrink: 0,
  }),
  drawerPaper: props => ({
    width: props.width,
  }),
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  listItem: {
    backgroundColor: theme.palette.secondary.main
  }
}));

const SideBar = (props) => {

  const classes = useStyles(props);

  return (
    <Drawer
      open={props.open}
      variant="persistent"
      anchor="left"
      className={classes.drawer}
      classes={{
        paper: classes.drawerPaper
      }}>
      <div className={classes.drawerHeader}>
        <IconButton onClick={props.closeDrawer}>
          <ChevronLeftIcon />
        </IconButton>
      </div>
      <Divider />
      <List>
        {['Add New Idea'].map((text, index) => (
          <ListItem 
            button 
            key={text}
            className={classes.listItem}
            onClick={props.openAddIdeaModal}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
        <Divider />
        <Tags />
      </List>
    </Drawer>
  )
};

export default SideBar;