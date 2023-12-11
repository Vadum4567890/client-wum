import React from 'react'
import styles from '../../styles/SubCategory.module.css'
import ARROW from '../../images/categories/subcategories/icons/RightArrow.svg'
import { NavLink } from 'react-router-dom'


const SubCategory = ({subcategory}) => (
    <>
        <div className={styles.subcategory}>
            <div className={styles.sub__img}>
                <img src={subcategory.uploadedFileIcon.filePath} alt={subcategory.iconSrc}/>
            </div>
            <div className={styles.subcategory__title}>
                <p>{subcategory.title}</p>
            </div>
            <div className={styles.subcategory__img}>
                <NavLink to={`/categories/${subcategory.id}/${subcategory.title}`}>
                    <img src={subcategory.uploadedFiles.filePath} alt=''/>
                </NavLink>
            </div>
            <div className={styles.subcategory__arrow}>
                <NavLink to={`/categories/${subcategory.id}/${subcategory.title}`}>
                    <img src={ARROW} alt='arrow'/>
                </NavLink>
            </div>
        </div>
    </>
)
export default SubCategory