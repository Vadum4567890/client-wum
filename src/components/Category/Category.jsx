import React, { useEffect } from 'react'
import { companies } from '../../features/productsData'
import styles from '../../styles/Category.module.css'
import { Link, useParams } from 'react-router-dom'
import { ROUTES } from '../../utils/routes'
import HOME from '../../images/categories/Home2.svg'
import SubCategory from '../SubCategory/SubCategory'
import { Audio } from 'react-loader-spinner';
import InfoBlock from '../InfoBlock/InfoBlock'
import { useDispatch, useSelector } from 'react-redux'
import { getCategories } from '../../features/categories/categoriesSlice'
import { getSubcategory } from '../../features/subcategories/subcategoriesSlice'

const Category = () => {

  const { id } = useParams();
  const dispatch = useDispatch();
  const { list: categories, isLoading } = useSelector((state) => state.categories);
  const { list: subcategories,  isLoading: subcategoriesLoading } = useSelector((state) => state.subcategories);
  useEffect(() => {
    // Fetch all categories initially
    dispatch(getCategories());
  }, [dispatch]);

  useEffect(() => {
    // Fetch subcategories based on the category ID
    dispatch(getSubcategory(id));
  }, [dispatch, id]);

  const currentCategory = categories.find((category) => category.id === Number(id));

  return (
    <>
      <div className={styles.main__content}>
        <div className={styles.head__links}>
          <Link to={ROUTES.HOME}>
            <img src={HOME} alt="" />
          </Link>
          /
          <div className={styles.category__link}>
             <p>{currentCategory?.title}</p> 
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
          {subcategoriesLoading ? (
            <div>
              <Audio
            height="180"
            width="380"
            radius="9"
            color="orange"
            ariaLabel="loading"
          />
            </div>
          ) : (
            subcategories.map((subcat) => <SubCategory key={subcat.id} subcategory={subcat} />)
            )}
        </div>
        
      </div>
      <InfoBlock/>
    </>
  )
}

export default Category