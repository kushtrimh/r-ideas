import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles, Chip } from '@material-ui/core';

import { addTags } from '../store/actions/actions';
import { useDatabase } from '../config/firebase-config';
import { useAlert } from '../hooks/ui-hooks';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(2)
  },
  tag: {
    color: theme.palette.common.white,
    margin: theme.spacing(0.25, 0.25)
  }
}));

function Tags() {

  const classes = useStyles();

  const database = useDatabase();

  const tags = useSelector(state => state.tag.tags);
  const dispatch = useDispatch();

  const [alert, setAlertProps] = useAlert({
    type: 'error',
    message: 'Could not query tags'
  });

  useEffect(() => {
    database.ref('tags/').once('value').then(snapshot => {
      const queriedTags = Object.keys(snapshot.val());
      dispatch(addTags({tags: queriedTags}));
    }, error => {
      setAlertProps({ open: true });
      console.error(error.message);
    });
  }, []);

  function handleTagClick() {

  }

  return (
    <div className={classes.root}>
      {alert}
      {tags.map(tag => (
        <Chip
          key={tag}
          label={tag}
          onClick={handleTagClick}
          color="secondary"
          className={classes.tag} />
      ))}
    </div>
  );
}

export default Tags;