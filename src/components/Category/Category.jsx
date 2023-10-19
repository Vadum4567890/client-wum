import React from 'react'
import Product from '../Product/Product'
import { companies, products } from '../../features/productsData'
import st from '../../styles/Home.module.css'
import styles from '../../styles/Category.module.css'
import { Link } from 'react-router-dom'
import { ROUTES } from '../../utils/routes'
import HOME from '../../images/categories/Home2.svg'
import SubCategory from '../SubCategory/SubCategory'

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
            <div className={styles.company}>
              <img src={company.imageSrc} className={styles.company__img}/> 
            </div>
          ))}
          </div>
        <div className={styles.main}>
          {subcategories.map((category) => (
              <SubCategory key={category.id} product={category} />
            ))}
        </div>
      </div>
    </>
  )
}

export default Category