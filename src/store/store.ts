import {
  AnyAction,
  combineReducers,
  configureStore,
  Store,
} from '@reduxjs/toolkit';
import { otherAPI, titleAPI } from '../service';

const rootReducer = combineReducers({
  [otherAPI.reducerPath]: otherAPI.reducer,
  [titleAPI.reducerPath]: titleAPI.reducer,
});

export const setupStore = (): Store<unknown, AnyAction> => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware()
        .concat(otherAPI.middleware)
        .concat(titleAPI.middleware),
  });
};
