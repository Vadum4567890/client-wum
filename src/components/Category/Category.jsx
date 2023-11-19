import React from 'react'
import { companies } from '../../features/productsData'
import styles from '../../styles/Category.module.css'
import { Link } from 'react-router-dom'
import { ROUTES } from '../../utils/routes'
import HOME from '../../images/categories/Home2.svg'
import SubCategory from '../SubCategory/SubCategory'
import { subcategories } from '../../features/subcategoriesData'
import InfoBlock from '../InfoBlock/InfoBlock'

const Category = () => {
  return (
    <>
      <div className={styles.main__content}>
        <div className={styles.head__links}>
          <Link to={ROUTES.HOME}>
            <img src={HOME} alt="" />
          </Link>
          /
          <div className={styles.category__link}>
            <p>Ноутбуки та комп’ютери</p>
          </div>
        </div>
        <div className={styles.head__companies}>
          {companies.map((company) => (
            <div key={company.id} className={styles.company}>
              <img src={company.imageSrc} className={styles.company__img} alt='company'/> 
            </div>
          ))}
          </div>
        <div className={styles.main}>
          {subcategories.map((subcat) => (
              <SubCategory key={subcat.id} subcategory={subcat} />
            ))}
        </div>
        
      </div>
      <InfoBlock/>
    </>
  )
}

export default Category