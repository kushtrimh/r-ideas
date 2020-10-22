import React from 'react';

import { ThemeProvider } from '@material-ui/core/styles';

import Layout from './containers/Layout/Layout';

import theme from './themes/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Layout>
        </Layout>
      </div>
    </ThemeProvider>
  );
}

export default App;
