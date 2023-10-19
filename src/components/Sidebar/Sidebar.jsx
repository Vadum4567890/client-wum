import React, { useEffect } from 'react'

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

import { Link, NavLink } from 'react-router-dom'
import { ROUTES } from '../../utils/routes';
import { useDispatch, useSelector } from 'react-redux'
import { getCategories } from '../../features/categories/categoriesSlice'

const Sidebar = () => {
  const { list, isLoading } = useSelector((state) => state.categories);
  const dispatch = useDispatch();
  useEffect(() => {
    // Викликати Thunk-екшен для отримання категорій при завантаженні сторінки
    dispatch(getCategories());
  }, [dispatch]);
  // const { list } = useSelector(({categories}) => categories) ;
  console.log(list);


  return (
    <>
      <aside className={styles.asidebar}>
        <div className={styles.listofcategories}>
          <NavLink to={`/categories/${1}`} className={styles.category}>
            <img src={COMPUTERS} alt='computers'/>
            <h1 className={styles.name}>Ноутбуки та комп’ютери</h1>
          </NavLink>
          <NavLink to={`/categories/${2}`} className={styles.category}>
            <img src={MOBILES} alt='mobiles'/>
            <h1 className={styles.name}>Смартфони, ТВ і електроніка</h1>
          </NavLink>
          <NavLink to={`/categories/${3}`} className={styles.category}>
          <img src={GAMINGS} alt='gaming'/>
            <h1 className={styles.name}>Товари для геймерів</h1>
          </NavLink>
        {/* {list.map((category, index) => (
          <NavLink key={index} to={ROUTES.CATEGORY} className={styles.category}>
            <img
              src={CHILDREN}
              alt={category.title}
            />
            <h1 className={styles.name}>{category.title}</h1>
          </NavLink>
        ))} */}
        </div>
      </aside>
    </>
  )
}

export default Sidebar