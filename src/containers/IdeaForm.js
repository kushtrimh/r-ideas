import React, { useState } from 'react';

import { IconButton, makeStyles, Snackbar, SnackbarContent } from '@material-ui/core';
import { Close } from '@material-ui/icons';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import { database } from '../config/firebase-config';

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
  },
  alertError: {
    backgroundColor: theme.palette.warning.main
  },
  alertSuccess: {
    backgroundColor: theme.palette.success.main
  },
  closeIcon: {
    color: theme.palette.common.white
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
    title: '',
    content: ''
  });
  const [alert, setAlert] = useState(null);

  function handleAlertClose() {
    setAlert(null);
  }

  function handleIdeaAttributeChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    updateIdeaValidationErrors(name, value);
    setIdea({
      ...idea,
      [name]: value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    const ideaKey = database.ref('ideas').push().key;
    database.ref(`ideas/${ideaKey}`).set({
      ...idea,
      createdAt: Date.now()
    }, (error) => {
      let responseAlert = {}
      if (error) {
        responseAlert = {
          className: classes.alertError,
          message: `Could not add idea. ${error}`
        }
      } else {
        responseAlert = {
          className: classes.alertSuccess,
          message: 'Idea added successfully!'
        }
        setIdea({ title: '', content: '', createAt: null });
        setErrors({ title: '', content: '' });
      }
      setAlert(responseAlert);
    });
  }

  function updateIdeaValidationErrors(name, value) {
    const ideaErrors = {...errors};
    const message = validateIdea(name, value);
    ideaErrors[name] = message;
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
      .map(errorEntry => errorEntry[1])
      .every(message => message === null);
  }

  let alertComponent = null;
  if (alert) {
    alertComponent = (
      <Snackbar
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'center'
        }}
        className={alert.className}
        open
        variant="filled"
        autoHideDuration={6500}
        message={alert.message}>
        <SnackbarContent
          className={alert.className}
          message={alert.message}
          action={
            <IconButton 
              size="small" 
              onClick={handleAlertClose}
              className={classes.closeIcon}>
              <Close fontSize="small" />
            </IconButton>
          }>
        </SnackbarContent>
      </Snackbar>
    );
  }

  return (
    <React.Fragment>
      {alertComponent}
      <form className={classes.root} onSubmit={handleSubmit}>
        <TextField 
          name="title"
          required
          placeholder="Title"
          label={errors.title}
          error={Boolean(errors.title)}
          value={idea.title}
          className={classes.textField}
          onChange={handleIdeaAttributeChange} />
        <TextField
          name="content"
          required
          placeholder="Content"
          className={classes.textField}
          multiline={true}
          label={errors.content}
          error={Boolean(errors.content)}
          value={idea.content}
          rows={5}
          variant="outlined"
          onChange={handleIdeaAttributeChange} />
        <Button 
          type="submit"
          variant="contained" 
          color="primary"
          className={classes.button}
          disabled={!isValid()}>
          Add Idea
        </Button>
      </form>
    </React.Fragment>
  );
};

export default IdeaForm;