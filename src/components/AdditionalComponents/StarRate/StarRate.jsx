import { useEffect, useState } from 'react';

import styles from '../../../styles/AdditionalComponents/StarRate.module.css';

import filledStar from '../../../images/additional/on-star.svg';
import emptyStar from '../../../images/additional/off-star.svg';


const StarRate = ({productId, starimg1,starimg2}) => {
  const [rating, setRating] = useState(() => {
    // Зчитування збереженого рейтингу для конкретного продукту з localStorage
    const savedRating = localStorage.getItem(`rating_${productId}`);
    return savedRating ? parseInt(savedRating, 10) : 0;
  });
    const [hover, setHover] = useState(0);


    useEffect(() => {
      localStorage.setItem(`rating_${productId}`, rating.toString());
    }, [rating, productId]);
  
    return (
      <div className={styles.starRating}>
        {[...Array(5)].map((star, index) => {
          index += 1;
          return (
            <button
              type="button"
              key={index}
              className={index <= (hover || rating) ? styles.on : styles.off}
              onClick={() => setRating(index)}
              onMouseEnter={() => setHover(index)}
              onMouseLeave={() => setHover(rating)}
            >
               {index <= (hover || rating) ? (
              <img src={starimg2 || filledStar} alt="Filled Star" />
            ) : (
              <img src={starimg1 || emptyStar} alt="Empty Star" />
            )}
            </button>
          );
        })}
      </div>
    );
  };
  

  export default StarRate;