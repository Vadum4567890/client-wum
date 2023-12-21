import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios";
import { CATALOG_URL } from "../../utils/constants";

export const selectProducts = (state) => state.products.products || [];

export const getProducts = createAsyncThunk('products/products', 
    async(idcategory, limit, thunkApi) => {
        try {
            const res = await axios(`${CATALOG_URL}/Products/FindAllProducts`,{
                params: {categoryId: idcategory, limit:limit}
            });
            return res.data;
        } catch(err) {
            console.log(err);
            return thunkApi.rejectWithValue(err);
        }
    }
);


export const getProduct = createAsyncThunk('products/product', 
    async(id, thunkApi) => {
        try {
            const res = await axios(`${CATALOG_URL}/Products/${id}`);
            return res.data;
        } catch(err) {
            console.log(err);
            return thunkApi.rejectWithValue(err);
        }
    }
);

export const getSearchedProducts = createAsyncThunk('products/search', 
    async(searchedText, categoryId, thunkApi) => {
        try {
            const res = await axios(`${CATALOG_URL}/Products/FindAllProducts`, {
                params: { filter: searchedText, categoryId: categoryId }
            });
            return res.data;
        } catch (err) {
            console.log(err);
            return thunkApi.rejectWithValue(err);
        }
    }
);


const productsSlice = createSlice({
    name: 'products',
    initialState: {
        products: [],
        isLoading: false,
        error: null,    
        productDetails: null,
        searchedProducts: []
    },
    reducers: {
        getProductsStart: (state) => {
            state.isLoading = true;
          },
          getProductsSuccess: (state, action) => {
            state.products = action.payload;
            state.isLoading = false;
          },
          getProductsFailure: (state) => {
            state.isLoading = false;
          },
          clearProducts: (state) => {
            state.products = [];
          },
          clearSearchedProducts: (state) => {
            state.searchedProducts = [];
          },
    },
    extraReducers: (builder) => {
        builder.addCase(getProducts.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(getProducts.fulfilled, (state, {payload}) => {
            state.products = payload;
            state.isLoading =  false;
        })
        builder.addCase(getProducts.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error.message; // Extract the error message
        });


        builder.addCase(getProduct.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(getProduct.fulfilled, (state, action) => {
            state.error = null;
            state.productDetails = action.payload;
            state.isLoading = false;
        })
        builder.addCase(getProduct.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error.message; // Extract the error message
        });

        // Search for products
        builder.addCase(getSearchedProducts.pending, (state) => {
            state.isLoading = true;
          });
        builder.addCase(getSearchedProducts.fulfilled, (state, { payload }) => {
            state.searchedProducts = payload;
            state.isLoading = false;
        });
        builder.addCase(getSearchedProducts.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error.message;
        });
    }
})
export const { getProductsStart, getProductsSuccess, getProductsFailure, clearProducts, clearSearchedProducts } = productsSlice.actions;
export default productsSlice.reducer;

