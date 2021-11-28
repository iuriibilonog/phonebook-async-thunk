import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts } from "./contacts-operation";
import changeFilter from "./contacts-actions";

const initialState = {
  items: [],
  filter: "",
  isLoading: false,
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  extraReducers: {
    [fetchContacts.pending](state) {
      state.isLoading = true;
    },

    [fetchContacts.fulfilled](state, action) {
      state.items = action.payload;
      state.isLoading = false;
      console.log(state.items);
    },
    [fetchContacts.rejected](state) {
      state.isLoading = false;
    },
    [changeFilter](state, action) {
      state.filter = action.payload;
      console.log("ok");
    },
  },
});

export default contactsSlice.reducer;
