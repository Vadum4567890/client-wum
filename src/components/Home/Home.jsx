import React from 'react'
import styles from '../../styles/App.module.css';
import UserForm from '../User/UserForm';
import Sidebar from '../Sidebar/Sidebar';
import SlideBlock from '../Novelty/SlideBlock';
import TopSells from '../Products/TopSells';
import Headphones from '../MainProducts/Headphones/Headphones.jsx';
import HotProducts from '../Products/HotProducts/HotProducts';
import Jacket from '../MainProducts/Jacket/Jacket';
const Home = () => {
  return (
    <div className={styles.App}>
        <div className={styles.container}>
            <Sidebar />
            <SlideBlock/>
        </div>
        <div className={styles.container}>
            <TopSells/>
        </div>
        <Headphones/>
        <div className={styles.container}>
            <HotProducts/>
        </div>
        <Jacket/>
    </div>
  )
}

export default Home