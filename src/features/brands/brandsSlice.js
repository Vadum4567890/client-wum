import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios";
import { CATALOG_URL } from "../../utils/constants";

export const getBrands = createAsyncThunk('Brands', 
    async(_, thunkApi) => {
        try {
            const res = await axios(`${CATALOG_URL}/Products/GetAllBrands`);
            console.log(res.data);
            return res.data;
            
        } catch(err) {
            console.log(err);
            return thunkApi.rejectWithValue(err);
        }
    }
);


const brandsSlice = createSlice({
    name: 'Brands',
    initialState: {
        brands: [],
        isLoading: false,
    },
    extraReducers: (builder) => {
        builder.addCase(getBrands.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(getBrands.fulfilled, (state, {payload}) => {
            state.brands = payload;
            state.isLoading = false;
        })
        builder.addCase(getBrands.rejected, (state) => {
            state.isLoading = false;
        });
       
    }
})

export default brandsSlice.reducer;

