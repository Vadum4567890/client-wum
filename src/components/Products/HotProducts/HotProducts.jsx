import React from 'react'
import styles from '../../../styles/Home.module.css';
import { products } from '../../../features/productsData';
import Product from '../../Product/Product';
import { useTranslation } from 'react-i18next';


const HotProducts = () => {
  const { t } = useTranslation();
  return (
    <div>
      <div className={styles.action__offers}>
      <h1 className={styles.topsells__h1}>{t('products.hotproduct')}</h1>
        <div className={styles.topsells__productlist}>
          {products.map((product) => (
              <Product key={product.id} product={product} />
            ))}
        </div>
      </div>
      <div className={styles.action__offers}>
        <h1 className={styles.topsells__h1}>{t('products.demand')}</h1>
        <div className={styles.topsells__productlist}>
          {products.map((product) => (
              <Product key={product.id} product={product} />
            ))}
        </div>
      </div>
    </div>
  )
}

export default HotProducts

