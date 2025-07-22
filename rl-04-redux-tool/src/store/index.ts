import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './slices/counterSlice';
import todoReducer from './slices/todoSlice';
import logger from './middleware/logger';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    todos: todoReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST'],
      },
    }).concat(logger),
  devTools: import.meta.env.DEV,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
