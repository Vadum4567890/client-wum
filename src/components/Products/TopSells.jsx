import React, { useEffect } from 'react'
import styles from '../../styles/Home.module.css';
import { products } from '../../features/productsData';
import Product from '../Product/Product';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../features/products/productsSlice';
import { FidgetSpinner } from 'react-loader-spinner';



const TopSells = ({products, isLoading }) => {

  // const dispatch = useDispatch();
  // console.log(list);
  const { t } = useTranslation();

  // const products = useSelector((state) => state.products.products.items);
  // const isLoading = useSelector((state) => state.products.isLoading);


  // if (isLoading && !products.length) {
  //   return (
  //     <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
  //       <FidgetSpinner
  //         visible={true}
  //         height="25%"
  //         width="25%"
  //         ariaLabel="dna-loading"
  //         wrapperStyle={{}}
  //         wrapperClass="dna-wrapper"
  //         ballColors={['#ff0000', '#00ff00', '#0000ff']}
  //         backgroundColor="#F4442E"
  //       />
  //     </div>
  //   );
  // }

  if (isLoading || !products) {
    return <div>Loading...</div>; // or your loading indicator
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

