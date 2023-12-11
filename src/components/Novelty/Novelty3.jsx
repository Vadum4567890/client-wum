import React from 'react'
import { Link } from 'react-router-dom';
import { ROUTES } from '../../utils/routes';


import MAINWATCH from '../../images/novelty/mainwatch.svg';
import WATCHSERIES from '../../images/novelty/watchseries.png';
import WATCH4 from '../../images/novelty/watch4.svg';
import WATCHPRICE from '../../images/novelty/lastwatch.svg';
import styles from '../../styles/Novelty/Novelty3.module.css';
import { useTranslation } from 'react-i18next';

const Novelty3 = () => {
    const { t } = useTranslation();
  return (
    <>
        <div className={styles.mainblock}>
            <div className={styles.firstpart}>
                <div className={styles.firstpart__title}>
                    <h1>
                        Apple Watch Series 8 
                    </h1>
                </div>
                <div className={styles.firstpart__description}>
                    <p>
                        {t('slideblock.novelty3.description')}
                    </p>
                </div>
                <div className={styles.firstpart__details_btn}>
                    <Link to={ROUTES}>
                        <p> {t('slideblock.novelty3.more')}</p>
                    </Link>
                </div>
            </div>
            
            <div className={styles.secondpart}>
                <div className={styles.secondpart__image}>
                    <Link to={ROUTES}>
                        <img src={MAINWATCH} alt="apple watch" />
                    </Link>
                </div>
                <div className={styles.secondpart__image2}>
                    <Link to={ROUTES}>
                        <img src={WATCHSERIES} alt="series" />
                    </Link>
                </div>
            </div>
            <div className={styles.thirdpart}>
                <div className={styles.thirdpart__title}>
                   <p> {t('slideblock.novelty3.security')}</p>
                </div>
                <div className={styles.thirdpart__details}>
                    <p>
                    {t('slideblock.novelty3.details')}
                    </p>
                </div>
            </div>
            <div className={styles.fourthpart}>
                <div className={styles.fourthpart__image}>
                    <Link to={ROUTES.DETAILS_URL} className={styles.fourthpart__image__link}>
                        <img src={WATCH4} alt="notebook" />
                    </Link>
                </div>
                <div className={styles.fourthpart__buybtn}>
                    <Link to={ROUTES}>
                        <p>
                            {t('slideblock.novelty3.buy')}
                        </p>
                    </Link>
                </div>
            </div>
            <div className={styles.fifthpart}>
                <div className={styles.fifthpart__title}>
                    <p> {t('slideblock.novelty3.title')}</p>
                </div>
            </div>
            <div className={styles.sixthpart}>
                <Link to={ROUTES.DETAILS_URL} className={styles.sixthpart__img__link}>
                    <img src={WATCHPRICE} alt="notebook" />
                </Link>
                <div className={styles.sixthpart__title}>
                    <p>
                    {t('slideblock.novelty3.smartwatch')}<br/> Apple Watch Series 8 GPS
                    </p>
                </div>
                <div className={styles.sixthpart__price}>
                    <div className={styles.sixthpart__price__value}>
                        <p>
                            18 499 грн
                        </p>
                    </div>
                    <div className={styles.sixthpart__price__promotional}>
                        <p>
                            19 999 грн
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Novelty3