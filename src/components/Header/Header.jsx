import React from 'react';
import styles from '../../styles/Header.module.css';

import { Link } from 'react-router-dom';

import { ROUTES } from '../../utils/routes';

import LOGO from '../../images/logo.svg';
import ARROWUP from '../../images/ArrowUp.svg';
import SEARCH from '../../images/search.svg';
import SHOPPINGCART from '../../images/ShoppingCart.svg';
import HEART from '../../images/Heart.svg';
import ACCOUNT from '../../images/userp.svg';
import LOCATION from '../../images/Location.svg';


const Header = () => {
  return (
    <>
    <div className={styles.header}>
        <div className={styles.headercontent}>
            <div className={styles.logo}>
                <Link to={ROUTES.HOME}> 
                    <img src={LOGO} alt="WUM" />
                </Link>
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
        </div>

        <div className={styles.info}>
            <div className={styles.chooselocation}>
                <div className={styles.icon}>
                    <img src={LOCATION} alt="locationimg" />
                </div>
                <div className={styles.city}>
                    <p>Львів</p>
                </div>
                <div className={styles.arrowbtn}>
                    <img src={ARROWUP} alt="arrowbtn" />
                </div>
            </div>
            <form className={styles.form}>
                <div className={styles.icon}>
                    <img src={SEARCH} alt="searchbtn"/>
                </div>
                <div className={styles.input}>
                    <input 
                        type="search" 
                        name="search" 
                        autoComplete="off"
                        onChange={()=> {}}
                    
                    />
                </div>
                <div className={styles.searchbutton}>
                    <button type="button" className={styles.buttontext}>Знайти</button>
                </div>
            </form>
            <div className={styles.account}>
                <Link to={ROUTES.ACCOUNT} className={styles.accounticon}>
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