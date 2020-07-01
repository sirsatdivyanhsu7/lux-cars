/**
 * @author Rahul Rajput
 * @email rahul@studiographene.com
 * @create date 2020-04-16 13:14:05
 * @modify date 2020-04-30 11:40:01
 * @desc [Reduce them all]
 */
/* eslint-disable prettier/prettier */
import {DISPLAY_LOADER, DISPLAY_USER} from '../Actions';

  const initialState = {
    _showLoader: false,
    _userData: [],
  };
  const dataReducer = (state = initialState, action) => {

    switch (action.type) {
      case DISPLAY_LOADER: {
        const newState = Object.assign({}, state, { _showLoader: action.data });
        return newState;
      }
      case DISPLAY_USER: {
        const newState = Object.assign({}, state, { _userData: action.data });
        return newState;
      }
      default:
        return state;
    }
};

export default dataReducer;
