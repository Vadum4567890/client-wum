import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios";
import { BASE_URL } from "../../utils/constants";



export const getSubcategory = createAsyncThunk(
    'Subcategories',
    async (categoryId, thunkApi) => {
        try {
        const res = await axios.get(`${BASE_URL}/Categories/GetAllCategories`, {
            params: { ParentId: categoryId }
        });
    
        return res.data;
        } catch (err) {
        console.log(err);
        return thunkApi.rejectWithValue(err);
        }
    }
);



const subcategoriesSlice = createSlice({
    name: 'Subcategories',
    initialState: {
        list: [],
        isLoading: false,
    },
    extraReducers: (builder) => {
        builder.addCase(getSubcategory.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(getSubcategory.fulfilled, (state, { payload }) => {
            state.list = payload;
            state.isLoading = false;
        });
        builder.addCase(getSubcategory.rejected, (state) => {
            state.isLoading = false;
        });
    }
})

export default subcategoriesSlice.reducer;