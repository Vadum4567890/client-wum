import React from 'react'
import styles from '../../styles/Footer.module.css';

import TELEGRAM from '../../images/footer/itelegram.svg';
import FACEBOOK from '../../images/footer/ifacebook.svg';
import INSTAGRAM from '../../images/footer/iinstagram.svg';
import LOGO from '../../images/logo.svg';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../utils/routes';

const Footer = () => {
  return (
    <>
        <section className={styles.footer}>
            <div className={styles.infoblock}>
                <div className={styles.logo}>
                    <Link to={ROUTES.HOME}> 
                        <img src={LOGO} alt="WUM" />
                    </Link>
                </div>
                <div className={styles.rightsleft }>
                    <div className={styles.customers}>
                        <p>Покупцям</p>
                    </div>
                    <div className={styles.listofactions}>
                        <ul>
                            <li className={styles.elements}><Link to={ROUTES.CERTIFICATE}>Довідка для покупців</Link></li>
                            <li className={styles.elements}><Link to={ROUTES.SUPPORT}>Підтримка</Link></li>
                            <li className={styles.elements}><Link to={ROUTES.USECONDITIONS}>Умови використання</Link></li>
                            <li className={styles.elements}><Link to={ROUTES.PAYOPTIONS}>Способи оплати</Link></li>
                        </ul>
                    </div>
                </div>
                <div className={styles.rightsright}>
                    <div className={styles.aboutus}>
                        <p>Про нас</p>
                    </div>
                    <div className={styles.listofactions}>
                        <ul>
                            <li className={styles.elements}><Link to={ROUTES.CONTACTS}>Контакти</Link></li>
                            <li className={styles.elements}><Link to={ROUTES.PARTNERS}>Партнерська програма</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
           
            <div className={styles.socials}>   
                <div className={styles.socialsinfo}>
                    <div className={styles.links}>
                        <a href='https://telegram.com'>
                            <img src={TELEGRAM} alt="" />
                        </a>
                        <a href='https://facebook.com'>
                            <img src={FACEBOOK} alt="" />
                        </a>
                        <a href='https://instagram.com'>
                            <img src={INSTAGRAM} alt="" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Footer