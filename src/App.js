import React from 'react';

import { ThemeProvider } from '@material-ui/core/styles';
import { BrowserRouter } from 'react-router-dom';

import Layout from './containers/Layout';

import theme from './themes/theme';

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <div className="App">
          <Layout>
          </Layout>
        </div>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
