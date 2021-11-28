import { createAsyncThunk } from "@reduxjs/toolkit";
import { getContacts } from "../../utils/servises/authApi";

import axios from "axios";
import {
  getContactRequest,
  getContactSuccsess,
  getContactError,
  addContactRequest,
  addContactSuccsess,
  addContactError,
  deleteContactRequest,
  deleteContactSuccsess,
  deleteContactError,
  changeContactRequest,
  changeContactSuccsess,
  changeContactError,
} from "./contacts-actions";

export const fetchContacts = createAsyncThunk("contacts/fetch", async () => {
  try {
    const { data } = await getContacts();
    console.log(data);
    return data;
  } catch (error) {
    alert(error.message);
  }
});

// export const getContacts = () => (dispatch) => {
//   axios.get("/contacts").then(({ data }) => dispatch(getContactSuccsess(data)));
// };

export const addContact =
  ({ name, number }) =>
  (dispatch) => {
    const items = {
      name: name,
      number: number,
    };

    dispatch(addContactRequest());

    axios
      .post("/contacts", items)
      .then(({ data }) => dispatch(addContactSuccsess(data)))
      .catch((error) => dispatch(addContactError(error)));
  };

export const deleteContact = (id) => (dispatch) => {
  dispatch(deleteContactRequest());
  axios
    .delete(`/contacts/${id}`)
    .then(() => dispatch(deleteContactSuccsess(id)))
    .catch((error) => dispatch(deleteContactError(error)));
};

export const changeContact =
  ({ id, ...user }) =>
  (dispatch) => {
    dispatch(changeContactRequest());
    axios
      .patch(`/contacts/${id}`, user)
      .then(() => dispatch(changeContactSuccsess({ id, ...user })))
      .catch((error) => dispatch(changeContactError(error)));
  };
