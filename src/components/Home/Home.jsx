import React, { useEffect } from 'react'
import styles from '../../styles/App.module.css';
import Sidebar from '../Sidebar/Sidebar';
import SlideBlock from '../Novelty/SlideBlock';
import TopSells from '../Products/TopSells';
import Headphones from '../MainProducts/Headphones/Headphones.jsx';
import HotProducts from '../Products/HotProducts/HotProducts';
import Jacket from '../MainProducts/Jacket/Jacket';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../features/products/productsSlice.js';
import { FidgetSpinner } from 'react-loader-spinner';


const Home = () => {
  const dispatch = useDispatch();
  const products  = useSelector((state) => state.products.products.items);
  const { isLoading } = useSelector((state) => state.products);
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  if (isLoading && !products) {
    return (
      <div className={styles.App}>
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
  return (
    <div className={styles.App}>
        <div className={styles.container}>
            <Sidebar />
            <SlideBlock/>
        </div>
        <div className={styles.container}>
            <TopSells products={products} isLoading={isLoading}/>
        </div>
        <Headphones/>
        <div className={styles.container}>
            <HotProducts products={products} isLoading={isLoading}/>
        </div>
        <Jacket/>
    </div>
  )
}

export default Home