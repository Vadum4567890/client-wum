import React from 'react'
import styles from '../../styles/Home.module.css';
import Product from '../Product/Product';
import { useTranslation } from 'react-i18next';


const TopSells = ({products, isLoading }) => {

  const { t } = useTranslation();

  
  if (isLoading || !products) {
    return <div>Loading...</div>; 
  }


  const topSells = products.filter((product) => product.price >= 5999).slice(0, 5);
  const offers = products.filter((product) => product.price < 5999).slice(0, 5);
  return (
    <div>
      <div className={styles.topsells}>
      <h1 className={styles.topsells__h1}>{t('products.topsale')}</h1>
        <div className={styles.topsells__productlist}>
          {topSells.map((product) => (
              <Product key={product.id} product={product} />
            ))}
        </div>
      </div>
      <div className={styles.action__offers}>
        <h1 className={styles.topsells__h1}>{t('products.offers')}</h1>
        <div className={styles.topsells__productlist}>
          {offers.map((product) => (
              <Product key={product.id} product={product} />
            ))}
        </div>
      </div>
    </div>
  )
}

export default TopSells

