import React from 'react'
import styles from '../../styles/Filter.module.css'
import TICK from '../../images/TICKB.svg'

const Filter = () => {
  return (
    <div className={styles.container}>
      <div className={styles.filter__title}>
        <h3>Фільтри</h3>
      </div>
      <div className={styles.filter__blocks}>
        <div className={styles.filter__block}>
          <div className={styles.filter__name}>
            <p>Бренди</p>
          </div>
          <hr/>
          <div className={styles.filter__tick}>
            <img src={TICK} alt=''/>
          </div>
        </div>
        <div className={styles.filter__block}>
          <div className={styles.filter__name}>
            <p>Ціна</p>
          </div>
         <hr/>
          <div className={styles.filter__tick}>
            <img src={TICK} alt=''/>
          </div>
        </div>
        <div className={styles.filter__block}>
          <div className={styles.filter__name}>
            <p>Країна-виробник</p>
          </div>
          <hr/>
          <div className={styles.filter__tick}>
            <img src={TICK} alt=''/>
          </div>
        </div>
        <div className={styles.filter__block}>
          <div className={styles.filter__name}>
            <p>Колір</p>
          </div>
          <hr/>
          <div className={styles.filter__tick}>
            <img src={TICK} alt=''/>
          </div>
        </div>
        <div className={styles.filter__block}>
          <div className={styles.filter__name}>
            <p>Дискретна відеокарта</p>
          </div>
          <hr/>
          <div className={styles.filter__tick}>
            <img src={TICK} alt=''/>
          </div>
        </div>
        <div className={styles.filter__block}>
          <div className={styles.filter__name}>
            <p>Обсяг SSD</p>
          </div>
          <hr/>
          <div className={styles.filter__tick}>
            <img src={TICK} alt=''/>
          </div>
        </div>
        <div className={styles.filter__block}>
          <div className={styles.filter__name}>
            <p>Операційна система</p>
          </div>
          <hr/>
          <div className={styles.filter__tick}>
            <img src={TICK} alt=''/>
          </div>
        </div>
        <div className={styles.filter__block}>
          <div className={styles.filter__name}>
            <p>Кількість ядер<br/> процесора</p>
          </div>
          <hr/>
          <div className={styles.filter__tick}>
            <img src={TICK} alt=''/>
          </div>
        </div>
        <div className={styles.filter__block}>
          <div className={styles.filter__name}>
            <p>Обсяг памʼяті<br/> відеокарти</p>
          </div>
          <hr/>
          <div className={styles.filter__tick}>
            <img src={TICK} alt=''/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Filter