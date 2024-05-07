/* eslint-disable @typescript-eslint/no-explicit-any */
import { IUser } from '../../types/user.types';
import styles from './styles.module.css';

interface UserCardProps {
    user: IUser;
}

function UserCard ({ user }: UserCardProps) {

    return (
        <div className={`${styles.container} `}>
            <div className={`${styles.containerCard} m-auto d-flex flex-column align-items-center justify-content-center`}>
                <h1 className={`${styles.title} text-center`}>Tu información de perfil</h1>
                <div className="w-100">
                    <h6 className={styles.label}>Nombres</h6>
                    <div className={styles.containerInput}>
                        <p className={`${styles.input} p-2 text-start border`}>{user.name}</p>
                    </div>
                </div>

                <div className="w-100">
                    <h6 className={styles.label}>Apellidos</h6>
                    <div>
                        <p className={`${styles.input} p-2 text-start border`}>{user.lastName}</p>
                    </div>
                </div>

                <div className="w-100">
                    <h6 className={styles.label}>Tipo de identificación</h6>
                    <div>
                        <p className={`${styles.input} p-2 text-start border`}>{user.typeDocumentId}</p>
                    </div>
                </div>

                <div className="w-100">
                    <h6 className={styles.label}>Identificación</h6>
                    <div>
                        <p className={`${styles.input} p-2 text-start border`}>{user.documentId}</p>
                    </div>
                </div>

                <div className="w-100">
                    <h6 className={styles.label}>Email</h6>
                        <p className={`${styles.input} p-2 text-start border`}>{user.email}</p>
                </div>
            </div>
        </div>
    );
}

export default UserCard;