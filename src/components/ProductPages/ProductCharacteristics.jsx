import React from 'react'
import ProductHead from './ProductHead'
import styles from "../../styles/ProductPage.module.css";
import { useParams } from 'react-router-dom';
const ProductCharacteristics = () => {
    const { id } = useParams();

  return (
    <div className={styles.container}>
        <div>
          <p style={{color:'red'}}>MEasds</p>
        </div>
    </div>
  )
}

export default ProductCharacteristics