import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import styles from "../../styles/ProductPage.module.css";
import StarRate from '../AdditionalComponents/StarRate/StarRate';
import style from '../../styles/AdditionalComponents/Slider.module.css';

import FRONT from '../../images/catalog/product/frontnote.png'
import BACK from '../../images/catalog/product/backnote.png'
import LEFT from '../../images/catalog/product/leftnote.png'
import LikeButton from '../AdditionalComponents/Like/LikeButton'
import STAR from '../../images/additional/on-star.svg'
import EMAIL from '../../images/catalog/product/icons/email.svg'
import INFO from '../../images/catalog/product/icons/info.svg'
import LOCATION from '../../images/catalog/product/icons/location.svg'
import TICK from '../../images/header/Arrow Up.svg'
import SHOP from '../../images/catalog/product/icons/shop.svg'
import WALLET from '../../images/catalog/product/icons/card.svg'
import SECURITY from '../../images/catalog/product/icons/security.svg'
import WARNING from '../../images/catalog/product/icons/warning.svg'
import STAR1 from '../../images/catalog/product/icons/grayStar.svg'
import STAR2 from '../../images/catalog/product/icons/yellowStar.svg'


const ProductAbout = () => {
  return (
    <div className={styles.product}>
        <div className={styles.product__info}>
            <div className={styles.product__info_slider}>
                <div className={style.slider_container}>
                    <Swiper
                    effect={'none'}
                    grabCursor={false}
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
                    className={style.swiper_containerr}
                    >
                    <SwiperSlide>
                        <img src={FRONT} alt="front" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={BACK} alt="back" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={LEFT} alt="left" />
                    </SwiperSlide>

                    <div className="slider-controler">
                        <div className="swiper-button-prev slider-arrow">
                        <ion-icon name="arrow-back-outline"></ion-icon>
                        </div>
                        <div className="swiper-button-next slider-arrow">
                        <ion-icon name="arrow-forward-outline"></ion-icon>
                        </div>
                        {/* <div className="pagination-images">
                            <img src={FRONT} alt="new1" onClick={() => handleSlideClick(0)}/>
                            <img src={BACK} alt="new2" onClick={() => handleSlideClick(1)}/>
                            <img src={LEFT} alt="new3" onClick={() => handleSlideClick(2)}/>
                        </div> */}
                        {/* <div className="swiper-pagination"></div> */}
                    </div>
                    </Swiper>
                </div>
            </div>
            <div className={styles.product__info_characteristics}>
              <h3>Короткі характеристики</h3>
              <p>Acer Nitro 5 AN515-46-R5XN • 15.6’’ IPS (2560x1440) WQHD 165 Гц AMD Ryzen 7 6800H (3.2 - 4.7 ГГц) • RAM 16 ГБ • SSD 1 ТБ • NVIDIA GeForce RTX 3070 Ti, 8 ГБ GDDR6 • Windows 11 Home • Black</p>
            </div>
            <div className={styles.product__info_describe}>
              <h3>Опис</h3>
              <p>Acer Nitro 5 AN515-46-R5XN • 15.6’’ IPS (2560x1440) WQHD 165 Гц AMD Ryzen 7 6800H (3.2 - 4.7 ГГц) • RAM 16 ГБ • SSD 1 ТБ • NVIDIA GeForce RTX 3070 Ti, 8 ГБ GDDR6 • Windows 11 Home • Black</p>
            </div>
            <div className={styles.product__info_details}>
              <div>
                <p>Діагональ екрана <span>............................................</span></p>
                <p>Тип екрана <span>...........................................................</span></p>
                <p>Чистота оновлення екрану<span>......................</span></p>
                <p>Роздільня здатність<span>........................................</span></p>
                <p>Покриття екрану<span>..............................................</span></p>
              </div>
              <div>
                <p className={styles.gray}>15.6 (2560х1440) яWQHD</p>
                <p className={styles.gray}>IPS</p>
                <p className={styles.gray}>165 Гц</p>
                <p className={styles.gray}>2560х1440</p>
                <p className={styles.gray}>Матове</p>
              </div>
            </div>
        </div>
        <div className={styles.product__detail}>
          <div className={styles.product__detail_title}>
            <h1>Ноутбук ACER Nitro 5 AN515-46-R1SB Black</h1>
          </div>
          <div className={styles.product__detail_rating}>
           <div className={styles.product__detail_others}>
            <div className={styles.product__detail_stars}>
                <div className={styles.product__starsss}><StarRate/></div>
                <div className={styles.product__details_rewiews}>
                  <p>Відгуки 16</p>
                </div>
              </div>
              <div>
                <p>Код: 394195905</p>
              </div>
           </div>
          </div>
          <div className={styles.product__detail_colors}>
            <p>Колір: <span>Black</span> </p>    
            <nav className={styles.nav}>
              <button className={styles.nav__colors_black}></button>  
              <button className={styles.nav__colors_blue}></button>
              <button className={styles.nav__colors_white}></button>
            </nav>        
          </div>
          <div className={styles.product__detail_sellblock}>
            <div className={styles.product__detail_seller}>
                <div>
                  <p>Продавець: <span>Zelezo</span></p>
                  <div className={styles.product__detail_marks}>
                    <p><img src={STAR} alt='star'/><span>4,9</span> (39 оцінок) </p>
                  </div>
                </div>
                <div>
                  <img src={EMAIL} alt='email'/>
                </div>
            </div>
            <hr/>
            <div className={styles.product__detail_buy}>
              <div>
                <s>72 699₴</s>
                <h1>69 229₴</h1>
                <p>Є в наявності</p>
              </div>
              <div className={styles.like}>
                <p><LikeButton/></p>
              </div>
              <div className={styles.buy}>
                <button className={styles.buy__button}><p>Купити</p></button>
              </div>
            </div>
            <hr/>
            <div className={styles.product__detail_message}>
             <p>Доставка Новою Поштою за передоплатою - 1500 грн.</p>
            </div>
            
          </div>
          <div className={styles.product__detail_addons}>
              <div className={styles.product__detail_defends}>
                <input type="checkbox" ></input>
                <label form="vehicle1">Захист від пошкоджень </label>
                <img src={INFO} alt='info' />
              </div>
              <div className={styles.product_detail_defenders}>
                <input type='radio' id="protection" name='protect' value="Bike" />
                <label form="protect">Захист від пошкоджень (65001-100000) 8 309₴</label>
              </div>
              <div className={styles.product__detail_defends}>
                <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"></input>
                <label form="vehicle1">Комп'ютерна допомога онлайн</label>
              </div>
              <div className={styles.product_detail_defenders}>
                <input type='radio' id="protection1" name='protect1' value="Bike" />
                <label form="protect1">Захист від пошкоджень (65001-100000) 8 309₴</label>
              </div>
              <div className={styles.product_detail_defenders}>
                <input type='radio' id="protection2" name='protect2' value="Bike" />
                <label form="protect2">Захист від пошкоджень (65001-100000) 8 309₴</label>
              </div>
              <div className={styles.product_detail_defenders}>
                <input type='radio' id="protection3" name='protect3' value="Bike" />
                <label form="protect3">Захист від пошкоджень (65001-100000) 8 309₴</label>
              </div>
              <div className={styles.product_detail_defenders}>
                <input type='radio' id="protection4" name='protect4' value="Bike" />
                <label form="protect4">Захист від пошкоджень (65001-100000) 8 309₴</label>
              </div>
          </div>
          <div className={styles.product__detail_deliver}>
              <div className={styles.product__detail_deliver_city}>
                  <div className={styles.deliver_block}>
                    <div className={style.deliver_image}>
                        <img src={LOCATION} alt="location" />
                    </div>
                    <div className={style.deliver_text}>
                        <p>Доставка в: <span>Львів</span></p>
                    </div>
                  </div>
                  <div className={styles.deliver_tick}>
                    <img src={TICK} alt="tick" />
                  </div>
              </div>
              <hr />
              <div className={styles.product__detail_deliver_operator}>
                  <div className={styles.deliver_block}>
                    <div className={styles.deliver_image}>
                      <img src={SHOP} alt="shop" />
                    </div>
                    <div className={styles.deliver_title}>
                      <p>Самовивіз з відділень поштових операторів</p>
                      <a href='https://www.google.com.ua/maps/@49.8411348,24.0160168,13.32z?entry=ttu'>Дивитись на мапі</a>
                    </div>
                  </div>
                  <div className={styles.deliver_tariff}>
                    <p>
                      Тариф<br/> перевізника
                    </p>
                  </div>
              </div>
          </div>
          <div className={styles.product__detail_payment}>
            <div className={styles.product__detail_payment_pay}>
              <div className={styles.payment_pay_img}>
                <img src={WALLET} alt="wallet" />
              </div>
              <div className={styles.payment_pay_text}>
                <p><span>Оплата.</span> Оплата під час отримання товару, Безготівковий для юридичних та фізичних осіб .<br/>
                 На даний момент використання бонусів на цей товар недоступне.</p>
              </div>
            </div>
            <hr />
            <div className={styles.product__detail_payment_warranty}>
              <div className={styles.payment_warranty_img}>
                <img src={SECURITY} alt="security" />
              </div>
              <div className={styles.payment_warranty_text}>
                <p><span>Гарантія.</span> 12 місяців гарантії від продавця Обмін/повернення товару<br/> впродовж 14 днів</p>
              </div>
            </div>
          </div>
          <div className={styles.product_detail_complaint}>
            <div className={styles.complaint_block}>
              <div className={styles.complaint_img}>
                <img src={WARNING} alt="warning" />
              </div>
              <div className={styles.complaint_text}>
                <p>Поскаржитись на товар</p>
              </div>
            </div>
            <div className={styles.complaint_tick}>
              <img src={TICK} alt="tick" />
            </div>
          </div>
          <div className={styles.product_detail_rewiew_title}>
            <h1>Додати відгук до товару</h1>
          </div>
          <div className={styles.product__detail_form}>
            <div className={styles.form_rate}>
              <div className={styles.form_star_rate}>
              <StarRate starimg1={STAR1} starimg2={STAR2}/>
              </div>
              <div className={styles.name_rate}>
                <li>Погано</li>
                <li>Так собі</li>
                <li>Нормально</li>
                <li>Добре</li>
                <li>Чудово</li>
              </div>
            </div>
            <div className={styles.form_advantages}>
              <label>Переваги</label>
              <input type='text' name="advantages" id="advantages" />
            </div>
            <div className={styles.form_disadvantages}>
              <label>Недоліки</label>
              <input type='text' name="disadvantages" id="disadvantages" />
            </div>
            <div className={styles.form_comments}>
              <label>Коментар</label>
              <textarea name="comment" id="comment" maxLength={500} ></textarea>
            </div>
            <div className={styles.form_button}>
              <button type='submit'><p>Увійти в особистий кабінет</p></button>
            </div>
          </div>
        </div>  
      </div>
  )
}

export default ProductAbout