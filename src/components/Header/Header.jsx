import React, { useState } from 'react';
import styles from '../../styles/Header.module.css';

import { Link, redirect, useNavigate } from 'react-router-dom';

import { ROUTES } from '../../utils/routes';

import LOGO from '../../images/MainLogo.svg';
import ARROWUP from '../../images/header/Arrow Up.svg';
import SEARCH from '../../images/search.svg';
import SHOPPINGCART from '../../images/header/ShoppingCart2.svg';
import HEART from '../../images/header/Heart.svg';
import ACCOUNT from '../../images/header/User.svg';
import LOCATION from '../../images/header/Location.svg';
import { useDispatch, useSelector } from 'react-redux';
import { logOut, toggleForm } from '../../features/user/userSlice';
import UserForm from '../User/UserForm';
import { useTranslation } from 'react-i18next';
import i18n from 'i18next';
const Header = () => {
    const { t } = useTranslation();
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const { currentUser } = useSelector(({user})=> user);
    const handleClick = () => {
        if (!currentUser) dispatch(toggleForm(true));
    }

    const [selectedLanguage, setSelectedLanguage] = useState(i18n.language);

    const handleLanguageChange = (language) => {
      i18n.changeLanguage(language);
      setSelectedLanguage(language);
    };

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

  return (
    <>
    <div className={styles.header}>
        <div className={styles.headercontent}>
            <div className={styles.LOGO}>
                <Link to={ROUTES.HOME}> 
                    <img src={LOGO} alt="WUM" />
                </Link>
            </div>
            <div className={styles.chooselocation}>
                <div className={styles.city}>
                    <img src={LOCATION} alt="locationimg" />
                    <form>
                        <select>
                        <option value="lviv">{t('header.city.lviv')}</option>
                        <option value="kyiv">{t('header.city.kyiv')}</option>
                        <option value="kharkiv">{t('header.city.kharkiv')}</option>
                        </select>
                    </form>
                </div>
            </div>
            <div>
               <form className={styles.form}>
                    <div className={styles.input}>
                        <input 
                            placeholder={t('header.placeholder')}
                            type="search" 
                            name="search" 
                            autoComplete="off"
                            onChange={()=> {}}
                        />
                        </div>
                        <div className={styles.icon}>
                    <img src={SEARCH} alt="searchbtn"/>
                </div>
                    </form>
                
            </div>
            <div className={styles.language}>
                <Link to={ROUTES.EN}>
                    <button onClick={() => handleLanguageChange('en')}
                    style={{ color: selectedLanguage === 'ua' ? 'black' : '#F34A25' }}>{t('header.en')
                    }</button>
                </Link>
                <p>|</p>
                <Link to={ROUTES.UA}>
                    <button onClick={() => handleLanguageChange('ua')}
                    style={{ color: selectedLanguage === 'ua' ? '#F34A25' : 'black' }}>{t('header.ua')}</button>
                </Link>
            </div>
            <div className={styles.account}>
            {
                localStorage.getItem('token') !== null ? (
                    <Link to={ROUTES.PROFILE} className={styles.accounticon}>
                        <img src={ACCOUNT} alt="account" />
                    </Link>
                ) : (
                    <Link className={styles.accounticon} onClick={handleClick}>
                        <img src={ACCOUNT} alt="account" />
                    </Link>
                )
            }
                <Link to={ROUTES.LIKES} className={styles.cart}>
                    <img src={HEART} alt="heart" />
                </Link>
                <Link to={ROUTES.CART} className={styles.cart}>
                    <img src={SHOPPINGCART} alt="shopping cart"/>
                    <span className={styles.count}>2</span>
                </Link>
                 {
                    localStorage.getItem('token') !== null ? (
                        <button style={{ color: 'red' }} onClick={handleLogout}>
                        {t('header.city.logout')}
                        </button>
                    ) : (
                        <></>
                    )
                }
            </div>
        </div>
    </div>
    <UserForm/>
 </>
  )
}

export default Header