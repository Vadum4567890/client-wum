import React from 'react';
import styles from '../../styles/Home.module.css';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../utils/routes';
import StarRate from '../AdditionalComponents/StarRate/StarRate';
import LikeButton from '../AdditionalComponents/Like/LikeButton';
import BUYBTN from '../../images/products/buyproduct.svg';


const Product = ({ product }) => {
  return (
    <div className={styles.topsells__product}>
      <div className={styles.topsells__product__img}>
        <Link to={ROUTES.topsells__product} className={styles.product_image}>
          <img src={product.imageSrc} alt='headphones' />
        </Link>
        <div className={styles.likebtn}><LikeButton/></div>
        <div className={styles.buybtn}>
          <Link to={ROUTES.buyproduct} className={styles.topsells__buy}>
            <img src={BUYBTN} alt='buybtn'/>
          </Link>
        </div>
      </div>
      <div className={styles.topsells__product__description}>
        <div className={styles.topsells__product__description__title}>
          <p>{product.title}</p>
        </div>
        <StarRate/>
        <div className={styles.topsells__product__description__nameprice}>
          <p>{product.price}</p>
        </div>
      </div>
    </div>
  );
}

export default Product;
