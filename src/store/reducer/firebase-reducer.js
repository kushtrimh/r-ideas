import * as actions from '../actions';

const initialState = {
  database: null
};

function firebaseReducer(state = initialState, action) {
  switch (action.type) {
    case actions.ADD_FIREBASE_DATABASE:
      return {
        ...state,
        database: action.payload.database
      }
    default:
      return state;
  }
}

export default firebaseReducer;