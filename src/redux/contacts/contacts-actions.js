import { createAction } from "@reduxjs/toolkit";
import types from "./contacts-type";
// import { v4 } from "uuid";

// const addNewContact = createAction(types.ADD, ({ name, number }) => ({
//   payload: {
//     id: v4(),
//     name: name,
//     number: number,
//   },
// }));

export const getContactRequest = createAction("contacts/getContactRequest");
export const getContactSuccsess = createAction("contacts/getContactSuccsess");
export const getContactError = createAction("contacts/getContactError");

export const addContactRequest = createAction("contacts/addContactRequest");
export const addContactSuccsess = createAction("contacts/addContactSuccsess");
export const addContactError = createAction("contacts/addContactError");

export const deleteContactRequest = createAction(
  "contacts/deleteContactRequest"
);
export const deleteContactSuccsess = createAction(
  "contacts/deleteContactSuccsess"
);
export const deleteContactError = createAction("contacts/deleteContactError");

export const changeContactRequest = createAction(
  "contacts/changeContactRequest"
);
export const changeContactSuccsess = createAction(
  "contacts/changeContactSuccsess"
);
export const changeContactError = createAction("contacts/changeContactError");

const changeFilter = createAction(types.CHANGE_FILTER);

export default { changeFilter };
