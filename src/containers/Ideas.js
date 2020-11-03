import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Container } from '@material-ui/core';

import Idea from '../components/ideas/Idea';
import { useAlert } from '../hooks/ui-hooks';
import { useDatabase } from '../config/firebase-config';
import { setIdeas } from '../store/actions/actions';

function Ideas() {

  const [alert, setAlertProps] = useAlert({
    type: 'error',
    message: 'Could not load ideas, please try again later'
  });

  const ideas = useSelector(state => state.idea.ideas);
  const dispatch = useDispatch();

  const database = useDatabase();

  useEffect(() => {
    database.ref('ideas/').once('value').then(snapshot => {
      const queriedIdeasSnapshot = snapshot.val();
      const queriedIdeasList = [];
      for (let ideaId in queriedIdeasSnapshot) {
        const idea = queriedIdeasSnapshot[ideaId];
        idea.id = ideaId;
        queriedIdeasList.push(idea);
      }
      dispatch(setIdeas({ ideas: queriedIdeasList.reverse() }));
    }, error => {
      if (error) {
        setAlertProps({ open: true });
        console.error(error.message);
      }
    });
  }, []);

  const ideaComponents = ideas.map(idea => (
    <Idea key={idea.id} title={idea.title} content={idea.content}
      createdDate={idea.createdAt} tags={idea.tags} />
  ));

  return (
    <Container>
      {alert}
      <div>
        {ideaComponents}
      </div>
    </Container>
  );
};

export default Ideas;