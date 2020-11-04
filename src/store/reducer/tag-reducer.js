import * as actionTypes from '../actions/actionTypes';

const initialState = {
  tags: []
};

function tagReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.ADD_TAGS:
      const tags = [...state.tags];
      action.payload.tags.forEach(newTag => {
        if (!tags.includes(newTag)) {
          tags.push(newTag);
        }
      });
      return {
        ...state,
        tags: tags
      }
    default:
      return state;
  }
}

export default tagReducer;