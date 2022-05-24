import { configureStore } from '@reduxjs/toolkit';
import accountReducer from './reducers/accountReducer';

const reducers = {
  account: accountReducer,
};

const store = configureStore(
  reducers,
);

export default store;
