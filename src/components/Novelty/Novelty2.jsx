import React from 'react'
import { Link } from 'react-router-dom';
import { ROUTES } from '../../utils/routes';

import styles from '../../styles/Novelty/Novelty2.module.css';
import LINE from '../../images/Line.svg';
import PANTS from '../../images/novelty/pants.png';
import WOMAN from '../../images/novelty/bigwoman.png';
import JACKET from '../../images/novelty/jacket.png';
import { useTranslation } from 'react-i18next';

const Novelty2 = () => {
    const { t } = useTranslation();
    return (
      <>
        <div className={styles.mainblock}>
            <div className={styles.main__image}>
                <img src={WOMAN} alt="woman" />
            </div>
            <div className={styles.firstpart}>
                <div className={styles.firstpart__title}>
                    <h1>
                       {t('slideblock.novelty2.title')} 
                    </h1>
                </div>
                <div className={styles.firstpart__description}>
                <p>
                    {t('slideblock.novelty2.description')} 
                </p>
            </div>
            </div>
            
            <div className={styles.secondpart}>
                <div className={styles.secondpart__title}>
                    <p>{t('slideblock.novelty2.main')} </p>
                </div>
            </div>
            <div className={styles.thirdpart}>
                <div className={styles.thirdpart__block__line}>
                    <img src={LINE} alt="line"/>
                </div>
                <div className={styles.thirdpart__details}>
                    <p>
                        {t('slideblock.novelty2.details')} 
                    </p>
                </div>
                <div className={styles.thirdpart__details_btn}>
                    <Link to={ROUTES}>
                        <p>{t('slideblock.novelty2.more')} </p>
                    </Link>
                </div>
            </div>
            <div className={styles.fourthpart}>
                <Link to={ROUTES.DETAILS_URL} className={styles.secondpart__img__link}>
                    <img src={PANTS} alt="notebook" />
                </Link>
                <div className={styles.fourthpart__title}>
                    <p>
                    {t('slideblock.novelty2.jeans')} 
                    </p>
                </div>
                <div className={styles.fourthpart__price}>
                    <div className={styles.fourthpart__price__value}>
                        <p>
                            5 652 грн
                        </p>
                    </div>
                    <div className={styles.fourthpart__price__promotional}>
                        <p>
                            54 003 грн
                        </p>
                    </div>
                </div>
            </div>
            <div className={styles.fifthpart}>
               
            </div>
            <div className={styles.sixthpart}>
                <Link to={ROUTES.DETAILS_URL} className={styles.sixthpart__img__link}>
                    <img src={JACKET} alt="notebook" />
                </Link>
                <div className={styles.sixthpart__title}>
                    <p>
                    {t('slideblock.novelty2.jacket')} 
                    </p>
                </div>
                <div className={styles.sixthpart__price}>
                    <div className={styles.sixthpart__price__value}>
                        <p>
                            46 536 грн
                        </p>
                    </div>
                    <div className={styles.sixthpart__price__promotional}>
                        <p>
                            54 003 грн
                        </p>
                    </div>
                </div>
            </div>
        </div>
      </>
    )
  }
  
  export default Novelty2;