/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUser } from '../../types/user.types';

interface UserState {
    user: IUser | null;
    loading: boolean;
    error: string | null;
    registerErrors: string | null;
    isAuthenticated: boolean;
    loginErrors: string | null;
}

const initialState: UserState = {
    user: null,
    loading: false,
    error: null,
    registerErrors: null,
    isAuthenticated: false,
    loginErrors: null,
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        //SON LOS ESTADOS
        registerUserStart: (state) => {
            state.loading = true;
            state.error = null;
        },
        userData: (state, action: PayloadAction<IUser | null>) => {
            state.loading = false;
            state.user = action.payload;
            state.isAuthenticated = !!action.payload;
        },
        registerErrors: (state, action: PayloadAction<string>) => {
            state.loading = false;
            state.error = action.payload;
            state.isAuthenticated = false;
            state.registerErrors = action.payload;
        },
        isAuthenticatedStatus: (state, action: PayloadAction<boolean>) => {
            state.isAuthenticated = action.payload;
        },
        loginSuccess: (state, action: PayloadAction<IUser>) => {
            state.loading = false;
            state.user = action.payload;
            state.isAuthenticated = true;
        },
        loginErrors: (state, action: PayloadAction<string>) => {
            state.loading = false;
            state.error = action.payload;
            state.isAuthenticated = false;            
            state.loginErrors = action.payload;
        },
        profileSuccess: (state, action: PayloadAction<IUser>) => {
            state.loading = false;
            state.user = action.payload;
            state.isAuthenticated = true;
        },
        profileErrors: (state, action: PayloadAction<string>) => {
            state.loading = false;
            state.error = action.payload;
            state.isAuthenticated = false;            
            state.loginErrors = action.payload;
        },
    },
});

export const { registerUserStart, userData, registerErrors, isAuthenticatedStatus, loginSuccess, loginErrors, profileSuccess, profileErrors } = userSlice.actions;
export default userSlice.reducer;