import React, { useEffect, useState } from 'react'
import styles from '../../../styles/Profile/ProfileOrders.module.css'
import { Link } from 'react-router-dom'
import LikeButton from '../Like/LikeButton'
import StarRate from '../StarRate/StarRate'
import OrderStatusButtonWithLogic from '../OrderStatusButtonWithLogic/OrderStatusButtonWithLogic'
import COPY from '../../../images/additional/copy.svg'




const Order = ({order}) => {
    const [copied, setCopied] = useState(false);

    useEffect(() => {
      if (copied) {
        const timeoutId = setTimeout(() => {
          setCopied(false);
        }, 3000);
  
        return () => clearTimeout(timeoutId);
      }
    }, [copied]);
  
    const handleCopyId = () => {
      navigator.clipboard.writeText(order.id).then(() => {
        setCopied(true);
      });
    };
    const orderStatus = "Доставлено";
  return (
    <div className={styles.order}>
            <div className={styles.order__image}>
              <Link to={`/${1}}/about`} className={styles.product_image}>
                <img src={order.imageSrc} alt='headphones' />
              </Link>
              <div className={styles.likebtn}><LikeButton productId={order.id}/></div>
            </div>
            <div className={styles.order__info}>
              <div className={styles.order__info__header}>
                <div className={styles.order__info__main}>
                  <h1>{order.title}</h1>
                  <p>Дата замовлення: Жов 23, 2023</p>
                  <div className={styles.order__info__rate}>
                    <div className={styles.order__info__start}>
                      <StarRate/>
                    </div>
                    <div className={styles.order__info__text}>
                      <p>64 відгуки</p>
                    </div>
                  </div>
                </div>
                <div className={styles.order__info__details}>
                    <h3><Link to={`/${1}}/about`}>Детальніше</Link> </h3>
                </div>
              </div>
              <div className={styles.order__info__center}>
                <div className={styles.oreder__info__price}>
                    <p>72 999$</p>
                    <p><span>65 229$</span> x 1</p>
                </div>
                <div className={styles.order__info__sum}>
                    <h1>Всього:  62 229$</h1>
                </div>
              </div>
              <hr/>
              <div className={styles.order__info__footer}>
                <div className={styles.order__info__id}>
                  <p>ID замовлення: 8177692974856607 </p>
                  <img src={COPY} alt='copy' onClick={handleCopyId} />
                </div>
                <div className={styles.order__info__button}>
                <OrderStatusButtonWithLogic status={orderStatus} />
                </div>
                {copied && (
                    <div className={styles.copyMessageContainer}>
                    <div className={styles.copyMessage}>
                        <p>ID замовлення успішно скопійовано!</p>
                    </div>
                    </div>
                )}
              </div>
            </div>
        </div>
  )
}

export default Order