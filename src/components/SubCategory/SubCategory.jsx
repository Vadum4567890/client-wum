import React from 'react'
import styles from '../../styles/SubCategory.module.css'

import NOTEBOOK from '../../images/categories/subcategories/icons/Notebook.svg'
import ARROW from '../../images/categories/subcategories/icons/RightArrow.svg'
import NOTEBOOKFULL from '../../images/categories/subcategories/NotebookFull.svg'
import { NavLink } from 'react-router-dom'


const SubCategory = () => (
    <>
        <div className={styles.subcategory}>
            <div className={styles.sub__img}>
                <img src={NOTEBOOK} alt={NOTEBOOK}/>
            </div>
            <div className={styles.subcategory__title}>
                <p>Ноутбуки</p>
            </div>
            <div className={styles.subcategory__img}>
                <NavLink>
                    <img src={NOTEBOOKFULL} alt=''/>
                </NavLink>
            </div>
            <div className={styles.subcategory__arrow}>
                <NavLink>
                    <img src={ARROW} alt=''/>
                </NavLink>
            </div>
        </div>
    </>
)
export default SubCategory