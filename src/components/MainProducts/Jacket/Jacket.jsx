import React from 'react'
import styles from '../../../styles/MainProducts/Jacket.module.css'

import TRIANGLE from '../../../images/additional/triangle.svg';
import TRIANGLE2 from '../../../images/additional/triangle2.svg';
import HOTWOMAN from '../../../images/products/hotwoman.png';

import { Link, useNavigate } from 'react-router-dom';
import { ROUTES } from '../../../utils/routes';
import { useTranslation } from 'react-i18next';


const Jacket = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const onNavigation = () => {
        navigate("/1025/about")
      }
  return (
    <>
        <div className={styles.container}>
            <div className={styles.container__image}>
                <Link to={ROUTES.topsells__product} className={styles.image}>
                    <img src={HOTWOMAN} alt="headphones" />
                </Link>
            </div>
            <div className={styles.container__items}>
                <div className={styles.container__triangle}>
                    <img src={TRIANGLE} alt="triamgle" />
                </div>
                <div className={styles.container__triangle2}>
                    <img src={TRIANGLE2} alt="triamgle" />
                </div>
               <div className={styles.container__firstblock}>
                    <div className={styles.firstblock__title}>
                        <p>{t('m_prod.style')}</p>
                    </div>
                    <div className={styles.firstblock__name}>
                        <p>{t('m_prod.jacket')}</p>
                    </div>
               </div>
               <div className={styles.secondblock}>
                    <div className={styles.secondblock__prices}>
                        <div className={styles.secondblock__price}>
                            <p>3 900 грн</p>
                        </div>
                        <div className={styles.secondblock__forsale}>
                            <p>4 600 грн</p>
                        </div>
                    </div>
                    <div className={styles.secondblock__button}>
                        <button type='button' onClick={onNavigation}>
                            <p>{t('m_prod.look')}</p>
                        </button>
                    </div>
               </div>
            </div>
        </div>
    </>
  )
}

export default Jacket