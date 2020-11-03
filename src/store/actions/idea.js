import * as actionTypes from './actionTypes';

export function setIdeas(payload) {
  return {
    type: actionTypes.SET_IDEAS,
    payload: payload
  }
}