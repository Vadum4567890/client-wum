import React from 'react'
import { Link } from 'react-router-dom';
import { ROUTES } from '../../utils/routes';

import styles from '../../styles/Novelty2.module.css';
import LINE from '../../images/Line.svg';
import PANTS from '../../images/novelty/pants.png';
import WOMAN from '../../images/novelty/bigwoman.png';
const Novelty2 = () => {
    return (
      <>
        <div className={styles.mainblock}>
            <div className={styles.main__image}>
                <img src={WOMAN} alt="woman" />
            </div>
            <div className={styles.firstpart}>
                <div className={styles.firstpart__title}>
                    <h1>
                        Опис товару 
                    </h1>
                </div>
                <div className={styles.firstpart__description}>
                <p>
                    Штани на високій посадці прямого крою від Jil Sander.
                     Модель із декоративними строчками спереду. 
                     Прорізні кишені з боків. Застібається на блискавку під планкою та ґудзик. 
                     Розрізи ззаду. Зріст моделі: 177 см. Параметри: 86/67/93. Розмір на моделі: 36
                </p>
            </div>
            </div>
            
            <div className={styles.secondpart}>
                <div className={styles.secondpart__title}>
                    <p>відчуй<br/> свою<br/>  елегантність</p>
                </div>
            </div>
            <div className={styles.thirdpart}>
                <div className={styles.thirdpart__block__line}>
                    <img src={LINE} alt="line"/>
                </div>
                <div className={styles.thirdpart__details}>
                    <p>
                        Жакет Versace приталеного асиметричного крою. 
                        Зліва доповнений розрізом і легким драпіруванням. 
                        Шовковий пояс із медальйоном на морську тему акцентує увагу на талії. 
                        Відкладний комір з атласними лацканами. Довгі рукави...
                    </p>
                </div>
                <div className={styles.thirdpart__details_btn}>
                    <Link to={ROUTES}>
                        <p>Більше інформації</p>
                    </Link>
                </div>
            </div>
            <div className={styles.fourthpart}>
                <Link to={ROUTES.DETAILS_URL} className={styles.secondpart__img__link}>
                    <img src={PANTS} alt="notebook" />
                </Link>
                <div className={styles.fourthpart__title}>
                    <p>
                        Штани Палаццо чорні
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
                    <img src={PANTS} alt="notebook" />
                </Link>
                <div className={styles.sixthpart__title}>
                    <p>
                        Жакет Versace чорний
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