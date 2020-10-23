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
    <form className={classes.root} onSubmit={props.submitIdea}>
      <TextField  
        required
        fullWidth
        placeholder="Title"
        label={props.errors.title.message}
        value={props.idea.title}
        className={classes.textField}
        error={props.errors.title.error}
        onChange={(e) => props.changeIdeaAttribute(e, 'title')} />
      <TextField
        required
        fullWidth
        placeholder="Content"
        className={classes.textField}
        value={props.idea.content}
        multiline={true}
        label={props.errors.content.message}
        error={props.errors.content.error}
        rows={5}
        variant="outlined"
        onChange={(e) => props.changeIdeaAttribute(e, 'content')} />

      <Button 
        variant="contained" color="primary" disabled={!props.submitButtonEnabled}>
        Add Idea
      </Button>
    </form>
  );
};

export default IdeaForm;