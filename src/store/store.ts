import {
  AnyAction,
  combineReducers,
  configureStore,
  Store,
} from '@reduxjs/toolkit';
import { otherAPI } from '../service';

const rootReducer = combineReducers({
  [otherAPI.reducerPath]: otherAPI.reducer,
});

export const setupStore = (): Store<unknown, AnyAction> => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(otherAPI.middleware),
  });
};
