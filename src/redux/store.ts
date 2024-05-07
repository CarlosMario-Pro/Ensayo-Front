import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice/userSlice';

// Define RootState
export type RootState = ReturnType<typeof store.getState>;

export const store = configureStore({
    reducer: {
        user: userReducer,
    },
});

export type AppDispatch = typeof store.dispatch;