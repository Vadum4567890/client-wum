import React, { useEffect, useState } from 'react';
import styles from '../../styles/Header.module.css';

import { Link, useLocation, useNavigate } from 'react-router-dom';

import { ROUTES } from '../../utils/routes';

import LOGO from '../../images/MainLogo.svg';
import SEARCH from '../../images/search.svg';
import SHOPPINGCART from '../../images/header/ShoppingCart2.svg';
import HEART from '../../images/header/Heart.svg';
import ACCOUNT from '../../images/header/User.svg';
import LOCATION from '../../images/header/Location.svg';
import { useDispatch, useSelector } from 'react-redux';
import { toggleForm } from '../../features/user/userSlice';
import UserForm from '../User/UserForm';
import { useTranslation } from 'react-i18next';
import i18n from 'i18next';
import LikedProductsWindow from '../AdditionalComponents/LikedProductWindow/LikedProductWindow';
import { clearSearchedProducts, getSearchedProducts } from '../../features/products/productsSlice';



const Header = () => {
    const { t } = useTranslation();
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const { currentUser } = useSelector(({user})=> user);
    const { cart } = useSelector(({ user }) => user);
    const [selectedLanguage, setSelectedLanguage] = useState(i18n.language);
    const location = useLocation(); // Використовуємо useLocation для отримання поточного шляху
    const [searchText, setSearchText] = useState(''); // Стан для відстеження тексту пошуку
    const [, setSearchResults] = useState([]);
    const [, setIsFocused] = useState(false);
    const searchedProducts = useSelector((state) => state.products.searchedProducts);
    const [likedProductsWindowOpen, setLikedProductsWindowOpen] = useState(false);


    const handleClick = () => {
        if (!currentUser) dispatch(toggleForm(true));
    }

    const handleLanguageChange = (language) => {
      i18n.changeLanguage(language);
      setSelectedLanguage(language);
    };


  
  const handleLikedProductsClick = () => {
    setLikedProductsWindowOpen((prevOpen) => !prevOpen);
  };

  const closeLikedProductsWindow = () => {
    setLikedProductsWindowOpen(false);
  };



  
  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  useEffect(() => {
    setSearchResults(searchedProducts);
  }, [searchedProducts]);

  const handleSearchChange = (event) => {
    const text = event.target.value;
    setSearchText(text);
    try {
        dispatch(getSearchedProducts(text));
      } catch (error) {
        console.error('Error searching for products:', error);
      }
  };
  const handleSearchSubmit = (event) => {
    event.preventDefault();
    console.log('Searching for:', searchText);
    setSearchResults([]);
  };
  const handleClearSearch = () => {
    dispatch(clearSearchedProducts());
  };

  const shortenedName = (product) => {
    if (product.name && typeof product.name === 'string') {
      return product.name.length > 30
        ? product.name.substring(0, 30)+".."
        : product.name;
    } else {
      return 'Невідомо';
    }
  }

  const onNavigate = (id) => {
    navigate(id+"/about");
  };

  const totalQuantity = cart.reduce((total, currentItem) => total + currentItem.quantity, 0);

  return (
    <>
    <div className={styles.header}>
        <div className={styles.headercontent}>
            <div className={styles.LOGO}>
                <Link to={ROUTES.HOME}> 
                    <img src={LOGO} alt="WUM" />
                </Link>
            </div>
            <div className={styles.chooselocation}>
                <div className={styles.city}>
                    <img src={LOCATION} alt="locationimg" />
                    <form>
                        <select>
                        <option value="lviv">{t('header.city.lviv')}</option>
                        <option value="kyiv">{t('header.city.kyiv')}</option>
                        <option value="kharkiv">{t('header.city.kharkiv')}</option>
                        </select>
                    </form>
                </div>
            </div>
            <div>
               <form className={styles.form} onSubmit={handleSearchSubmit}>
                    <div className={styles.input}>
                        <input 
                            placeholder={t('header.placeholder')}
                            type="search" 
                            name="search" 
                            autoComplete="off"
                            onChange={handleSearchChange}
                            onFocus={handleFocus}
                            onBlur={handleBlur}
                        />
                        </div>
                        <div onClick={handleClearSearch} className={styles.icon}>
                    <img src={SEARCH} alt="searchbtn"/>
                    </div>
                </form>
                {location.pathname === '/' && searchText !== '' && searchedProducts.items  && (
                    <div className={styles.searchResults}>
                    {searchedProducts.items.slice(0, 6).map((result) => (
                        <div className={styles.item} key={result.id} onClick={()=> {onNavigate(result.id)}}>
                            <div className={styles.searched__image}><img src={result.imagePath} alt="" /></div>
                            <div className={styles.searched__text}>{shortenedName(result)}</div>
                        </div>
                    ))}
                    </div>
                )}
            </div>
            <div className={styles.language}>
                <Link to={ROUTES.EN}>
                    <button onClick={() => handleLanguageChange('en')}
                    style={{ color: selectedLanguage === 'ua' ? 'black' : '#F34A25' }}>{t('header.en')
                    }</button>
                </Link>
                <p>|</p>
                <Link to={ROUTES.UA}>
                    <button onClick={() => handleLanguageChange('ua')}
                    style={{ color: selectedLanguage === 'ua' ? '#F34A25' : 'black' }}>{t('header.ua')}</button>
                </Link>
            </div>
            <div className={styles.account}>
            {
                localStorage.getItem('token') !== null ? (
                    <Link to={ROUTES.PROFILE} className={styles.accounticon}>
                        <img src={ACCOUNT} alt="account" />
                    </Link>
                ) : (
                    <Link className={styles.accounticon} onClick={handleClick}>
                        <img src={ACCOUNT} alt="account" />
                    </Link>
                )
            }
                <button className={styles.cart} onClick={handleLikedProductsClick}>
                    <img src={HEART} alt="heart" />
                    <LikedProductsWindow isOpen={likedProductsWindowOpen} onClose={closeLikedProductsWindow} />
                </button>
                
                <Link to={ROUTES.CART} className={styles.cart}>
                    <img src={SHOPPINGCART} alt="shopping cart"/>
                    <span className={styles.count}>{totalQuantity}</span>
                </Link>
            
            </div>
        </div>
    </div>
    <UserForm/>
 </>
  )
}

export default Header