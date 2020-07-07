import {createStore, combineReducers, applyMiddleware} from 'redux';
import userID from './reducer/UpdateIDReducer';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
  auth: userID,
});

const Store = () => {
  return createStore(rootReducer, applyMiddleware(thunk));
};

export default Store;
