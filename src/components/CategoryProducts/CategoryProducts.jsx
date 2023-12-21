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
import { clearProducts, getProducts } from '../../features/products/productsSlice'
import { getCategories } from '../../features/categories/categoriesSlice'
import { FidgetSpinner } from 'react-loader-spinner'
import { getBrands } from '../../features/brands/brandsSlice'


const CategoryProducts = () => {
    const { id, slug } = useParams();
  const dispatch = useDispatch();
 
  const isLoading = useSelector((state) => state.products.isLoading);
  const { list: subcategories } = useSelector((state) => state.subcategories);
  const { products } = useSelector((state) => state.products);
 
  const categories = useSelector((state) => state.categories.list);
  const currentSubcategory = subcategories.find((category) => category.id === Number(id));
  
  const parentCategory = categories.find((category) => category.id === currentSubcategory?.parentId);
 
 
  const [sortOrder, setSortOrder] = useState('rating');
  useEffect(() => {
    if (currentSubcategory) {
      dispatch(clearProducts());
      dispatch(getCategories());
      dispatch(getBrands());
      dispatch(getProducts(currentSubcategory.id));
    }
  }, [dispatch, id]);

  const [layout, setLayout] = useState('quatro');

  const toggleLayout = () => {
    setLayout((prevLayout) => (prevLayout === 'quatro' ? 'triple' : 'quatro'));
  };

  if (isLoading && products === undefined || (Array.isArray(products) && products.length === 0)) {
    // If the data is still loading, show a spinner
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <FidgetSpinner
          visible={true}
          height="25%"
          width="25%"
          ariaLabel="dna-loading"
          wrapperStyle={{}}
          wrapperClass="dna-wrapper"
          ballColors={['#ff0000', '#00ff00', '#0000ff']}
          backgroundColor="#F4442E"
        />
      </div>
    );
  }


  const productss = [...(products.items || [])].sort((a, b) => {
    if (sortOrder === 'rating') {
      return a; // Сортування за рейтингом у спадаючому порядку
    } else if (sortOrder === 'expensiveToCheap') {
      return b.price - a.price; // Сортування від дорогих до дешевих
    } else if (sortOrder === 'cheapToExpensive') {
      return a.price - b.price; // Сортування від дешевих до дорогих
    }
    return 0;
  }).map((product) => (
    <Product key={product.id} product={product} layout={layout} />
  ));



  const toggleSortOrder = () => {
    if (sortOrder === 'rating') {
      setSortOrder('expensiveToCheap');
    } else if (sortOrder === 'expensiveToCheap') {
      setSortOrder('cheapToExpensive');
    } else {
      setSortOrder('rating');
    }
  };


  // Fetch categories when the component mounts

    return (
    <>
        <div className={styles.main__content}>
            <div className={styles.head__links}>
                <Link to={ROUTES.HOME}>
                    <img src={HOME} alt="" />
                </Link>
                /
                <div className={styles.category__link}>
                {currentSubcategory?.parentId !== undefined ? (
                    <NavLink to={`/categories/${currentSubcategory.parentId}`}>
                    <p>{parentCategory.title}</p>
                    </NavLink>
                ) : (
                    <p>Loading...</p> // You can replace this with your preferred loading state
                )}
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
                    <div>
                        <button onClick={toggleSortOrder} className={styles.head__sort}>
                            <div className={styles.head__sort_img}>
                            <img src={ARROWSORT} alt='rate'/>
                            </div>
                            <div className={styles.head__sort_name}>
                                <p>
                                    {sortOrder === 'rating' && 'За рейтингом'}
                                    {sortOrder === 'expensiveToCheap' && 'Від дорогих до дешевих'}
                                    {sortOrder === 'cheapToExpensive' && 'Від дешевих до дорогих'}
                                </p>
                            </div>
                        </button>
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
                {productss.length > 0 ? productss : <p style={{color:'black'}}>No products available</p>}
                </div>
            </div>
        </div>
    </>
  )
}

export default CategoryProducts


// import React, { useEffect, useState } from 'react'
// import { companies, laptops } from '../../features/productsData'
// import styles from '../../styles/CategoryProducts.module.css'
// import { Link, NavLink } from 'react-router-dom'
// import { ROUTES } from '../../utils/routes'
// import HOME from '../../images/categories/Home1.svg'
// import { useParams } from 'react-router-dom';
// import ARROWSORT from '../../images/catalog/arrow-sort.svg'
// import QUATRO from '../../images/catalog/quatro.svg'
// import TRIPLE from '../../images/catalog/triple.svg'
// import Filter from '../Filter/Filter'
// import Product from '../Product/Product'
// import { useDispatch, useSelector } from 'react-redux'
// import { getSubcategory } from '../../features/subcategories/subcategoriesSlice'


// const CategoryProducts = () => {
//     const { id, slug } = useParams();
//     const dispatch = useDispatch();

//   Just logic to go back to subcategories
//   const { list: subcategories } = useSelector((state) => state.subcategories);
//   const currentSubcategory = subcategories.find((category) => category.id === Number(id));
//   useEffect(() => {
//     dispatch(getSubcategory(Number(currentSubcategory.parentId)));
//   }, [dispatch, id]);



//     const [layout, setLayout] = useState('quatro');

//     const toggleLayout = () => {
//         setLayout((prevLayout) => (prevLayout === 'quatro' ? 'triple' : 'quatro'));
//       };

//       const products = (slug === 'Ноутбуки' ? laptops : []).map((product) => (
//         <Product key={product.id} product={product} layout={layout} />
//       ));
      

//     return (
//     <>
//         <div className={styles.main__content}>
//             <div className={styles.head__links}>
//                 <Link to={ROUTES.HOME}>
//                     <img src={HOME} alt="" />
//                 </Link>
//                 /
//                 <div className={styles.category__link}>
//                     <NavLink to={`/categories/${currentSubcategory?.parentId}`}><p>Ноутбуки та комп’ютери</p></NavLink>
//                 </div>
//                 /
//                 <div className={styles.category__link}>
//                     <p>{slug}</p>
//                 </div>
//                 </div>
//                 <div className={styles.head__companies}>
//                 {companies.map((company) => (
//                     <div key={company.id} className={styles.company}>
//                         <img src={company.imageSrc} className={styles.company__img} alt='company'/> 
//                     </div>
//                 ))}
//             </div>
//             <div className={styles.head__catalog}>
//                 <div className={styles.head__title}>
//                     <h1>{slug}</h1>
//                 </div>
//                 <div className={styles.head__right}>
//                     <div className={styles.head__sort}>
//                         <div className={styles.head__sort_img}>
//                             <img src={ARROWSORT} alt='rate'/>
//                         </div>
//                         <div className={styles.head__sort_name}>
//                             <p>За рейтингом</p>
//                         </div>
//                     </div>
//                     <div className={styles.head__sort_triple}>
//                     <button onClick={toggleLayout}>
//                         <img src={layout === 'triple' ? TRIPLE : QUATRO} alt="layout" />
//                     </button>
//                     </div>  
//                 </div>                
//             </div>
            
//             <div className={styles.product__view}>
//                 <Filter/>
//                 <div className={`${styles.product__list} ${styles.products} ${styles[layout + 'Layout']}`}>
//                      {products}
//                 </div>
//             </div>
//         </div>
//     </>
//   )
// }

// export default CategoryProducts