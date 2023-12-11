import React, { useEffect, useState } from 'react'
import { companies, laptops } from '../../features/productsData'
import styles from '../../styles/CategoryProducts.module.css'
import { Link, NavLink } from 'react-router-dom'
import { ROUTES } from '../../utils/routes'
import HOME from '../../images/categories/Home1.svg'
import { useParams } from 'react-router-dom';
import ARROWSORT from '../../images/catalog/arrow-sort.svg'
import QUATRO from '../../images/catalog/quatro.svg'
import TRIPLE from '../../images/catalog/triple.svg'
import Filter from '../Filter/Filter'
import Product from '../Product/Product'
import { useDispatch, useSelector } from 'react-redux'
import { getSubcategory } from '../../features/subcategories/subcategoriesSlice'


const CategoryProducts = () => {
    const { id, slug } = useParams();
    const dispatch = useDispatch();

  // Just logic to go back to subcategories
  const { list: subcategories } = useSelector((state) => state.subcategories);
  const currentSubcategory = subcategories.find((category) => category.id === Number(id));
  useEffect(() => {
    dispatch(getSubcategory(Number(currentSubcategory.parentId)));
  }, [dispatch, id]);



    const [layout, setLayout] = useState('quatro');

    const toggleLayout = () => {
        setLayout((prevLayout) => (prevLayout === 'quatro' ? 'triple' : 'quatro'));
      };

      const products = (slug === 'Ноутбуки' ? laptops : []).map((product) => (
        <Product key={product.id} product={product} layout={layout} />
      ));
      

    return (
    <>
        <div className={styles.main__content}>
            <div className={styles.head__links}>
                <Link to={ROUTES.HOME}>
                    <img src={HOME} alt="" />
                </Link>
                /
                <div className={styles.category__link}>
                    <NavLink to={`/categories/${currentSubcategory?.parentId}`}><p>Ноутбуки та комп’ютери</p></NavLink>
                </div>
                /
                <div className={styles.category__link}>
                    <p>{slug}</p>
                </div>
                </div>
                <div className={styles.head__companies}>
                {companies.map((company) => (
                    <div key={company.id} className={styles.company}>
                        <img src={company.imageSrc} className={styles.company__img} alt='company'/> 
                    </div>
                ))}
            </div>
            <div className={styles.head__catalog}>
                <div className={styles.head__title}>
                    <h1>{slug}</h1>
                </div>
                <div className={styles.head__right}>
                    <div className={styles.head__sort}>
                        <div className={styles.head__sort_img}>
                            <img src={ARROWSORT} alt='rate'/>
                        </div>
                        <div className={styles.head__sort_name}>
                            <p>За рейтингом</p>
                        </div>
                    </div>
                    <div className={styles.head__sort_triple}>
                    <button onClick={toggleLayout}>
                        <img src={layout === 'triple' ? TRIPLE : QUATRO} alt="layout" />
                    </button>
                    </div>  
                </div>                
            </div>
            
            <div className={styles.product__view}>
                <Filter/>
                <div className={`${styles.product__list} ${styles.products} ${styles[layout + 'Layout']}`}>
                     {products}
                </div>
            </div>
        </div>
    </>
  )
}

export default CategoryProducts