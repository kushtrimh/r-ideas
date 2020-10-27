import React, { useState } from 'react';

import { Route, Switch, useRouteMatch } from 'react-router-dom';

import IdeaForm from './IdeaForm';

function IdeaManager(props) {
  
  const [ideas, setIdeas] = useState([]);
  const match = useRouteMatch();

  return (
    <Switch>
      <Route path={`${match.url}/add`} component={IdeaForm} />
    </Switch>
  );
};

export default IdeaManager;