import firebase from 'firebase/app';

import 'firebase/auth';
import 'firebase/database';

const { REACT_APP_FRB_API_KEY, REACT_APP_FRB_AUTH_DOMAIN,
  REACT_APP_FRB_DB_URL, REACT_APP_FRB_PROJECT_ID,
  REACT_APP_FRB_STORAGE_BUCKET, REACT_APP_FRB_MSG_SENDER_ID,
  REACT_APP_FRB_APP_ID, REACT_APP_MEASUREMENT_ID } = process.env;

const firebaseConfig = {
  apiKey: REACT_APP_FRB_API_KEY,
  authDomain: REACT_APP_FRB_AUTH_DOMAIN,
  databaseURL: REACT_APP_FRB_DB_URL,
  projectId: REACT_APP_FRB_PROJECT_ID,
  storageBucket: REACT_APP_FRB_STORAGE_BUCKET,
  messagingSenderId: REACT_APP_FRB_MSG_SENDER_ID,
  appId: REACT_APP_FRB_APP_ID,
  measurementId: REACT_APP_MEASUREMENT_ID
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();

export default firebase;
export { database };