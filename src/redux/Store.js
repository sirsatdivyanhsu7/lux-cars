import {createStore, combineReducers, applyMiddleware} from 'redux';
import userID from './reducer/UpdateIDReducer';
import thunk from 'redux-thunk';

// comining all the reducers
const rootReducer = combineReducers({
  auth: userID,
});

const Store = () => {
  return createStore(rootReducer, applyMiddleware(thunk));
};

export default Store;
