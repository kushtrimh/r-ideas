import * as actionTypes from './actionTypes';

export function addFirebaseDatabase(payload) {
  return {
    type: actionTypes.ADD_FIREBASE_DATABASE,
    payload: payload
  }
}