import { configureStore } from "@reduxjs/toolkit";
import categoriesSlice from "./categories/categoriesSlice";
import userSlice from "./user/userSlice";
import subcategoriesSlice from "./subcategories/subcategoriesSlice";
import productsSlice from "./products/productsSlice";
import brandsSlice from "./brands/brandsSlice";

export const store = configureStore({
    reducer: {
        categories: categoriesSlice,
        user: userSlice,
        subcategories: subcategoriesSlice,
        products: productsSlice,
        brands: brandsSlice
    },
    devTools: true
});