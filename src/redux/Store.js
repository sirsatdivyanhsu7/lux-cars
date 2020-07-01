/**
 * @author Rahul Rajput
 * @email rahul@studiographene.com
 * @create date 2020-04-16 13:14:44
 * @modify date 2020-04-17 16:16:29
 * @desc [One store to rule them all]
 */
import {createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import {persistStore, persistReducer} from 'redux-persist';
//import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import AsyncStorage from '@react-native-community/async-storage';

import reducers from './RootReducer';
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['dataReducer'],
  stateReconciler: autoMergeLevel2, // see "Merge Process" section for details.
};
const persistedReducer = persistReducer(persistConfig, reducers);
// Connect our store to the reducers

export default () => {
  let store = createStore(persistedReducer, applyMiddleware(logger));
  let persistor = persistStore(store);
  return {store, persistor};
};
