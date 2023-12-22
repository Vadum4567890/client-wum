import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getCategories } from '../../features/categories/categoriesSlice';
import { Audio } from 'react-loader-spinner';
import styles from '../../styles/Aside.module.css';

const Sidebar = () => {
  const { list, isLoading } = useSelector((state) => state.categories);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories());
    
  }, [dispatch]);

  return (
    <>
      <aside className={styles.asidebar}>
        <div className={styles.listofcategories}>
          {isLoading ? (
          <Audio
            height="180"
            width="180"
            radius="9"
            color="orange"
            ariaLabel="loading"
          /> 
          ) : (
            list.map((category, index) => (
              <NavLink key={index} to={`/categories/${category.id}`} className={styles.category}>
                <img src={category.uploadedFiles.filePath} alt={category.title} />
                <h1 className={styles.name}>{category.title}</h1>
              </NavLink>
            ))
          )}
        </div>
      </aside>
    </>
  );
};

export default Sidebar;