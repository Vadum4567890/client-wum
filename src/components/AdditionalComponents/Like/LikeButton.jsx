import React, { useEffect, useState } from 'react';
import likeIcon from '../../../images/additional/fullheart.svg'; // Замініть це на шлях до вашої іконки "Like"
import unlikeIcon from '../../../images/additional/emptyheart.svg'; // Замініть це на шлях до вашої іконки "Unlike"
import styles from '../../../styles/AdditionalComponents/LikeButton.module.css';

const LikeButton = ({productId}) => {
  const [isLiked, setIsLiked] = useState(() => {
    // Зчитування збереженого стану лайку для конкретного продукту з localStorage
    const savedLikeState = localStorage.getItem(`like_${productId}`);
    return savedLikeState ? JSON.parse(savedLikeState) : false;
  });

  useEffect(() => {
    localStorage.setItem(`like_${productId}`, JSON.stringify(isLiked));
  }, [isLiked, productId]);


  const handleLikeClick = () => {
    setIsLiked(!isLiked); // Переключаємо стан при кліку
  };

  return (
    <button type="button" className={styles.likeButton}  onClick={handleLikeClick}>
      <img src={isLiked ? likeIcon : unlikeIcon} alt="Like" />
    </button>
  );
};

export default LikeButton;