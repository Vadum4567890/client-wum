import React from 'react'
import styles from '../../styles/Profile/ProfileOrders.module.css';
import Order from '../AdditionalComponents/Order/Order';
import { products } from '../../features/productsData';

const ProfileOrders = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h1>Статуси замовлень</h1>
        <nav className={styles.nav}>
          <div className={styles.nav__buttons}>
            <div className={styles.nav__button}>
              <button>Всі 3</button>
            </div>
            <div className={styles.nav__button}>
              <button>Не оплачено 0</button>
            </div>
            <div className={styles.nav__button}>
              <button>В обробці 1</button>
            </div>
            <div className={styles.nav__button}>
              <button>Виконано</button>
            </div>
            <div className={styles.nav__button}>
              <button>Відправлені</button>
            </div>
            <div className={styles.nav__button}>
              <button>В Архів</button>
            </div>
          </div>
          <hr />
        </nav>
        {products.map((order) => (
              <Order key={order.id} order={order} />
        ))}
      </div>
    </div>
  )
}

export default ProfileOrders