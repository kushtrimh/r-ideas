import React from 'react';

import Layout from './containers/Layout/Layout';
import IdeaManager from './containers/IdeaManager/IdeaManager';
import MainBoard from './components/MainBoard/MainBoard';

function App() {
  return (
    <div className="App">
      <Layout>
        <IdeaManager />
        <MainBoard />
      </Layout>
    </div>
  );
}

export default App;
