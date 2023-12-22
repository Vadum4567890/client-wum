import React, { useEffect, useState } from "react";

import styles from "../../styles/Profile/Profile.module.css";
import { jwtDecode } from "jwt-decode";

import EDIT from "../../images/profile/edit.svg";
import USER from "../../images/profile/user.svg";
import ORDERS from "../../images/profile/orders.svg";
import LIKES from "../../images/profile/likes.svg";
import REVIEWED from "../../images/profile/reviewed.svg";
import NOTIFICATIONS from "../../images/profile/Notification.svg";
import LEAVE from "../../images/profile/logout.svg";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logOut } from "../../features/user/userSlice";
import ProfileMain from "./ProfileMain";
import ProfileOrders from "./ProfileOrders";
import ProfileLikes from "./ProfileLikes";

const Profile = () => {
  const [userData, setUserData] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
      const decoded = jwtDecode(localStorage.getItem('token')|| '');
      if(decoded){
        setUserData(decoded);
      }
     
  }, [setUserData]);  

  const { given_name, family_name, email } = userData || {};

  const handleLogout = () => {
    try {
      dispatch(logOut());
      navigate("/")
      window.location.reload();
    } catch (error) {
      console.error("Error during logout:", error);
      navigate("/")
    }
  };


  

  const [activeTab, setActiveTab] = useState('main');
  const handleTabChange = (tab) => () => {
    setActiveTab(tab);
  };


  return (
    <div className={styles.profile}>
      {userData ? (
        <div className={styles.main}>
          <div className={styles.profile__main}>
            <div onClick={handleTabChange("main")} className={styles.profile__user}>
              <div className={styles.profile__img}>
                <img src={USER} alt="user" />
              </div>
              <div className={styles.profile__info}>
                <p className={styles.profile__name}>{given_name} {family_name}</p>
                <p className={styles.profile__email}>{email}</p>
              </div>
              <div className={styles.profile__icon}>
                <img src={EDIT} alt="edit" />
              </div>
            </div>
            <div className={styles.hrmain}><hr/></div>
            <div className={styles.nav__bar}>
              <div onClick={handleTabChange("orders")} className={styles.nav__item}>
                  <div className={styles.item__icon}>
                    <img src={ORDERS} alt="orders" />
                  </div>
                  <div className={styles.item__title}>
                    <p>Мої замовлення</p>
                  </div>
              </div>
              <div onClick={handleTabChange("likes")} className={styles.nav__item}> 
                <div className={styles.item__icon}>
                  <img src={LIKES} alt="orders" />
                </div>
                <div className={styles.item__title}>
                  <p>Мої вподобані</p>
                </div></div>
              <div className={styles.nav__item}>
                  <div className={styles.item__icon}>
                    <img src={REVIEWED} alt="orders" />
                  </div>
                  <div className={styles.item__title}>
                    <p>Переглянуті товари</p>
                  </div>
                </div>
                <div className={styles.nav__item}> 
                  <div className={styles.item__icon}>
                    <img src={NOTIFICATIONS} alt="orders" />
                  </div>
                  <div className={styles.item__title}>
                    <p>Розсилки</p>
                  </div>
                </div>
                <div className={styles.nav__item}>
                  <div className={styles.item__icon}>
                    <img onClick={handleLogout} src={LEAVE} alt="orders" />
                  </div>
                  <div className={styles.item__title}>
                    <button onClick={handleLogout}><p>Вийти з акаунту</p></button>
                  </div>
              </div>
            </div>
          </div>
          <div className={styles.data__block}>
            {activeTab === 'main' && <ProfileMain />}
            {activeTab === 'orders' && <ProfileOrders />}
            {activeTab === 'likes' && <ProfileLikes />}
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Profile;
