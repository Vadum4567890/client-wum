import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../../utils/constants";
import { jwtDecode } from "jwt-decode";

export const createUser = createAsyncThunk(
  "users/createUser",
  async (payload, thunkAPI) => {
    try {
      const res = await axios.post(`${BASE_URL}/Auth/Register`, payload);
      let receivedAccessToken = res.data.token;
      let receivedRefreshToken = res.data.refreshToken;
      localStorage.setItem('refreshToken', receivedRefreshToken);
      localStorage.setItem('token', receivedAccessToken);
      const decoded = jwtDecode(localStorage.getItem('token')|| '');
      thunkAPI.dispatch(createUser(decoded));
      return res.data;
    } catch (err) {
      console.log(err);
      return thunkAPI.rejectWithValue(err);
    }
  }
);
//check jwt token
export const setAuthToken = token => {
  if (token) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  }
  else
      delete axios.defaults.headers.common["Authorization"];
  }

export const loginUser = createAsyncThunk(
  "users/loginUser",
  async (payload, thunkAPI) => {
    try {
      const res = await axios.post(`${BASE_URL}/Auth/Login`, payload);
      setAuthToken(res.data.token);
     
      localStorage.setItem('refreshToken', res.data.refreshToken);
      localStorage.setItem('token', res.data.token);

      const decoded = jwtDecode(localStorage.getItem('token')|| '');
      thunkAPI.dispatch(loginUser(decoded));
      // localStorage.setItem("user", JSON.stringify(res.data.user));
      // console.log(res.data);
      // console.log(res.headers.get('bearer'))
      // Return user data
      return res.data;
    } catch (err) {
      console.log(err);
      return thunkAPI.rejectWithValue(err);
    }
  }
);



// export const updateUser = createAsyncThunk(
//   "users/updateUser",
//   async (payload, thunkAPI) => {
//     try {
//       const res = await axios.put(`${BASE_URL}/Users/${payload.id}`, payload);
//       return res.data;
//     } catch (err) {
//       console.log(err);
//       return thunkAPI.rejectWithValue(err);
//     }
//   }
// );


const initialState = {
  currentUser: null,
  cart: JSON.parse(localStorage.getItem('cart')) || [],
  isLoading: false,
  formType: "signup",
  showForm: false,
  isAuthorized: false,
  likes: []
};



const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    
    initializeCartFromLocalStorage: (state) => {
      const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
      state.cart = storedCart;
    },

    addItemToCart: (state, { payload }) => {
      let newCart = [...state.cart];
      const found = state.cart.find(({ id }) => id === payload.id);

      if (found) {
        newCart = newCart.map((item) => {
          return item.id === payload.id
            ? { ...item, quantity: payload.quantity || item.quantity + 1 }
            : item;
        });
      } else newCart.push({ ...payload, quantity: 1 });
      state.cart = newCart;
      localStorage.setItem('cart', JSON.stringify(newCart));
    },
    removeItemFromCart: (state, { payload }) => {
      state.cart = state.cart.filter(({ id }) => id !== payload);
      localStorage.setItem('cart', JSON.stringify(state.cart));
    },
  
    logOut: (state) => {
      state.currentUser = null;
      localStorage.removeItem('token');
      localStorage.removeItem('refreshToken');
      state.isAuthorized = false;
    },
    toggleForm: (state, { payload }) => {
      state.showForm = payload;
    },
    toggleFormType: (state, { payload }) => {
      state.formType = payload;
    },
  },
  extraReducers: (builder) => {
    builder
    .addCase(createUser.fulfilled, (state, action) => {
      state.isLoading= false;
      state.currentUser = action.payload.user;
      state.isAuthorized = true;
    })
    .addCase(loginUser.fulfilled, (state, action) => {
      state.isLoading= false;
      state.currentUser = action.payload;
      state.isAuthorized = true;
    })
    .addCase(createUser.rejected, (state) => {
      state.isLoading = false;
      state.currentUser = null;
    })
    .addCase(loginUser.rejected, (state, action) => {
      state.isLoading = false;

      state.currentUser = null;
    });
   
   // builder.addCase(updateUser.fulfilled, addCurrentUser);
  },
});

export const { toggleForm, toggleFormType, logOut, addItemToCart, removeItemFromCart, initializeCartFromLocalStorage } = userSlice.actions;
export default userSlice.reducer;



// const  authslice = createSlice({
//   name: "auth",
//   initialState: {user: null, token:null},
//   reducers: {
//     setCredentials: (state, action) => {
//       const {user, accessToken} = action.payload;
//       state.user = user;
//       state.token = accessToken;
//     },
//     logOut: (state, action) => {
//       state.user = null;
//       state.token = null;
//     }
//   },
// })

// export const {setCredentials, logOut} = authslice.actions

// export default authslice.reducer

// export const selectCurrentUser = (state) => state.auth.user

// export const selectCurrentToken = (state) => state.auth.token

