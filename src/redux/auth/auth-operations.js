import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  addUser,
  token,
  loginUser,
  logOutUser,
  checkUser,
} from "../../utils/servises/authApi";

export const register = createAsyncThunk(
  "auth/register",
  async (credentials, { rejectWithValue }) => {
    console.log("credentials-->", credentials);
    try {
      const { data } = await addUser(credentials);
      token.set(data.token);
      return data;
    } catch (error) {
      if (error.response.status === 400) {
        alert("Something wrong! Please, try another e-mail");
        return rejectWithValue("Something wrong! Please, try another e-mail");
      }
      return rejectWithValue(error.message);
    }
  }
);

export const login = createAsyncThunk(
  "auth/login",
  async (credentials, { rejectWithValue }) => {
    console.log(credentials);
    try {
      const { data } = await loginUser(credentials);
      token.set(data.token);
      return data;
    } catch (error) {
      if (error.response.status === 400) {
        alert("Wrong email or password!");
        return rejectWithValue("Wrong email or password!");
      }
      return rejectWithValue(error.message);
    }
  }
);

export const logOut = createAsyncThunk(
  "auth/logOut",
  async (_, { rejectWithValue }) => {
    try {
      await logOutUser();
      token.unset();
    } catch (error) {
      if (error.response.status === 400) {
        alert("Something wrong! Please, try again later!");
        return rejectWithValue("Something wrong! Please, try again later!");
      }
      return rejectWithValue(error.message);
    }
  }
);

export const checkCurrentUser = createAsyncThunk(
  "auth/checkUser",
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();

    const currentUserToken = state.auth.token;

    if (currentUserToken === null) return thunkAPI.rejectWithValue();

    token.set(currentUserToken);

    try {
      const { data } = await checkUser();
      return data;
    } catch (error) {
      if (error.response.status === 400) {
        alert("Something wrong");
        return thunkAPI.rejectWithValue("Something wrong");
      }
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// export const change = createAsyncThunk(
//   "auth/change",
//   async (credentials, { rejectWithValue }) => {
//     console.log(credentials);
//     try {
//       const { data } = await changeUser(credentials);
//       console.log(data);
//       token.set(data.token);
//       return data;
//     } catch (error) {
//       if (error.response.status === 400) {
//         alert("Wrong email or password!");
//         return rejectWithValue("Wrong email or password!");
//       }
//       return rejectWithValue(error.message);
//     }
//   }
// );
