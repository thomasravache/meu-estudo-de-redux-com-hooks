import { configureStore } from '@reduxjs/toolkit';
import accountReducer from './reducers/accountReducer';
import counterReducer from './reducers/counterReducer';

const reducers = {
  account: accountReducer,
  contador: counterReducer,
}

const store = configureStore({
  reducer: reducers,
});

export default store;
