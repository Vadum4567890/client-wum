import React, { useState } from 'react';
import likeIcon from '../../../images/additional/fullheart.svg'; // Замініть це на шлях до вашої іконки "Like"
import unlikeIcon from '../../../images/additional/emptyheart.svg'; // Замініть це на шлях до вашої іконки "Unlike"
import styles from '../../../styles/AdditionalComponents/LikeButton.module.css';

const LikeButton = () => {
  const [isLiked, setIsLiked] = useState(false); // Початковий стан - не лайкнуто

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