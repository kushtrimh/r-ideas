import * as actions from '../actions';

const initialState = {
  ideas: []
};

function ideaReducer(state = initialState, action) {
  switch (action.type) {
    case actions.SET_IDEAS:
      return {
        ...state,
        ideas: action.payload.ideas
      };
    default:
      return state;
  }
}

export default ideaReducer;