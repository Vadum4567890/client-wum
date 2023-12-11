import React, { useState } from 'react'
import ProfileMainLogin from './ProfileMainLogin';
import ProfileMainPersonal from './ProfileMainPersonal';

import styles from '../../styles/Profile/ProfileMain.module.css'

const ProfileMain = () => {
    const [activeTab, setActiveTab] = useState('personal_data');
    const handleTabChange = (tab) => () => {
        setActiveTab(tab);
    };
  return (
    <div className={styles.container}>
        <div className={styles.head}>
            <div
            className={`${styles.tab} ${activeTab === 'personal_data' && styles.activeTab}`}
            onClick={handleTabChange("personal_data")}>
                <p>Персональні дані</p>
            </div>
            <div
            className={`${styles.tab} ${activeTab === 'login_password' && styles.activeTab}`}
            onClick={handleTabChange("login_password")}>
                <p>Логін та пароль</p>
            </div>
        </div>
        <div className={styles.line}><hr /></div>
        <div className={styles.info}>
            {activeTab === 'login_password' && <ProfileMainLogin />}
            {activeTab === 'personal_data' && <ProfileMainPersonal />}
        </div>
    </div>
  )
}

export default ProfileMain