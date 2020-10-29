import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Container } from '@material-ui/core';

import Alert from '../components/ui/Alert';
import Idea from '../components/ideas/Idea';
import { useDatabase } from '../config/firebase-config';
import { SET_IDEAS } from '../store/actions';

function Ideas() {

  const [loadError, setLoadError] = useState(false);

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
      dispatch({ type: SET_IDEAS, payload: { ideas: queriedIdeasList.reverse() } })
    }, error => {
      if (error) {
        setLoadError(true);
        console.error(error.message);
      }
    });
  }, []);

  const ideaComponents = ideas.map(idea => (
    <Idea key={idea.id} title={idea.title} content={idea.content}
      createdDate={idea.createdAt} />
  ));

  return (
    <Container>
      {loadError ? (
        <Alert type="error" onClose={() => setLoadError(false)}
          message="Could not load ideas, please try again later" open={loadError} />
      ) : null}
      <div>
        {ideaComponents}
      </div>
    </Container>
  );
};

export default Ideas;