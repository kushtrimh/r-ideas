import React from 'react';
import { AppBar, IconButton, makeStyles, Toolbar, Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom';
import { DRAWER_WIDTH } from '../containers/Layout';

const useStyles = makeStyles((theme) => ({
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
  menuButton: {
    marginRight: theme.spacing(2)
  },
  hide: {
    display: 'none',
  }
}));

function ApplicationBar(props) {

  const classes = useStyles();

  return (
    <AppBar
      position="fixed"
      className={[classes.appBar, props.shifted ? classes.appBarShift : null].join(' ')}>
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="shift"
          onClick={props.shift}
          edge="start"
          className={[classes.menuButton, props.shifted ? classes.hide : null].join(' ')}>
          <MenuIcon />
        </IconButton>
        <Link to="/ideas" className={classes.appBarLink}>
          <Typography variant="h6">R-Ideas</Typography>
        </Link>
      </Toolbar>
    </AppBar>
  )
}

export default ApplicationBar;