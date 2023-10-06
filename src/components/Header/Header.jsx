import React from 'react';
import styles from '../../styles/Header.module.css';

import { Link } from 'react-router-dom';

import { ROUTES } from '../../utils/routes';

import LOGO from '../../images/MainLogo.svg';
import ARROWUP from '../../images/header/Arrow Up.svg';
import SEARCH from '../../images/search.svg';
import SHOPPINGCART from '../../images/header/ShoppingCart2.svg';
import HEART from '../../images/header/Heart.svg';
import ACCOUNT from '../../images/header/User.svg';
import LOCATION from '../../images/header/Location.svg';
import { useDispatch, useSelector } from 'react-redux';
import { toggleForm } from '../../features/user/userSlice';


const Header = () => {
    const dispatch = useDispatch();
    const { currentUser } = useSelector(({user})=> user);
    const handleClick = () => {
        if (!currentUser) dispatch(toggleForm(true));
    }
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
                    <p>Львів</p>
                </div>
                <div className={styles.arrowbtn}>
                    <img src={ARROWUP} alt="arrowbtn" />
                </div>
            </div>
            <div>
               <form className={styles.form}>
                    <div className={styles.input}>
                        <input 
                            placeholder='Я шукаю...'
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
                    <p>EN</p>
                </Link>
                <p>|</p>
                <Link to={ROUTES.UA}>
                    <p>UA</p>
                </Link>
            </div>
            <div className={styles.account}>
                <Link to={ROUTES.LOGIN}  className={styles.accounticon} onClick={handleClick}>
                    <img src={ACCOUNT} alt="account" />
                </Link>
                <Link to={ROUTES.LIKES} className={styles.cart}>
                    <img src={HEART} alt="heart" />
                </Link>
                <Link to={ROUTES.CART} className={styles.cart}>
                    <img src={SHOPPINGCART} alt="shopping cart"/>
                    <span className={styles.count}>2</span>
                </Link>
            </div>
        </div>
    </div>
    
 </>
  )
}

export default Header