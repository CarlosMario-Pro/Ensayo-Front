/* eslint-disable @typescript-eslint/no-explicit-any, react-hooks/exhaustive-deps, @typescript-eslint/no-unused-vars */
// import { useEffect } from 'react';
// import Cookies from 'js-cookie';
// import { useAuth } from '../../context/AuthContext';
import ConfigurationRendering from '../../components/ConfigurationRendering';
import styles from './styles.module.css';

function ConfigurationPage() {
    // const token = Cookies.get("token");
    // const { profile, getProfile } = useAuth();

    // useEffect(() => {
    //     if (token && !profile) {
    //         getProfile(token);
    //     }
    // }, [ token, profile ]);


    return (
        <div className="d-flex w-100">
            <div className={`${styles.containerProfilePage} w-100 overflow-hidden overflow-y-auto`}>
                <ConfigurationRendering />
            </div>
        </div>
    );
      
}

export default ConfigurationPage;