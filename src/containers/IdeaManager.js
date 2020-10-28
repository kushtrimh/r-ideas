import { Container } from '@material-ui/core';
import React, { useState } from 'react';

import { useRouteMatch } from 'react-router-dom';

function IdeaManager(props) {
  
  const [ideas, setIdeas] = useState([]);
  const match = useRouteMatch();

  return (
    <Container>

    </Container>
  );
};

export default IdeaManager;