import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import styles from '../../styles/AdditionalComponents/Slider.module.css';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';

import React from 'react'
import Novelty from './Novelty';
import Novelty2 from './Novelty2';
import Novelty3 from './Novelty3';

const SlideBlock = () => {
  return (
    <div className={styles.container}>
    <Swiper
      effect={'coverflow'}
      grabCursor={true}
      centeredSlides={true}
      loop={true}
      slidesPerView={'auto'}
      coverflowEffect={{
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 2.5,
      }}
      pagination={{ el: '.swiper-pagination', clickable: true }}
      navigation={{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
        clickable: true,
      }}
      modules={[EffectCoverflow, Pagination, Navigation]}
      className={styles.swiper_container}
    >
      <SwiperSlide>
        <Novelty/>
      </SwiperSlide>
      <SwiperSlide>
        <Novelty2/>
      </SwiperSlide>
      <SwiperSlide>
        <Novelty3/>
      </SwiperSlide>

      <div className="slider-controler">
        {/* <div className="swiper-button-prev slider-arrow">
          <ion-icon name="arrow-back-outline"></ion-icon>
        </div>
        <div className="swiper-button-next slider-arrow">
          <ion-icon name="arrow-forward-outline"></ion-icon>
        </div> */}
        <div className="swiper-pagination"></div>
      </div>
    </Swiper>
  </div>
  )
}

export default SlideBlock