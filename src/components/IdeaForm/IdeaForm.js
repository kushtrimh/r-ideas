import React from 'react';

import { makeStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(1),
  },
  textField: {
    margin: theme.spacing(2, 0),
  }
}));

const IdeaForm = (props) => {

  const classes = useStyles();

  return (
    <form className={classes.root}>
      <TextField  
        required
        fullWidth
        placeholder="Title" 
        value={props.idea.title}
        className={classes.textField}
        onChange={(e) => props.changeIdeaAttribute(e, 'title')} />
      <TextField
        required
        fullWidth
        placeholder="Content"
        className={classes.textField}
        value={props.idea.content}
        multiline={true}
        rows={5}
        variant="outlined"
        onChange={(e) => props.changeIdeaAttribute(e, 'content')} />

      <Button 
        variant="contained" color="primary">
        Add Idea
      </Button>
    </form>
  );
};

export default IdeaForm;