import * as actionTypes from '../actions/actionTypes';

const initialState = {
  database: null
};

function firebaseReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.ADD_FIREBASE_DATABASE:
      return {
        ...state,
        database: action.payload.database
      }
    default:
      return state;
  }
}

export default firebaseReducer;