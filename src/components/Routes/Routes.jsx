import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home  from '../Home/Home';
import { ROUTES } from '../../utils/routes';
import Profile from '../Profile/Profile';
import Category from '../Category/Category';

const AppRoutes = () => (
    <Routes>
        <Route index element={<Home/>}/>
        <Route path={ROUTES.PROFILE} element={<Profile />} />
        <Route path={ROUTES.CATEGORY} element={<Category/>}/>
    </Routes>
)
export default AppRoutes;