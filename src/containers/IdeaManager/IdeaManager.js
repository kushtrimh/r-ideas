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

const IdeaManager = (props) => {

  const [ideas, setIdeas] = useState([]);

  const [idea, setIdea] = useState({
    title: '',
    content: '',
    createdAt: null,
  });

  const classes = useStyles();

  const handleIdeaAttributeChange = (e, attribute) => {
    setIdea({
      ...idea,
      [attribute]: e.target.value,
    })
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
            changeIdeaAttribute={handleIdeaAttributeChange} />
        </div>
      </Container>
    </Modal>
  );
};

export default IdeaManager;