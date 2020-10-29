import React, { useState } from 'react';

import { Switch, Route, Redirect } from 'react-router-dom';
import { makeStyles } from '@material-ui/core';
import SideBar from '../components/SideBar';
import Ideas from './Ideas';
import IdeaForm from './IdeaForm';
import ApplicationBar from '../components/ApplicationBar';

const DRAWER_WIDTH = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -DRAWER_WIDTH,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
}));

function Layout(props) {

  const classes = useStyles();
  const [drawerOpen, setDrawerOpen] = useState(true);

  function handleDrawerOpen() {
    setDrawerOpen(true);
  }

  function handleDrawerClose() {
    setDrawerOpen(false)
  }

  return (
    <div className={classes.root}>
      <ApplicationBar shift={handleDrawerOpen} shifted={drawerOpen} />
      <SideBar open={drawerOpen} closeDrawer={handleDrawerClose} width={DRAWER_WIDTH} />
      <main className={[classes.content, drawerOpen ? classes.contentShift : null].join(' ')}>
        <div className={classes.header}></div>
        <Switch>
          <Route path="/ideas/add" exact component={IdeaForm} />
          <Route path="/ideas" component={Ideas} />
          <Redirect from="/" to="/ideas" exact />
        </Switch>
      </main>
    </div>
  )
};

export default Layout;

export { DRAWER_WIDTH };