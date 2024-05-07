import { FieldErrors, UseFormRegister } from 'react-hook-form';
import { IUser } from "../../types/user.types";
import styles from './styles.module.css';

interface UserInfoSectionProps {
    register: UseFormRegister<IUser>;
    errors: FieldErrors<IUser>;
}

function UserInformation({ register, errors }: UserInfoSectionProps) {

    return (
        <div className="d-flex flex-column align-items-center justify-content-center">
            <h4 className={`${styles.tertiary__Title } m-0 text-center`}>Información personal</h4>

            <div className={`${styles.container__Inputs} d-flex align-items-center justify-content-center gap-3`}>
                <div className={`${styles.container__Inputs} d-flex flex-column align-items-start justify-content-start position-relative`}>
                    <h6 className={styles.label}>Nombres</h6>
                    <div className={styles.container__Input}>
                        <input
                            type="text"
                            {...register('name', { required: true })}
                            className={`${styles.input} p-2 mb-4 border rounded`}
                            placeholder='¿Cuáles son tus nombres?'
                        />
                        {errors.name && (
                            <p className={`${styles.text__Danger} text-danger position-absolute`}>Tus nombres son requeridos</p>
                        )}
                    </div>
                </div>

                <div className={`${styles.container__Inputs} d-flex flex-column align-items-start justify-content-start position-relative`}>
                    <h6 className={styles.label}>Apellidos</h6>
                    <div className={styles.container__Input}>
                        <input
                            type="text"
                            {...register('lastName', { required: true })}
                            className={`${styles.input} p-2 mb-4 border rounded`}
                            placeholder='¿Cuáles son tu apellidos?'
                        />
                        {errors.lastName && (
                            <p className={`${styles.text__Danger} text-danger position-absolute`}>Tus apellidos son requeridos</p>
                        )}
                    </div>
                </div>
            </div>

            <div className={`${styles.container__Inputs} d-flex align-items-center justify-content-center gap-3`}>
                <div className={`${styles.container__Inputs} d-flex flex-column align-items-start justify-content-start position-relative`}>
                    <h6 className={styles.label}>Tipo de identificación</h6>
                    <div className={styles.container__Input}>
                        <select
                            {...register('typeDocumentId', { required: true })}
                            className={`${styles.input} p-2 mb-4 border`}
                        >
                            <option value='Cédula de Ciudadanía'>Cédula de Ciudadanía</option>
                            <option value='Cédula de Extranjería'>Cédula de Extranjería</option>
                            <option value='Pasaporte'>Pasaporte</option>
                        </select>
                        {errors.typeDocumentId && (
                            <p className={`${styles.text__Danger} text-danger position-absolute`}>El tipo de documento del usuario es requerido</p>
                        )}
                    </div>
                </div>
                <div className={`${styles.container__Inputs} d-flex flex-column align-items-start justify-content-start position-relative`}>
                    <h6 className={styles.label}>Número de identificación</h6>
                    <div className={styles.container__Input}>
                        <input
                            type="number"
                            {...register('documentId', { 
                                required: true,
                                pattern: /^\d{1,10}$/ // Expresión regular para hasta 10 dígitos
                            })}
                            className={`${styles.input} p-2 mb-4 border rounded`}
                            placeholder='¿Cuál es tu número de identificación?'
                            min={0}
                            onKeyDown={(e) => {
                                if (e.key === '-' || e.key === 'e' || e.key === '+' || e.key === '.') {
                                    e.preventDefault();
                                }
                            }}
                        />
                        {errors.documentId && (
                            <p className={`${styles.text__Danger} text-danger position-absolute`}>El número de identidad es requerido</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UserInformation;