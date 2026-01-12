// src/app/store.ts
import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice';
import usersReducer from '../features/test/testSlice';
import cameraReducer from '../features/camera/cameraSlice';
export const store = configureStore({
  reducer: {
    auth: authReducer,
    users: usersReducer,
    camera: cameraReducer,
  },
  devTools: __DEV__, // enabled only in dev
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
