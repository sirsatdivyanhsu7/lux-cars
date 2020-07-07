import {UPDATE_ID} from './actionTypes';
// Action function that gets envoked
export const updateID = data => dispatch => {
  dispatch({
    type: UPDATE_ID,
    payload: data,
  });
};
