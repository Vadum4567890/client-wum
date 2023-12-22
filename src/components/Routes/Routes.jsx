import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home  from '../Home/Home';
import { ROUTES } from '../../utils/routes';
import Profile from '../Profile/Profile';
import Category from '../Category/Category';
import CategoryProducts from '../CategoryProducts/CategoryProducts';
import PageNotFound from '../PageNotFound/PageNotFound';
import ProductPage from '../ProductPages/ProductPage';
import Cart from '../Cart/Cart';
import ProtectedRoute from '../../features/protectedroute/protectedRoute';
import Checkout from '../Checkout/Checkout';
import SuccessPage from '../SuccessPage/SuccessPage';


const AppRoutes = () => (
    <Routes>
        <Route index element={<Home/>}/>
        <Route path={ROUTES.PROFILE} element={<Profile />}/>
        <Route path={ROUTES.CATEGORY} element={<Category />}/>
        <Route path={ROUTES.PRODUCTS} element={<CategoryProducts />}/>
        <Route path={ROUTES.PRODUCTPAGE} element={<ProductPage />}/>
        <Route path={ROUTES.ERROR} element={<PageNotFound />}/>
        <Route path={ROUTES.CART} element={<Cart />} />
        <Route element={<ProtectedRoute />}>
            <Route path={ROUTES.CHECKOUT}  element={<Checkout />} />
            <Route path={ROUTES.SUCCESS} element={<SuccessPage />} />
        </Route>
    </Routes>
)
export default AppRoutes;