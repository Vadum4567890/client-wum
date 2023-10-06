import React from 'react'
import styles from '../../styles/Aside.module.css'
import COMPUTERS from '../../images/sidebar/computers.svg'
import MOBILES from '../../images/sidebar/mobilephone.svg'
import GAMINGS from '../../images/sidebar/gamers.svg'
import LAUNDRIES from '../../images/sidebar/laundries.svg'
import HOMES from '../../images/sidebar/homeproducts.svg'
import CARBONCALIBRATES from '../../images/sidebar/carboncalibrates.svg'
import BATHTUBS from '../../images/sidebar/bathtubs.svg'
import CARBONS from '../../images/sidebar/carbons.svg'
import VARIOUS from '../../images/sidebar/various.svg'
import DRESSES from '../../images/sidebar/dresses.svg'
import HANDSOAPS from '../../images/sidebar/handsoaps.svg'
import CHILDREN from '../../images/sidebar/children.svg'
import ZOOPRODUCTS from '../../images/sidebar/zooproducts.svg'
import CARBONRULERS from '../../images/sidebar/carbonrulers.svg'
import DRINKALKOS from '../../images/sidebar/drinkalcohols.svg'
import CARBONTANKS from '../../images/sidebar/carbon_tank.svg'
import CARBONTAG from '../../images/sidebar/carbon_tag.svg'

import { Link } from 'react-router-dom'
import { ROUTES } from '../../utils/routes';
// import { useSelector } from 'react-redux'



const Sidebar = () => {
  // const { list } = useSelector(({categories}) => categories) ;
  return (
    <>
      <aside className={styles.asidebar}>
        <div className={styles.listofcategories}>
          <Link to={ROUTES} className={styles.category}>
            <img src={COMPUTERS} alt='computers'/>
            <h1 className={styles.name}>Ноутбуки та комп’ютери</h1>
          </Link>
          <Link to={ROUTES} className={styles.category}>
            <img src={MOBILES} alt='mobiles'/>
            <h1 className={styles.name}>Смартфони, ТВ і електроніка</h1>
          </Link>
          <Link to={ROUTES} className={styles.category}>
            <img src={GAMINGS} alt='gaming'/>
            <h1 className={styles.name}>Товари для геймерів</h1>
          </Link>
          <Link to={ROUTES} className={styles.category}>
            <img src={LAUNDRIES} alt='laundries'/>
            <h1 className={styles.name}>Побутова техніка</h1>
          </Link>
          <Link to={ROUTES} className={styles.category}>
            <img src={HOMES} alt='homeproducts'/>
            <h1 className={styles.name}>Товари для дому</h1>
          </Link>
          <Link to={ROUTES} className={styles.category}>
            <img src={CARBONCALIBRATES} alt='carboncalibrates'/>
            <h1 className={styles.name}>Інструменти та автотовари</h1>
          </Link>
          <Link to={ROUTES} className={styles.category}>
            <img src={BATHTUBS} alt='bathtubs'/>
            <h1 className={styles.name}>Сантехнка та ремонт</h1>
          </Link>
          <Link to={ROUTES} className={styles.category}>
            <img src={CARBONS} alt='carbons'/>
            <h1 className={styles.name}>Дача, сад і город</h1>
          </Link>
          <Link to={ROUTES} className={styles.category}>
            <img src={VARIOUS} alt='various'/>
            <h1 className={styles.name}>Спорт і захоплення</h1>
          </Link>
          <Link to={ROUTES} className={styles.category}>
            <img src={DRESSES} alt='dress'/>
            <h1 className={styles.name}>Одяг, взуття та прекраси</h1>
          </Link>
          <Link to={ROUTES} className={styles.category}>
            <img src={HANDSOAPS} alt='handsoaps'/>
            <h1 className={styles.name}>Краса та здоров’я</h1>
          </Link>
          <Link to={ROUTES} className={styles.category}>
            <img src={CHILDREN} alt='children'/>
            <h1 className={styles.name}>Дитячі товари</h1>
          </Link>
          <Link to={ROUTES} className={styles.category}>
            <img src={ZOOPRODUCTS} alt='gaming'/>
            <h1 className={styles.name}>Зоотовари</h1>
          </Link>
          <Link to={ROUTES} className={styles.category}>
            <img src={CARBONRULERS} alt='gaming'/>
            <h1 className={styles.name}>Офіс, школа, книги</h1>
          </Link>
          <Link to={ROUTES} className={styles.category}>
            <img src={DRINKALKOS} alt='gaming'/>
            <h1 className={styles.name}>Алкогольні напої та продукти</h1>
          </Link>
          <Link to={ROUTES} className={styles.category}>
            <img src={CARBONTANKS} alt='gaming'/>
            <h1 className={styles.name}>Нашим захисникам</h1>
          </Link>
          <Link to={ROUTES} className={styles.category}>
            <img src={CARBONTAG} alt='gaming'/>
            <h1 className={styles.name}>Освіжіть думки шопінгом до -45%</h1>
          </Link>
        </div>
      </aside>
    </>
  )
}

export default Sidebar