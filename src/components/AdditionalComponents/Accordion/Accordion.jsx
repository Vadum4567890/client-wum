import React, { useState } from 'react';
import styles from '../../../styles/AdditionalComponents/Accordion.module.css';
import TICK from '../../../images/TICKB.svg';
const Accordion = ({ items }) => {
  const [openIndex, setOpenIndex] = useState(null);
  const [selectedOptions, setSelectedOptions] = useState({});

  const handleToggle = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const handleOptionSelect = (itemTitle, option, index) => {
    setSelectedOptions((prevSelected) => ({
      ...prevSelected,
      [itemTitle]: option,
    }));
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
    console.log(itemTitle,option);
  };

  return (
    <div className={styles.accordion}>
      {items.map((item, index) => (
        <div
          key={index}
          className={`${styles.item} ${openIndex === index ? styles.open : ''}`}
        >
          <div className={styles.header} onClick={() => handleToggle(index)}>
            <div>{item.title}</div>
            <img style={{ transform: openIndex === index ? 'rotate(-180deg)' : 'none' }} src={TICK} alt='tick' />
          </div>
          <div className={styles.content}>
            {openIndex === index && (
              <ul>
                {item.content.map((itemContent, subIndex) => (
                  <li
                    key={subIndex}
                    className={`${styles.option} ${
                      selectedOptions[item.title] === itemContent ? styles.selected : ''
                    }`}
                    onClick={() => handleOptionSelect(item.title, itemContent, index)}
                  >
                    {itemContent}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
