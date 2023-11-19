import React from 'react';
import styles from '../../styles/Home.module.css';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../utils/routes';
import StarRate from '../AdditionalComponents/StarRate/StarRate';
import LikeButton from '../AdditionalComponents/Like/LikeButton';
import BUYBTN from '../../images/products/buyproduct.svg';
import { addItemToCart } from '../../features/user/userSlice';
import { useDispatch } from 'react-redux';


const Product = ({ product }) => {
  const dispatch = useDispatch();
  const addToCart = () => {
    dispatch(addItemToCart(product));
  }
  return (
    <div className={styles.topsells__product}>
      <div className={styles.topsells__product__img}>
        <Link to={`/${product.id}/about`} className={styles.product_image}>
          <img src={product.imageSrc} alt='headphones' />
        </Link>
        <div className={styles.likebtn}><LikeButton productId={product.id}/></div>
        <div className={styles.buybtn}>
          <Link onClick={addToCart} className={styles.topsells__buy}>
            <img src={BUYBTN} alt='buybtn'/>
          </Link>
        </div>
      </div>
      <div className={styles.topsells__product__description}>
        <div className={styles.topsells__product__description__title}>
          <Link to={`/${product.id}/about`}>
            <p>{product.title}</p>
          </Link>
        </div>
        <div className={styles.topsells__product__star}><StarRate productId={product.id}/></div>
        <div className={styles.topsells__product__description__nameprice}>
          <p>{product.price}</p>
        </div>
      </div>
    </div>
  );
}

export default Product;
