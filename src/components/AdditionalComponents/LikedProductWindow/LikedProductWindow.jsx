import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from '../../../styles/AdditionalComponents/LikedProductWindow.module.css';
import CLOSE from '../../../images/additional/close.svg';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../../utils/routes';
import { getProducts, selectProducts } from '../../../features/products/productsSlice';
import { selectLikedProductIds } from '../../../features/user/userSlice';

const LikedProductsWindow = ({ isOpen }) => {
 const dispatch = useDispatch();
  //   const likedProductIds = useSelector((state) => state.user.likes);
  //   console.log(likedProductIds);
  //   const products = (dispatch(getProducts));
  //   const liked = products.includes(likedProductIds.id);
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);
    const likedProductIds = useSelector(selectLikedProductIds)
    const products = useSelector(selectProducts)
    
 // Check if products is undefined or null
 if (!products || !products.items) {
  console.error('Products data is not available');
  return null; // or display a loading state
}

    const likedProducts = products.items.filter((product) => likedProductIds.includes(product.id));
   

    
  return (
    <div className={styles.block} style={{ display: isOpen ? 'block' : 'none' }}>
       <div className={styles.block__info}>
        <div className={styles.title}><h2  onClick={(e) => e.stopPropagation()}>Вподобані</h2></div>
        <div className={styles.close}><img src={CLOSE} alt='close'/></div>
       </div>
      {/* Display your liked products here */}
      <Link to={ROUTES.PROFILE}>
      <ul>
        {likedProducts.map((product) => (
          <li key={product.id} onClick={(e) => e.stopPropagation()}>
            <div className={styles.imageblock}>
                <img src={product.imagePath} alt={product.title} />
            </div>
            <div className={styles.info}>
                <p>{product.name.substring(0, 49)}</p>
                <p className={styles.price}>{product.price}₴</p>
            </div>
        </li>
        ))}
      </ul>
      </Link>
    </div>
  );
};

export default LikedProductsWindow;
