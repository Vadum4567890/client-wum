import React from 'react'
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


const CategoryProducts = () => {
    const { slug } = useParams();
  
    return (
    <>
        <div className={styles.main__content}>
            <div className={styles.head__links}>
                <Link to={ROUTES.HOME}>
                    <img src={HOME} alt="" />
                </Link>
                /
                <div className={styles.category__link}>
                    <NavLink to={`/categories/${1}`}><p>Ноутбуки та комп’ютери</p></NavLink>
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
                        <button>
                            <img src={TRIPLE} alt='triple'/>
                        </button>
                    </div>
                    <div className={styles.head__sort_quatro}>
                        <button>
                            <img src={QUATRO} alt='quatro'/>
                        </button>
                    </div>
                </div>
            </div>
            
            <div className={styles.product__list}>
                <Filter/>
                <div className={styles.products}>
                    {slug === 'Ноутбуки' && laptops.map((product) => (
                        <Product key={product.id} product={product} />
                    ))}
                </div>
            </div>
        </div>
    </>
  )
}

export default CategoryProducts