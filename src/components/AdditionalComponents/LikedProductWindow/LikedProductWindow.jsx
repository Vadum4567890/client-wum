import React from 'react';
import { useSelector } from 'react-redux';
import { products } from '../../../features/productsData';
import styles from '../../../styles/AdditionalComponents/LikedProductWindow.module.css';
import CLOSE from '../../../images/additional/close.svg';

const LikedProductsWindow = ({ isOpen }) => {
    const likedProductIds = useSelector((state) => state.user.likes);
    const likedProducts = products.filter((product) => likedProductIds.includes(product.id));


  return (
    <div className={styles.block} style={{ display: isOpen ? 'block' : 'none' }}>
       <div className={styles.block__info}>
        <div className={styles.title}><h2  onClick={(e) => e.stopPropagation()}>Вподобані</h2></div>
        <div className={styles.close}><img src={CLOSE}/></div>
       </div>
      {/* Display your liked products here */}
      <ul>
      {likedProducts.map((product) => (
          <li key={product.id} onClick={(e) => e.stopPropagation()}>
            <div className={styles.imageblock}>
                <img src={product.imageSrc} alt={product.title} />
            </div>
            <div className={styles.info}>
                <p>{product.title}</p>
                <p>{product.price}</p>
            </div>
        </li>
    ))}
    </ul>
    </div>
  );
};

export default LikedProductsWindow;
