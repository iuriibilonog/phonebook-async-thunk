import axios from "axios";

axios.defaults.baseURL = "https://connections-api.herokuapp.com";

export const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = "";
  },
};

//=================== Auth =======================//

export const addUser = async (user) => axios.post("/users/signup", user);
export const loginUser = async (user) => axios.post("/users/login", user);
export const checkUser = async () => axios.get("/users/current");
export const logOutUser = async () => axios.post("/users/logout");
export const changeUser = async ({ id, ...user }) =>
  axios.patch(`/contacts/${id}`, user);
// export const changeUser = async ({ id, ...user }) => {
//   console.log(id);
//   console.log(user);
// };

//=================== Contacts =======================//

export const getContacts = async () => axios.get("/contacts");
