import React, { useState } from 'react';

import { Route, Switch, useRouteMatch } from 'react-router-dom';

import IdeaForm from './IdeaForm';

function IdeaManager(props) {
  
  const [ideas, setIdeas] = useState([]);
  const match = useRouteMatch();

  return (
    <React.Fragment>
      <p>awhat</p>
      <Switch>
      </Switch>
    </React.Fragment>
  );
};

export default IdeaManager;