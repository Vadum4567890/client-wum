import React from 'react';
import likeIcon from '../../../images/additional/fullheart.svg'; // Замініть це на шлях до вашої іконки "Like"
import unlikeIcon from '../../../images/additional/emptyheart.svg'; // Замініть це на шлях до вашої іконки "Unlike"
import styles from '../../../styles/AdditionalComponents/LikeButton.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { toggleLike } from '../../../features/user/userSlice';

const LikeButton = ({productId}) => {
    const dispatch = useDispatch();
    const likedProducts = useSelector((state) => state.user.likes);
    const isLiked = likedProducts.includes(productId);
  
    const handleLikeClick = () => {
      dispatch(toggleLike({ productId }));
    };

  return (
    <button type="button" className={styles.likeButton}  onClick={handleLikeClick}>
      <img src={isLiked ? likeIcon : unlikeIcon} alt="Like" />
    </button>
  );
};

export default LikeButton;