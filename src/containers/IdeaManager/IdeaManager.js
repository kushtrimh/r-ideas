import React, { useState, useEffect, useRef } from 'react';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import { Container, makeStyles } from '@material-ui/core';

import axios from '../../config/axios';
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

const IdeaManager = (props) => {
  
  const classes = useStyles();
  
  const [ideas, setIdeas] = useState([]);

  const [idea, setIdea] = useState({
    title: '',
    content: '',
    createdAt: null,
  });

  const [ideaErrors, setIdeaErrors] = useState({
    title: {
      error: true,
      message: ''
    },
    content: {
      error: true,
      message: ''
    }
  });

  const formUsed = useRef(false);
  const [addButtonEnabled, setAddButtonEnabled] = useState(false);


  useEffect(() => {
    console.log('w');
    const isValid = formUsed.current ? Object.entries(ideaErrors).map(errorEntry => errorEntry[1].error)
      .every(value => !value) : false;
      formUsed.current = true;
    setAddButtonEnabled(isValid);
  }, [ideaErrors]);

  const handleIdeaAttributeChange = (e, attribute) => {
    const value = e.target.value;
    validateIdea(attribute, value);
    setIdea({
      ...idea,
      [attribute]: value,
    })
  }

  const handleIdeaSubmit = () => {
    
  }


  const validateIdea = (name, value) => {
    const errors = {...ideaErrors};
    switch (name) {
      case 'title':
        errors.title.error = true;
        if (value.length <= 0) {
          errors.title.message = 'Title is required';
        } else if (value.length > 250) {
          errors.title.message = 'Title should be less than 250 characters';
        } else {
          errors.title.error = false;
          errors.title.message = '';
        }
        break;
      case 'content':
        errors.content.error = true;
        if (value.length <= 0) {
          errors.content.message = 'Content is required';
        } else {
          errors.content.error = false;
          errors.content.message = '';
        }
        break;
      default:
        break;
    }
    setIdeaErrors(errors);
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
            changeIdeaAttribute={handleIdeaAttributeChange}
            submitIdea={handleIdeaSubmit}
            submitButtonEnabled={addButtonEnabled} />
        </div>
      </Container>
    </Modal>
  );
};

export default IdeaManager;