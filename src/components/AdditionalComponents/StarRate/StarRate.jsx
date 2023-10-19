import { useState } from 'react';

import styles from '../../../styles/AdditionalComponents/StarRate.module.css';

import filledStar from '../../../images/additional/on-star.svg';
import emptyStar from '../../../images/additional/off-star.svg';


const StarRate = () => {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);
  
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
              <img src={filledStar} alt="Filled Star" />
            ) : (
              <img src={emptyStar} alt="Empty Star" />
            )}
            </button>
          );
        })}
      </div>
    );
  };
  

  export default StarRate;