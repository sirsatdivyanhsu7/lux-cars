import {UPDATE_ID} from '../actionTypes';

const initailState = {
  userID: '',
};
// userID will will be updated to store
const userID = (state = initailState, action) => {
  switch (action.type) {
    case UPDATE_ID:
      return {
        ...state,
        userID: action.payload,
      };
    default:
      return state;
  }
};

export default userID;
