import React, { useState } from 'react';

import { makeStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { useSelector, useDispatch } from 'react-redux';

import TagInput from '../components/tags/TagInput';
import { useAlert } from '../hooks/ui-hooks';
import { useDatabase } from '../config/firebase-config';
import { addTags } from '../store/actions/actions';

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

function IdeaForm() {

  const classes = useStyles();

  const database = useDatabase();

  const existingTags = useSelector(state => state.tag.tags);
  const dispatch = useDispatch();

  const [idea, setIdea] = useState({
    title: '',
    content: '',
    createdAt: null
  });
  const [tags, setTags] = useState([]);
  const [errors, setErrors] = useState({
    title: '',
    content: ''
  });
  const [alert, setAlertProps] = useAlert({});


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
    const ideaData = {
      ...idea,
      tags: tags,
      createdAt: Date.now()
    };

    const tagsData = {}
    existingTags.forEach(tag => tagsData[tag] = true);
    tags.forEach(tag => tagsData[tag] = true);

    var updates = {};
    updates[`ideas/${ideaKey}`] = ideaData;
    updates['tags/'] = tagsData;
    database.ref().update(updates, (error) => {
      if (error) {
        setAlertProps({
          open: true,
          type: 'error',
          message: `Could not add idea. ${error}`
        });
      } else {
        setAlertProps({
          open: true,
          type: 'success',
          message: 'Idea added successfully!'
        });
        setIdea({ title: '', content: '', createAt: null });
        setErrors({ title: '', content: '' });
        setTags([]);
        dispatch(addTags({tags: tags}));
      }
    });
  }

  function handleTagAdd(tag) {
    const existingTags = [...tags];
    if (!existingTags.includes(tag)) {
      existingTags.push(tag);
    }
    setTags(existingTags);
  }

  function handleTagDelete(tag) {
    const existingTags = tags.filter(existingTag => existingTag !== tag);
    setTags(existingTags);
  }

  function updateIdeaValidationErrors(name, value) {
    const ideaErrors = { ...errors };
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

  return (
    <React.Fragment>
      {alert}
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
          value={idea.content} rows={5}
          variant="outlined"
          onChange={handleIdeaAttributeChange} />
        <TagInput
          tags={tags}
          onTagAdd={handleTagAdd}
          onTagDelete={handleTagDelete} />
        <Button type="submit" variant="contained" color="primary"
          className={classes.button} disabled={!isValid()}>
          Add Idea
        </Button>
      </form>
    </React.Fragment>
  );
};

export default IdeaForm;