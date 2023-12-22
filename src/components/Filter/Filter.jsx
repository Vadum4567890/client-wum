import React, { useEffect, useState } from 'react';
import styles from '../../styles/Filter.module.css';

import Accordion from '../AdditionalComponents/Accordion/Accordion';
import { useDispatch, useSelector } from 'react-redux';
import { getBrands } from '../../features/brands/brandsSlice';

const Filter = ({onBrandChange, selectedBrand, handleClearBrandFilter}) => {
  

  const [, setSelectedFilters] = useState({});


  const dispatch = useDispatch();
  const { brands, isLoading } = useSelector((state) => state.brands);

  useEffect(() => {
    dispatch(getBrands());
  }, [dispatch]);

  const handleFilterChange = (filterName, selectedOption) => {

    setSelectedFilters((prevSelected) => ({
      ...prevSelected,
      [filterName]: selectedOption,
    }));
    if (onBrandChange) {
      // Find the brand object based on the selected option (brand title)
      const selectedBrand = brands.find((brand) => brand.title === selectedOption);
      // Check if the brand is found and call the callback with the brand object
      if (selectedBrand) {
        onBrandChange(selectedBrand);
      }
      
    }
  };


  const brandFilters = brands.map((brand) => brand.title);
  const initialFilters = [
    { title: 'Бренди', content: brandFilters },
    { title: 'Ціна', content: ['До 1000', '1000-2000', '2000-3000'] },
    { title: 'Країна-виробник', content: ['Ukraine', 'Germany', 'USA', "Poland"]}
  ];

  return (
    <div className={styles.container}>
      <div className={styles.filter__title}>
        <h3>Фільтри</h3>
      </div>
      <div className={styles.clear__filters}>
      {selectedBrand && (
          <button onClick={handleClearBrandFilter}>
              x
          </button>
       )}
      </div>
      {isLoading ? (
          <p>Loading brands...</p>
        ) : (
          <Accordion items={initialFilters} onFilterChange={handleFilterChange}  />
        )}
    </div>
  );
};

export default Filter;
