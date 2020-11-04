import * as actionTypes from './actionTypes';

export function addTags(payload) {
  return {
    type: actionTypes.ADD_TAGS,
    payload: payload
  };
}