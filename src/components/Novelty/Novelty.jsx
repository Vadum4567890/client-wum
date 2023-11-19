import React from 'react'

import styles from '../../styles/Novelty/Novelty.module.css';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../utils/routes';
import NOTEBOOK from '../../images/NoteBook.svg';
import LINE from '../../images/Line.svg';
import SNOTEBOOK from '../../images/rightpanel/Notebook2.svg';
import MACBOOK from '../../images/rightpanel/mac.svg';
import { useTranslation } from 'react-i18next';


const Novelty = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className={styles.mainblock}>
        <div className={styles.firstpart}>
          <div className={styles.firstpart__title}>
            <h1 className={styles.firstpart__title__h1}>
              Apple MacBook Air 13
            </h1>
          </div>
          <div className={styles.firstpart__block}>
            <div className={styles.firstpart__block__line}>
              <img src={LINE} alt="line"/>
            </div>
            <div className={styles.firstpart__description}>
              <p  className={styles.firstpart__description__p}>
                {t('slideblock.novelty1.description')}
              </p>
            </div>
              <div className={styles.firstpart__button}>
                <Link to={ROUTES.DETAILS_URL} className={styles.firstpart__button__link}>{t('slideblock.novelty1.more_info')}</Link>
              </div>
            </div>
          </div>
        <div className={styles.secondpart}>
          <Link to={ROUTES.DETAILS_URL} className={styles.secondpart__img__link}>
            <img src={NOTEBOOK} alt="notebook" />
          </Link>
        </div>
        <div className={styles.thirdpart}>
          <div className={styles.thirdpart__img}>
            <img src={SNOTEBOOK} alt="notebook" />
          </div>
          <div className={styles.thirdpart__details}>
            <p className={styles.thirdpart__details__p}>
              Apple MacBook Air 13“ Midnight M2 16/256 8GPU 2022
            </p>
          </div>
          <div className={styles.thirdpart__price}>
            <div className={styles.thirdpart__price__value}>
              <p className={styles.thirdpart__price__value__p}>
                54 003 грн
              </p>
            </div>
            <div className={styles.thirdpart__price__promotional}>
              <p className={styles.thirdpart__price__promotional__p}>
                54 003 грн
              </p>
            </div>
          </div>
        </div>
        <div className={styles.fourthpart}>
          <Link to={ROUTES.DETAILS_URL} className={styles.secondpart__img__link}>
              <img src={MACBOOK} alt="notebook" />
            </Link>
        </div>
        <div className={styles.fifthpart}>
          <h1 className={styles.fifthpart__text}>{t('slideblock.novelty1.processor')}</h1>
        </div>
        <div className={styles.sixthpart}>
          <div className={styles.sixthpart__elements}>
            <h1 className={styles.sixthpart__h1}>
              {t('slideblock.novelty1.p_graphics')}
            </h1>
            <p className={styles.sixthpart__p}>
              {t('slideblock.novelty1.text')}
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Novelty;