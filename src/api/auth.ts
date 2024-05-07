/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "./axios";
import { IUser } from "../types/user.types";
import { IUserLogin } from "../types/userLogin.types";

//^USER
//REGISTRO DE UN USER
export const registerUserRequest = (userData: IUser) => axios.post('/auth/register', userData);

//LOGIN PARA USER
export const loginRequestUser = (userDataLogin: IUserLogin) => {
    return axios.post(`/auth/login`, userDataLogin);
};

//VERIFICAR EL TOKEN DE AUTENTICACION DE USER PARA NAVEGACION DE RUTAS PROTEGIDAS DE LA PLATAFORMA
export const verifyUserTokenRequest = (token: string) => axios.get('/auth/verifyUserToken', {
    headers: { Authorization: `Bearer ${token}` },
});

//INFORMACION DE PERFIL DE USER Y COMPANY
export const getProfileRequest = (token: string) => axios.get('/auth/profile', {
    headers: { Authorization: `Bearer ${token}` },
})