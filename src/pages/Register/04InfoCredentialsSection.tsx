import { useState } from 'react';
import { FieldErrors, UseFormRegister } from 'react-hook-form';
import { IUser } from "../../types/user.types";
import { RiEyeFill, RiEyeOffFill } from 'react-icons/ri';
import styles from './styles.module.css';

interface InfoCredentialsSectionProps {
    register: UseFormRegister<IUser>;
    errors: FieldErrors<IUser>;
}

function UserCredentials({ register, errors }: InfoCredentialsSectionProps) {
    const [acceptedPolicy, setAcceptedPolicy] = useState(false);

    const [showPassword, setShowPassword] = useState(false);
    const toggleShowPassword = () => {
        setShowPassword((prevState) => !prevState);
    };

    return (
        <div className="d-flex flex-column align-items-center justify-content-center">
            <h4 className={`${styles.tertiary__Title } m-0 text-center`}>Credenciales de acceso</h4>
            <div className={`${styles.container__Inputs} d-flex align-items-center justify-content-center gap-3`}>
                <div className={`${styles.container__Inputs} d-flex flex-column align-items-start justify-content-start position-relative`}>
                <h6 className={styles.label}>Email</h6>
                    <div className={styles.container__Input}>
                        <input
                            type="email"
                            {...register('email', { required: true })}
                            className={`${styles.input} p-2 mb-4 border rounded`}
                            placeholder='¿Cuál es tu email?'
                        />
                        {errors.email && (
                            <p className={`${styles.text__Danger} text-danger position-absolute`}>El email del usuario es requerido</p>
                        )}
                    </div>
                </div>

                <div className={`${styles.container__Inputs} d-flex flex-column align-items-start justify-content-start position-relative`}>
                    <h6 className={styles.label}>Contraseña</h6>
                    <div className={styles.container__Input}>
                        <input
                            type={showPassword ? "text" : "password"}
                            {...register('password', { required: true })}
                            className={`${styles.input} p-2 mb-4 border rounded`}
                            placeholder='¿Cuál es tu contraseña?'
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
            </div>

            <div className={`${styles.container__Accepted_Policy} d-flex align-items-center justify-content-center position-relative`}>
                <input
                    type="checkbox"
                    {...register('isAceptedConditions', { required: true })}
                    checked={acceptedPolicy}
                    onChange={() => setAcceptedPolicy(!acceptedPolicy)}
                    className={`${styles.checkbox} `}
                />
                {errors.isAceptedConditions && (
                    <p className={`${styles.text__Danger_AcceptedPolicy} text-danger position-absolute`}>Debes de aceptar términos y condiciones</p>
                )}
            </div>
        </div>
    );
}

export default UserCredentials;