/* eslint-disable @typescript-eslint/no-explicit-any, react-hooks/exhaustive-deps, @typescript-eslint/no-unused-vars */
import { useEffect } from 'react';
import Cookies from 'js-cookie';
import { useDispatch, useSelector } from 'react-redux';
import { profileUser } from '../redux/userSlice/actions';
import { RootState, AppDispatch } from '../redux/store';
import UserCard from './User/UserCard';
import styles from './styles.module.css';

function ConfigurationRendering() {
    const token = Cookies.get("token");
    const dispatch: AppDispatch = useDispatch();

    // Utiliza useSelector para obtener la información del usuario del estado de Redux
    const user = useSelector((state: RootState) => state.user.user);

    useEffect(() => {
        if (token) {
            dispatch(profileUser(token));
        }
    }, [token]);

    return (
        <div className="d-flex w-100">
            <div className={`${styles.containerBranchPage} m-auto`}>
                {/* Pasa la información del usuario como prop al componente UserCard */}
                {user && <UserCard user={user} />}
            </div>
        </div>
    );
}

export default ConfigurationRendering;