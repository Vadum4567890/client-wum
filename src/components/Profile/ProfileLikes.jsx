import React from 'react'
import styles from '../../styles/Profile/ProfileLikes.module.css'
import { useDispatch, useSelector } from 'react-redux';
import CLOSE from '../../images/additional/close.svg'
import { addItemToCart, selectLikedProductIds, toggleLike } from '../../features/user/userSlice';
import StarRate from '../AdditionalComponents/StarRate/StarRate';
import { Link, NavLink } from 'react-router-dom';
import SHOPPINGCART from '../../images/additional/ShoppingCart.svg';
import {ROUTES} from '../../utils/routes';
import { selectProducts } from '../../features/products/productsSlice';

const ProfileLikes = () => {
    const dispatch = useDispatch();
    const likedProductIds = useSelector(selectLikedProductIds)
    const products = useSelector(selectProducts)
  
    if (!products || !products.items) {
        console.error('Products data is not available');
        return null; // or display a loading state
      }
    
    const likedProducts = products.items.filter((product) => likedProductIds.includes(product.id));
  

    const handleUnlikeClick = (productId) => {
        dispatch(toggleLike({ productId }));
    };
    const addToCart = (product) => {
        dispatch(addItemToCart(product));
    }
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h1>Список бажань</h1>
      </div>
      <div className={styles.main}>
        <div className={styles.block}>
        {/* Display your liked products here */}
            <ul>
            {likedProducts.map((product) => (
                <li key={product.id}>
                    <div className={styles.imageblock}>
                        <Link to={`../${product.id}/about`}><img src={product.imagePath} alt={product.title} /></Link>
                    </div>
                    <div className={styles.info}>
                        <div className={styles.info__title}>
                            <p>{product.name.substring(0, 100)}</p>
                        </div>
                        <div className={styles.info__availability}>
                            <p>В наявності</p>
                        </div>
                        <div className={styles.info__rate}>
                            <StarRate/>
                            <p>25 відгуків</p>
                        </div>
                        <div className={styles.info__prices}>
                            <p>{product.discountedPrice}₴</p>
                            <p>{product.price}₴</p>
                        </div>
                    </div>
                    <div className={styles.add__button}>
                        <div className={styles.button}>
                                <NavLink onClick={() => addToCart(product)} to={ROUTES.CART} className={styles.topsells__buy}>
                                    <img src={SHOPPINGCART} alt='buybtn'/>
                                </NavLink>
                                <NavLink onClick={() => addToCart(product)} to={ROUTES.CART} className={styles.topsells__buy}>
                                    <p>Додати в корзину</p>
                                </NavLink>
                        </div>
                    </div>
                    <div className={styles.close}  onClick={() => handleUnlikeClick(product.id)}><img src={CLOSE} alt='close'/></div>
                </li>
            ))}
            </ul>
        </div>
      </div>
    </div>
  )
}

export default ProfileLikes