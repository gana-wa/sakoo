import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import reducer from "./reducers";
import { createLogger } from 'redux-logger';
import rpm from 'redux-promise-middleware';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

const logger = createLogger();
const enhancers = applyMiddleware(rpm, logger);

const persistConfig = {
   key: 'root',
   storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, reducer);

export default () => {
   let store = createStore(reducer, enhancers); //global state local
   // let store = createStore(persistedReducer, enhancers); //persist storage
   let persistor = persistStore(store);
   return {
      store,
      persistor,
   };
};