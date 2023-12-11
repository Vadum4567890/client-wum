import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios";
import { BASE_URL } from "../../utils/constants";

export const getCategories = createAsyncThunk('Categories', 
    async(_, thunkApi) => {
        try {
            const res = await axios(`${BASE_URL}/Categories/GetAllCategories`,{
                params: {ParentId: 0}
            });
            console.log(res);
            return res.data;
            
        } catch(err) {
            console.log(err);
            return thunkApi.rejectWithValue(err);
        }
    }
);


const categoriesSlice = createSlice({
    name: 'Categories',
    initialState: {
        list: [],
        isLoading: false,
    },
    extraReducers: (builder) => {
        builder.addCase(getCategories.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(getCategories.fulfilled, (state, {payload}) => {
            state.list = payload;
            state.isLoading = false;
        })
        builder.addCase(getCategories.rejected, (state) => {
            state.isLoading = false;
        });
       
    }
})

export default categoriesSlice.reducer;

