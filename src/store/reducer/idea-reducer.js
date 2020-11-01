import * as actionTypes from '../actions/actionTypes';

const initialState = {
  ideas: []
};

function ideaReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.SET_IDEAS:
      return {
        ...state,
        ideas: action.payload.ideas
      };
    default:
      return state;
  }
}

export default ideaReducer;