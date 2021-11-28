import { createSlice } from "@reduxjs/toolkit";
import {
  register,
  login,
  logOut,
  checkCurrentUser,
  change,
} from "./auth-operations";

const initialState = {
  user: { name: null, email: null, password: null },
  token: null,
  isLoggedIn: false,
  isCheckingUser: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: {
    [register.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },

    [login.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },

    [logOut.fulfilled](state, action) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
    },

    [checkCurrentUser.pending](state) {
      state.isCheckingUser = true;
    },

    [checkCurrentUser.fulfilled](state, action) {
      state.user = action.payload;
      state.isLoggedIn = true;
      state.isCheckingUser = false;
    },
    [checkCurrentUser.rejected](state) {
      state.isCheckingUser = false;
    },
  },
});

export default authSlice.reducer;
