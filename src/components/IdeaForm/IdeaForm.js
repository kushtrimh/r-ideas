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

function IdeaForm(props) {

  const classes = useStyles();

  return (
    <form className={classes.root} onSubmit={props.submit}>
      <TextField 
        name="title"
        required
        fullWidth
        placeholder="Title"
        label={props.errors.title.message}
        error={Boolean(props.errors.title.message)}
        value={props.idea.title}
        className={classes.textField}
        onChange={props.changeAttribute} />
      <TextField
        name="content"
        required
        fullWidth
        placeholder="Content"
        className={classes.textField}
        multiline={true}
        label={props.errors.content.message}
        error={Boolean(props.errors.content.message)}
        value={props.idea.content}
        rows={5}
        variant="outlined"
        onChange={props.changeAttribute} />
      <Button 
        variant="contained" color="primary" disabled={!props.submitEnabled}>
        Add Idea
      </Button>
    </form>
  );
};

export default IdeaForm;