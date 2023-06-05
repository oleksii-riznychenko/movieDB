import { configureStore, combineReducers } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import {
  PAUSE,
  FLUSH,
  PURGE,
  PERSIST,
  REGISTER,
  REHYDRATE,
  persistStore,
  persistReducer,
} from 'redux-persist';
import root from '../slices/rootSlice';
import apiKey from '../slices/apiKeySlice';
import { otherAPI, titleAPI } from '../service';

const rootReducer = combineReducers({
  root,
  apiKey,
  [otherAPI.reducerPath]: otherAPI.reducer,
  [titleAPI.reducerPath]: titleAPI.reducer,
});

export const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['root'],
  blacklist: [otherAPI.reducerPath, titleAPI.reducerPath],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    })
      .concat(otherAPI.middleware)
      .concat(titleAPI.middleware),
  devTools: true,
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
