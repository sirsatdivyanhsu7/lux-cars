import {combineReducers} from 'redux';
import selectionReducer from './reducer/SelectionReducer';

const rootReducer = combineReducers({
  selectionReducer,
});
export default rootReducer;
