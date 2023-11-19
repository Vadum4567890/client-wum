import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home  from '../Home/Home';
import { ROUTES } from '../../utils/routes';
import Profile from '../Profile/Profile';
import Category from '../Category/Category';
import CategoryProducts from '../CategoryProducts/CategoryProducts';
import PageNotFound from '../PageNotFound/PageNotFound';
import ProductPage from '../ProductPages/ProductPage';
import ProductCharacteristics from '../ProductPages/ProductCharacteristics';
import Cart from '../Cart/Cart';


const AppRoutes = () => (
    <Routes>
        <Route index element={<Home/>}/>
        <Route path={ROUTES.PROFILE} element={<Profile />}/>
        <Route path={ROUTES.CATEGORY} element={<Category />}/>
        <Route path={ROUTES.PRODUCTS} element={<CategoryProducts />}/>
        <Route path={ROUTES.PRODUCTPAGE} element={<ProductPage />}/>
        <Route path={ROUTES.ERROR} element={<PageNotFound />}/>
        <Route path={ROUTES.CART} element={<Cart />} />
    </Routes>
)
export default AppRoutes;