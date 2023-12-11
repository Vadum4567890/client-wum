import { configureStore } from "@reduxjs/toolkit";
import categoriesSlice from "./categories/categoriesSlice";
import userSlice from "./user/userSlice";
import subcategoriesSlice from "./subcategories/subcategoriesSlice";

export const store = configureStore({
    reducer: {
        categories: categoriesSlice,
        user: userSlice,
        subcategories: subcategoriesSlice
    },
    devTools: true
});