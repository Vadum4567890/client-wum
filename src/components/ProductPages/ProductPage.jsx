import React, { useEffect, useState } from 'react'

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import styles from "../../styles/ProductPage.module.css";

import { useParams } from 'react-router-dom';
import ProductAbout from './ProductAbout';
import ProductHead from './ProductHead';
import ProductCharacteristics from './ProductCharacteristics';
import ProductReviews from './ProductReviews';
import ProductQuestions from './ProductQuestions';
import ProductDualbuy from './ProductDualbuy';



const ProductPage = () => {
  useEffect(() => {
    // Отримуємо елементи кнопок Swiper за допомогою їх класів
    const prevArrow = document.querySelector('.swiper-button-prev.slider-arrow');
    const nextArrow = document.querySelector('.swiper-button-next.slider-arrow');
  
    // Перевіряємо, чи елементи існують, перед зміною стилів
    if (prevArrow && nextArrow) {
      // Змінюємо колір стрілок на оранжевий
      prevArrow.style.color = '#F34A25';
      nextArrow.style.color = '#F34A25';
    }
  }, []);
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState('about');
  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className={styles.container}>
       <ProductHead id={id} activeTab={activeTab} onTabChange={handleTabChange}/>
       {activeTab === 'about' && <ProductAbout />}
       {activeTab === 'characteristics' && <ProductCharacteristics />}
       {activeTab === 'reviews' && <ProductReviews />}
       {activeTab === 'questions' && <ProductQuestions />}
       {activeTab === 'dualbuy' && <ProductDualbuy />}
    </div>
  )
}

export default ProductPage