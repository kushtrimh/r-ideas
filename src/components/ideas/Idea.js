import React from 'react';
import { makeStyles, Card, Typography, CardContent } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'inline-block',
    margin: theme.spacing(2),
    [theme.breakpoints.up('md')]: {
      width: '30%'
    },
    [theme.breakpoints.down('md')]: {
      width: '45%'
    },
    [theme.breakpoints.down('sm')]: {
      width: '90%'
    }
  },
  card: {
    padding: theme.spacing(2)
  },
  content: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(4)
  },
  createdDate: {
    fontSize: 14,
    float: 'right'
  }
}));

function Idea(props) {

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Card className={classes.card} elevation={3}>
        <CardContent>
          <Typography gutterBottom color="primary" component="h2">
            {props.title}
          </Typography>
          <Typography className={classes.content} color="textPrimary" component="p">
            {props.content}
          </Typography>
          <Typography color="secondary" className={classes.createdDate}>
            {new Date(props.createdDate).toDateString()}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}

export default Idea;