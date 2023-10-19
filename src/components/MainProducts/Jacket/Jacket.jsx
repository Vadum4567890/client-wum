import React from 'react'
import styles from '../../../styles/MainProducts/Jacket.module.css'

import TRIANGLE from '../../../images/additional/triangle.svg';
import TRIANGLE2 from '../../../images/additional/triangle2.svg';
import HOTWOMAN from '../../../images/products/hotwoman.png';

import { Link } from 'react-router-dom';
import { ROUTES } from '../../../utils/routes';


const Jacket = () => {
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
                        <p>Увімкни свій Стиль</p>
                    </div>
                    <div className={styles.firstblock__name}>
                        <p>Пальто двобортне вкорочене</p>
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
                        <button type='button'>
                            <p>Подивитись</p>
                        </button>
                    </div>
               </div>
            </div>
        </div>
    </>
  )
}

export default Jacket