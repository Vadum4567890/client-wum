import React from 'react'

import styles from '../../../styles/MainProducts/Headphones.module.css'

import HEADPHONES from '../../../images/products/BigHeadphones.png';

import { Link } from 'react-router-dom'
import { ROUTES } from '../../../utils/routes';
import { useTranslation } from 'react-i18next';

const Headphones = () => {
    const { t } = useTranslation();
  return (
    <>
        <div className={styles.content}>
            <div className={styles.content__info}>
                <div className={styles.content__info_title}><p>{t('m_prod.headphones')}</p></div>
                <div className={styles.content__info_name}><p>Sony WH-CH710N</p></div>
                <div className={styles.content__info_button}>
                    <button type="button">
                        <p>{t('m_prod.look')}</p>
                    </button>
                </div>
            </div>
            <div className={styles.content__image}>
                <Link to={ROUTES.topsells__product} className={styles.product_image}>
                    <img src={HEADPHONES} alt="headphones" />
                </Link>
            </div>
        </div>
    </>
  )
}

export default Headphones