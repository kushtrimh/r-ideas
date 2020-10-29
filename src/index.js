import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

import App from './App';
import tagReducer from './store/reducer/tag-reducer';
import ideaReducer from './store/reducer/idea-reducer';
import firebaseReducer from './store/reducer/firebase-reducer';
import * as serviceWorker from './serviceWorker';

const rootReducer = combineReducers({
  tag: tagReducer,
  idea: ideaReducer,
  firebase: firebaseReducer
});

const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
