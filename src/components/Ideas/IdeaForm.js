import React, { useState } from 'react';

import { FormControl, makeStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: `${theme.spacing(1)}px auto`,
    width: '550px',
    display: 'block',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    }
  },
  textField: {
    margin: theme.spacing(2, 0),
    width: '550px',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    }
  },
  button: {
    width: 'max-content'
  }
}));

function IdeaForm(props) {

  const classes = useStyles();

  const [idea, setIdea] = useState({
    title: '',
    content: '',
    createdAt: null,
  });
  const [errors, setErrors] = useState({
    title: {
      message: ''
    },
    content: {
      message: ''
    }
  });

  function handleIdeaAttributeChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    updateIdeaValidationErrors(name, value);
    setIdea({
      ...idea,
      [name]: value,
    })
  }

  function handleSubmit() {
    
  }

  function updateIdeaValidationErrors(name, value) {
    const ideaErrors = {...errors};
    const message = validateIdea(name, value);
    ideaErrors[name] = {
      message: message
    }
    setErrors(ideaErrors);
  }

  function validateIdea(name, value) {
    let error = null;
    switch (name) {
      case 'title':
        if (value.length <= 0) {
          error = 'Title is required';
        } else if (value.length > 250) {
          error = 'Title should be less than 250 characters';
        }
        break;
      case 'content':
        if (value.length <= 0) {
          error = 'Content is required';
        }
        break;
      default:
    }
    return error;
  }

  function isValid() {
    return Object.entries(errors)
      .map(errorEntry => errorEntry[1].message)
      .every(message => message === null);
  }

  return (
    <form className={classes.root} onSubmit={handleSubmit}>
      <TextField 
        name="title"
        required
        placeholder="Title"
        label={errors.title.message}
        error={Boolean(errors.title.message)}
        value={idea.title}
        className={classes.textField}
        onChange={handleIdeaAttributeChange} />
      <TextField
        name="content"
        required
        placeholder="Content"
        className={classes.textField}
        multiline={true}
        label={errors.content.message}
        error={Boolean(errors.content.message)}
        value={idea.content}
        rows={5}
        variant="outlined"
        onChange={handleIdeaAttributeChange} />
      <Button 
        variant="contained" 
        color="primary"
        className={classes.button}
        disabled={!isValid()}>
        Add Idea
      </Button>
    </form>
  );
};

export default IdeaForm;