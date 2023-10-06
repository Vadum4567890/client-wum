import React from 'react'
import styles from '../../styles/Home.module.css';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../utils/routes';
import HEADPHONES from '../../images/products/headphones.svg';
import BUYBTN from '../../images/products/buyproduct.svg';
import CARDREADER from '../../images/products/cardreader.svg';
import MICRO from '../../images/products/microphone.svg';
import MOUSE from '../../images/products/mouse.svg';

const Home = () => {
  return (
    <div>
      <div className={styles.topsells}>
        <h1 className={styles.topsells__h1}>Топ продаж</h1>
        <div className={styles.topsells__productlist}>
          <div className={styles.topsells__product}>
            <div className={styles.topsells__product__img}>
              <Link to={ROUTES.topsells__product} className={styles.product_image}>
                <img src={HEADPHONES} alt='headphones' />
              </Link>
              <div className={styles.buybtn}>
                <Link to={ROUTES.buyproduct}  className={styles.topsells__buy}>
                  <img src={BUYBTN} alt='buybtn'/>
                </Link>
              </div>
            </div>

            <div className={styles.topsells__product__description}>
              <div className={styles.topsells__product__description__title}>
                <p className={styles.topsells__product__description__title__text}>Навушники</p>
              </div>
              <div className={styles.topsells__product__description__nameprice}>
                <p className={styles.topsells__product__description__name}>Sony WH-C...</p>
                <p className={styles.topsells__product__description__price}>4 490₴</p>
              </div>
            </div>
          </div>
          <div className={styles.topsells__product}>
            <div className={styles.topsells__product__img}>
              <Link to={ROUTES.topsells__product} className={styles.product_image}>
                <img src={CARDREADER} alt='headphones' />
              </Link>
              <div className={styles.buybtn}>
                <Link to={ROUTES.buyproduct}  className={styles.topsells__buy}>
                  <img src={BUYBTN} alt='buybtn'/>
                </Link>
              </div>
            </div>
            <div className={styles.topsells__product__description}>
              <div className={styles.topsells__product__description__title}>
                <p className={styles.topsells__product__description__title__text}>Кардрідер</p>
              </div>
              <div className={styles.topsells__product__description__nameprice}>
                <p className={styles.topsells__product__description__name}>Transcend...</p>
                <p className={styles.topsells__product__description__price}>4 480₴</p>
              </div>
            </div>
          </div>
          <div className={styles.topsells__product}>
            <div className={styles.topsells__product__img}>
              <Link to={ROUTES.topsells__product} className={styles.product_image}>
                <img src={MICRO} alt='headphones' className={styles.product_images}/>
              </Link>
              <div className={styles.buybtn}>
                <Link to={ROUTES.buyproduct}  className={styles.topsells__buy}>
                  <img src={BUYBTN} alt='buybtn'/>
                </Link>
              </div>
            </div>
            
            <div className={styles.topsells__product__description}>
              <div className={styles.topsells__product__description__title}>
                <p className={styles.topsells__product__description__title__text}>Блендер</p>
              </div>
              <div className={styles.topsells__product__description__nameprice}>
                <p className={styles.topsells__product__description__name}>Tefal QUIC...</p>
                <p className={styles.topsells__product__description__price}>1 990₴</p>
              </div>
            </div>
          </div>
          <div className={styles.topsells__product}>
            <div className={styles.topsells__product__img}>
              <Link to={ROUTES.topsells__product} className={styles.product_image}>
                <img src={MOUSE} alt='headphones' className={styles.product_images}/>
              </Link>
              <div className={styles.buybtn}>
                <Link to={ROUTES.buyproduct}  className={styles.topsells__buy}>
                  <img src={BUYBTN} alt='buybtn'/>
                </Link>
              </div>
            </div>
      
            <div className={styles.topsells__product__description}>
              <div className={styles.topsells__product__description__title}>
                <p className={styles.topsells__product__description__title__text}>Мишка</p>
              </div>
              <div className={styles.topsells__product__description__nameprice}>
                <p className={styles.topsells__product__description__name}>Logitech</p>
                <p className={styles.topsells__product__description__price}>351₴</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home