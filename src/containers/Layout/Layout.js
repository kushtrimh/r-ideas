import React, { useState } from 'react';

import AppBar from '@material-ui/core/AppBar';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import SideBar from '../../components/SideBar/SideBar';
import IdeaManager from '../IdeaManager/IdeaManager';

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
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  }
}));

const Layout = (props) => {

  const classes = useStyles();
  const [drawerOpen, setDrawerOpen] = useState(true);
  const [addIdeaModalOpen, setAddIdeaModalOpen] = useState(false);

  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  }

  const handleDrawerClose = () => {
    setDrawerOpen(false)
  }

  const handleAddIdeaModalOpen = () => {
    setAddIdeaModalOpen(true);
  }

  const handleAddIdeaModalClose = () => {
    setAddIdeaModalOpen(false);
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
            <MenuIcon />
          </IconButton>
          <Typography variant="h6">R-Ideas</Typography>
        </Toolbar>
      </AppBar>
      <SideBar
        open={drawerOpen}
        closeDrawer={handleDrawerClose}
        width={DRAWER_WIDTH}
        openAddIdeaModal={handleAddIdeaModalOpen} />
      <IdeaManager 
        addIdeaModalStatus={addIdeaModalOpen}
        closeModal={handleAddIdeaModalClose} />
      {props.children}
    </div>
  )
};

export default Layout;