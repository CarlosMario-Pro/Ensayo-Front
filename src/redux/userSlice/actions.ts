/* eslint-disable @typescript-eslint/no-explicit-any */
import Cookies from "js-cookie";
import { AppDispatch } from '../store';
import axiosInstance from '../../api/axios';
import { IUser } from '../../types/user.types';
import { registerUserStart, userData, registerErrors, loginSuccess, loginErrors, isAuthenticatedStatus, profileSuccess, profileErrors } from './userSlice';

//REGISTRO DE USUARIOS
export const registerUser = (registerData: IUser) => async (dispatch: AppDispatch) => {
    try {
        dispatch(registerUserStart());
        const response = await axiosInstance.post('/auth/register', registerData);
        dispatch(userData(response.data));
    } catch (error: any) {
        if (error.response && error.response.status === 500) {
            dispatch(registerErrors(error.response?.data.message));
        } else {
            dispatch(registerErrors(error.message));
        }
    }
};

//VERIFICA EL TOKEN CADA QUE ENTRE A UNA RUTA PROTEGIDA
export const verifyTokenRequest = (token: string) => {
    return axiosInstance.get(`/auth/verify-token`, {
        headers: { Authorization: `Bearer ${token}` },
    });
};

//LOGIN DE USUARIOS
export const loginUser = (loginData: { email: string; password: string }) => async (dispatch: AppDispatch) => {
    try {
        const response = await axiosInstance.post('/auth/login', loginData);
        dispatch(loginSuccess(response.data));
    } catch (error: any) {
        if (error.response && error.response.status === 401) {
            dispatch(loginErrors(error.response?.data.message));
        } else {
            dispatch(loginErrors(error.message));
        }
    }
};


//PERFIL DE USUARIO
export const profileUser = (token: string) => async (dispatch: AppDispatch) => {
    try {
        const response = await axiosInstance.get('/auth/profile', {
            headers: { Authorization: `Bearer ${token}` }
        });
        dispatch(profileSuccess(response.data));
    } catch (error: any) {
        if (error.response && error.response.status === 401) {
            dispatch(profileErrors(error.response?.data.message));
        } else {
            dispatch(profileErrors(error.message));
        }
    }
};

//LOGOUT DE USUARIOS                        
export const logoutUser = () => (dispatch: AppDispatch) => {
    Cookies.remove('token');
    dispatch(isAuthenticatedStatus(false));
    dispatch(userData(null));
    window.location.href = "/login";
};