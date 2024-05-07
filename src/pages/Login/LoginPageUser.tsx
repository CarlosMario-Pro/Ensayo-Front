/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
//REDUX
import { useDispatch, useSelector } from 'react-redux';
import type { RootState, AppDispatch } from '../../redux/store';
import { loginUser } from '../../redux/userSlice/actions';
//ELEMENTOS DEL COMPONENTE
import { IUserLogin } from '../../types/userLogin.types';
import { RiEyeFill, RiEyeOffFill } from 'react-icons/ri';
import { PiWarningCircle } from 'react-icons/pi';
import styles from './styles.module.css';

function LoginPage() {
    const navigate = useNavigate();
    const dispatch: AppDispatch = useDispatch();
    const isAuthenticated = useSelector((state: RootState) => state.user.isAuthenticated);
    const loginErrors = useSelector((state: RootState) => state.user.loginErrors);

    const { register, formState: { errors }, handleSubmit } = useForm<IUserLogin>();

    const [showPassword, setShowPassword] = useState(false);
    const toggleShowPassword = () => {
        setShowPassword((prevState) => !prevState);
    };

    const onSubmit = async (loginData: IUserLogin) => {
        try {
            dispatch(loginUser(loginData));
        } catch (error) {
            throw new Error('Error al iniciar sesión');
        }
    };

    useEffect(() => {
        if (isAuthenticated) navigate("/configuration");
    }, [ isAuthenticated ]);

    return (
        <div className="d-flex align-items-center justify-content-center">
            <div className={`${styles.container} d-flex align-items-center justify-content-center vh-100`}>
                <div className={`${styles.container__Login} d-flex flex-column align-items-center justify-content-center`}>                    
                    <div className='position-relative'>
                        {loginErrors && (
                            <div className={`${styles.errors__Login} p-2 text-center position-absolute w-100`}>
                                <p className='m-0'><PiWarningCircle /> {loginErrors}</p>
                            </div>
                        )}
                        <h1 className={styles.subtitle}>Login de usuarios</h1>
                        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
                            <div className='mb-2 d-flex align-items-center justify-content-center position-relative'>
                                <input
                                    type="email"
                                    {...register('email', { required: true })}
                                    className={`${styles.input} p-2 mb-3 border rounded`}
                                    placeholder='Email del usuario'
                                />
                                {errors.email && (
                                    <p className={`${styles.text__Danger} text-danger position-absolute`}>El email del usuario es requerido</p>
                                )}
                            </div>

                            <div className='mb-2'>
                                <div className="rounded d-flex align-items-center justify-content-center position-relative">
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        {...register('password', { required: true })}
                                        className={`${styles.input} p-2 mb-3 border rounded`}
                                        placeholder='Contraseña'
                                    />
                                    {showPassword ? (
                                        <RiEyeOffFill className={`${styles.icon} position-absolute`} onClick={toggleShowPassword} />
                                    ) : (
                                        <RiEyeFill className={`${styles.icon} position-absolute`} onClick={toggleShowPassword} />
                                    )}
                                    {errors.password && (
                                        <p className={`${styles.text__Danger} text-danger position-absolute`}>La contraseña es requerida</p>
                                    )}
                                </div>
                            </div>
                            
                            <div className="d-flex mb-4">
                                <button 
                                    className={`${styles.button__Submit} border-0 rounded m-auto text-decoration-none`}
                                    type='submit'
                                >
                                    Login
                                </button>
                            </div>  
                        </form>

                        <p className='m-0 text-center'>¿No tienes cuenta? <Link to="/register" className={`${styles.link} text-sky-500 text-decoration-none`}>Regístrate acá</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;