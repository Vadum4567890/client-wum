import React from 'react'
import styles from '../../../styles/Home.module.css';
import Product from '../../Product/Product';
import { useTranslation } from 'react-i18next';

const HotProducts = ({products, isLoading }) => {
  const { t } = useTranslation();
  

  if (isLoading || !products) {
    return <div>Loading...</div>; 
  }

  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  const hotProducts = shuffleArray(products.slice(0, 5)).reverse();
  const popularProducts = shuffleArray(shuffleArray(products.slice(0, 5)));

  return (
    <div>
      <div className={styles.action__offers}>
      <h1 className={styles.topsells__h1}>{t('products.hotproduct')}</h1>
        <div className={styles.topsells__productlist}>
        {Array.isArray(hotProducts) && hotProducts.length > 0 && (
            hotProducts.map((product) => (
              <Product key={product.id} product={product} />
            ))
          )}
        </div>
      </div>
      <div className={styles.action__offers}>
        <h1 className={styles.topsells__h1}>{t('products.demand')}</h1>
        <div className={styles.topsells__productlist}>
        {Array.isArray(popularProducts) && popularProducts.length > 0 && (
            popularProducts.map((product) => (
              <Product key={product.id} product={product} />
            ))
          )}
        </div>
      </div>
    </div>
  )
}

export default HotProducts

