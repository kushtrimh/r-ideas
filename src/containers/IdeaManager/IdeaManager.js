import React, { useState } from 'react';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import { Container, makeStyles } from '@material-ui/core';

import IdeaForm from '../../components/IdeaForm/IdeaForm';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: `2px solid ${theme.palette.primary.main}`,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3)
  },
  container: {
    marginTop: '100px'
  }
}));

function IdeaManager(props) {
  
  const classes = useStyles();
  // const [ideas, setIdeas] = useState([]);
  const [idea, setIdea] = useState({
    title: '',
    content: '',
    createdAt: null,
  });
  const [ideaErrors, setIdeaErrors] = useState({
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

  function handleIdeaSubmit() {
    
  }

  function updateIdeaValidationErrors(name, value) {
    const errors = {...ideaErrors};
    const message = validateIdea(name, value);
    errors[name] = {
      message: message
    }
    setIdeaErrors(errors);
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
    return Object.entries(ideaErrors).map(errorEntry => errorEntry[1].message)
      .every(message => message === null);
  }

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      className={classes.Modal}
      open={props.addIdeaModalStatus}
      onClose={props.closeModal}
      closeAfterTransition
      BackdropComponent={Backdrop}>
      <Container 
        maxWidth="sm"
        className={classes.container}>
        <div className={classes.paper}>
          <IdeaForm 
            idea={idea}
            errors={ideaErrors}
            changeAttribute={handleIdeaAttributeChange}
            submit={handleIdeaSubmit}
            submitEnabled={isValid()} />
        </div>
      </Container>
    </Modal>
  );
};

export default IdeaManager;