  import React from 'react'
  import styles from "../../styles/ProductPage.module.css";

  import { NavLink} from 'react-router-dom';




  const ProductHead = ({id, activeTab, onTabChange}) => {
    const tabs = ['about', 'characteristics', 'reviews', 'questions', 'dualbuy'];

    const getPointIndex = (tab) => {
      return tabs.indexOf(tab);
    };
    return (
      <>
      <div className={styles.product__category}>
            <div className={styles.product__category_img}>

            </div>
            <div className={styles.product__category_title}>
              <p>Title</p>
            </div>
          </div>
          <div className={styles.product_navbar}>
          {['about', 'characteristics', 'reviews', 'questions', 'dualbuy'].map((tab) => (
            <button key={tab} className={activeTab === tab ? styles.active : ''} onClick={() => onTabChange(tab)}>
              <p>{tab}</p>
            </button>
          ))}
          </div>  
          <div className={styles.block_hr}>
            <hr className={styles.main_hr}/>
            {[...Array(5)].map((_, index) => (
            <div
              key={index}
              className={`${styles.point_hr} ${activeTab === tabs[index] ? styles.active : ''}`}
              style={{ left: `${index * 120 + 15}px` }} // Змініть значення за необхідності
            ></div>
          ))}
          </div>
      </>
    )
  }

  export default ProductHead