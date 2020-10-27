import React from 'react';

import { Link as RouterLink } from 'react-router-dom';
import { Button, Divider, Drawer, IconButton,
   makeStyles, withStyles, Typography, Link } from '@material-ui/core';
import { ChevronLeft } from '@material-ui/icons';

import Tags from '../tags/Tags';

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
  buttonContainer: {
    marginTop: theme.spacing(2),
  }
}));

const SideBarButton = withStyles((theme) => ({
  root: {
    display: 'block',
    margin: `${theme.spacing(1)}px auto`,
    textDecoration: 'none',
    width: 'max-content'
  }
}))(Button);

function SideBar(props) {

  const classes = useStyles(props);

  const buttons = [
    {color: 'primary', text: 'Posts', to: '/posts'},
    {color: 'secondary', text: 'Add New Post', to: '/posts/add'}
  ].map(button => (
    <SideBarButton
      variant="contained"
      color={button.color}>
      <Link 
        to={button.to}
        component={RouterLink}>
        <Typography
          align="center"
          variant="button">
          {button.text}
        </Typography>
      </Link>
    </SideBarButton>
  ));

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
          <ChevronLeft color="secondary" />
        </IconButton>
      </div>
      <Divider />
      <div className={classes.buttonContainer}>
        {buttons}
      </div>
      <Tags />
    </Drawer>
  )
};

export default SideBar;