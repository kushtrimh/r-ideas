import React, { useState } from 'react';

import { Switch, Route, Redirect, Link } from 'react-router-dom';
import { AppBar, IconButton, Toolbar, Typography, makeStyles } from '@material-ui/core';
import { Menu } from '@material-ui/icons';
import SideBar from '../components/sidebar/SideBar';
import IdeaManager from './IdeaManager';

const DRAWER_WIDTH = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${DRAWER_WIDTH}px)`,
    marginLeft: DRAWER_WIDTH,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  appBarLink: {
    color: theme.palette.common.white,
    textDecoration: 'none',
    '&:hover': {
      color: theme.palette.common.white,
      textDecoration: 'none',
    },
    '&:active': {
      color: theme.palette.common.white,
      textDecoration: 'none'
    }
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
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
      <AppBar 
        position="fixed"
        className={[classes.appBar, drawerOpen ? classes.appBarShift : null].join(' ')}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={[classes.menuButton, drawerOpen ? classes.hide : null].join(' ')}>
            <Menu />
          </IconButton>
          <Link to="/posts" className={classes.appBarLink}>
            <Typography variant="h6">R-Ideas</Typography>
          </Link>
        </Toolbar>
      </AppBar>
      <SideBar
        open={drawerOpen}
        closeDrawer={handleDrawerClose}
        width={DRAWER_WIDTH} />
      <main className={[classes.content, drawerOpen ? classes.contentShift : null].join(' ')}>
        <div className={classes.drawerHeader}></div>
        <Switch>
          <Route path="/posts" component={IdeaManager} />
          <Redirect from="/" to="/posts" exact />
        </Switch>
      </main>
      {props.children}
    </div>
  )
};

export default Layout;