import React, { useState } from 'react';
import { makeStyles, TextField, Chip } from '@material-ui/core';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(2, 0)
  },
  tagInput: {

  },
  tagsContainer: {
    margin: theme.spacing(2, 1)
  },
  tag: {
    margin: theme.spacing(0.5),
    color: theme.palette.common.white,
  },
  deleteIcon: {
    color: theme.palette.common.white,
    '&:hover': {
      color: theme.palette.common.white,
    }
  }
}));

function TagInput(props) {

  const classes = useStyles();

  const [tag, setTag] = useState('');

  function handleSeperationKeyPressed(e) {
    if (e.key === 'Enter') {
      e.preventDefault();
      props.onTagAdd(tag);
      setTag('');
    }
  }

  function handleInputChange(e) {
    setTag(e.target.value);
  }

  return (
    <div className={classes.root}>
      <TextField
        onKeyDown={handleSeperationKeyPressed}
        onChange={handleInputChange}
        className={classes.tagInput}
        placeholder="Tags"
        value={tag}
        />
      <div className={classes.tagsContainer}>
        {props.tags.map(tag => (
          <Chip
            key={tag}
            label={tag} 
            onDelete={() => props.onTagDelete(tag)}
            color="secondary"
            className={classes.tag}
            deleteIcon={<HighlightOffIcon className={classes.deleteIcon} />} />
        ))}
      </div>
    </div>
  )
}

export default TagInput;