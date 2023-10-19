import React from 'react'
import styles from '../../styles/Home.module.css';
import { products } from '../../features/productsData';
import Product from '../Product/Product';


const TopSells = () => {
  return (
    <div>
      <div className={styles.topsells}>
      <h1 className={styles.topsells__h1}>Топ продаж</h1>
        <div className={styles.topsells__productlist}>
          {products.map((product) => (
              <Product key={product.id} product={product} />
            ))}
        </div>
      </div>
      <div className={styles.action__offers}>
        <h1 className={styles.topsells__h1}>Акційні пропозиції</h1>
        <div className={styles.topsells__productlist}>
          {products.map((product) => (
              <Product key={product.id} product={product} />
            ))}
        </div>
      </div>
    </div>
  )
}

export default TopSells

