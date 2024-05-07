/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useForm, SubmitHandler } from 'react-hook-form';
//REDUX
import { useDispatch, useSelector } from 'react-redux';
import type { RootState, AppDispatch } from '../../redux/store';
import { registerUser } from '../../redux/userSlice/actions';
//ELEMENTOS DE COMPONENTE
import { IUser } from "../../types/user.types";
import UserInformation from './01UserInfoSection';
import UserCredentials from './04InfoCredentialsSection';
import { PiWarningCircle } from 'react-icons/pi';
import styles from './styles.module.css';

enum RegistrationStep {
    UserInformation,
    UserCredentials,
}

function RegisterPage() {
    const navigate = useNavigate();
    const dispatch: AppDispatch = useDispatch();
    const isAuthenticated = useSelector((state: RootState) => state.user.isAuthenticated);
    const registerErrors = useSelector((state: RootState) => state.user.registerErrors);

    const [currentStep, setCurrentStep] = useState(RegistrationStep.UserInformation);
    const {register, formState: { errors }, handleSubmit} = useForm<IUser>();


    useEffect(() => {
        if (isAuthenticated) navigate("/configuration");
    }, [ isAuthenticated ]);

    const onSubmit: SubmitHandler<IUser> = async (values) => {
        const registerData = {
            ...values,
        } as IUser;
        switch (currentStep) {
            case RegistrationStep.UserInformation:
                break;
            case RegistrationStep.UserCredentials:
                dispatch(registerUser(registerData));
                break;
            default:
                break;
        }
        if (currentStep !== RegistrationStep.UserCredentials) setCurrentStep(currentStep + 1);
    };

    const handleBack = () => {
        if (currentStep !== RegistrationStep.UserInformation) setCurrentStep(currentStep - 1);
    };

    return (
        <div className="d-flex align-items-center justify-content-center">
            <div className={`${styles.container} d-flex align-items-center justify-content-center vh-100`}>
                <div className={`${styles.container__RegisterPage} d-flex flex-column align-items-center justify-content-center`}>
                    <div className='position-relative'>
                        {registerErrors && (
                            <div className={`${styles.errors__Register} p-2 text-center position-absolute w-100`}>
                                <p className='m-0'><PiWarningCircle /> {registerErrors}</p>
                            </div>
                        )}
                        <h1 className={`${styles.subtitle} text-center`}>Registro de usuarios</h1>
                        <form onSubmit={handleSubmit(onSubmit)} >
                            {currentStep === RegistrationStep.UserInformation && (
                                <UserInformation
                                    register={register}
                                    errors={errors}
                                />
                            )}
                            {currentStep === RegistrationStep.UserCredentials && (
                                <UserCredentials
                                    register={register}
                                    errors={errors}
                                />
                            )}

                            <div className="d-flex align-items-center justify-content-center gap-4">
                                {currentStep !== RegistrationStep.UserInformation && (
                                    <button
                                        type="button"
                                        onClick={handleBack}
                                        className={`${styles.button__Back} mb-2 border-0 rounded text-decoration-none`}
                                    >
                                        Atrás
                                    </button>
                                )}
                                <div className="d-flex mb-2">
                                    <button
                                        type='submit'
                                        className={`${styles.button__Submit} border-0 rounded text-decoration-none`}
                                    >
                                        {currentStep === RegistrationStep.UserCredentials ? 'Enviar' : 'Siguiente'}
                                    </button>
                                </div>
                            </div>
                        </form>

                        <p className='m-0 text-center'>
                            ¿Ya tienes una cuenta? <Link to="/login" className={`${styles.link} text-decoration-none text-sky-500`}>Sign In</Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RegisterPage;