import {UPDATE_ID} from './actionTypes';

export const updateID = data => dispatch => {
  dispatch({
    type: UPDATE_ID,
    payload: data,
  });
};
