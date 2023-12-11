import React, { useState } from 'react';
import styles from '../../styles/Filter.module.css';

import Accordion from '../AdditionalComponents/Accordion/Accordion';

const Filter = () => {
  const initialFilters = [
    { title: 'Бренди', content: ['Asus', 'HP', 'Dell'] },
    { title: 'Ціна', content: ['До 1000', '1000-2000', '2000-3000'] },
    { title: 'Країна-виробник', content: ['Ukraine', 'Germany', 'USA', "Poland"]}
  ];

  const [selectedFilters, setSelectedFilters] = useState({});

  const handleFilterChange = (filterName, selectedOption) => {
    setSelectedFilters((prevSelected) => ({
      ...prevSelected,
      [filterName]: selectedOption,
    }));
  };

  return (
    <div className={styles.container}>
      <div className={styles.filter__title}>
        <h3>Фільтри</h3>
      </div>
      <div className={styles.filter__blocks}>
        <Accordion items={initialFilters}/>
      </div>
    </div>
  );
};

export default Filter;
