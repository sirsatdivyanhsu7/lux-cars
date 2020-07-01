/**
 * @author Shruti
 * @email shruti@studiographene.com
 * @create date 2020-04-30 15:32:16
 * @modify date 2020-04-30 15:32:16
 * @desc [description]
 */

import {MESSAGE_POPUP, LOGOUT} from '../Actions';

const messageState = {
  _showMessagePopUp: false,
  _heading: 'Message Heading',
  _message: 'GoLeaern custom message',
  // _link: false,
  // _forceUpdate: false,
};

const messageReducer = (state = messageState, action) => {
  switch (action.type) {
    case MESSAGE_POPUP: {
      const newState1 = Object.assign({}, state, {
        _showMessagePopup: action.data.visibility,
        _heading: action.data.heading,
        _message: action.data.message,
        // _link: action.data.link,
        // _forceUpdate: action.data.forceUpdate,
      });
      return newState1;
    }
    case LOGOUT: {
      const newState = Object.assign({}, state, {...messageState});
      return newState;
    }
    default:
      return state;
  }
};

export default messageReducer;
