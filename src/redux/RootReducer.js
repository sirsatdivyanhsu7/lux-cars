/**
 * @author Rahul Rajput
 * @email rahul@studiographene.com
 * @create date 2020-04-16 13:14:25
 * @modify date 2020-04-16 13:14:25
 * @desc [All the combined reducers]
 */
import {combineReducers} from 'redux';

import dataReducer from './reducer/Reducers';
import messageReducer from './reducer/MessageReducer';

const rootReducer = combineReducers({
  dataReducer,
  messageReducer,
});
export default rootReducer;
