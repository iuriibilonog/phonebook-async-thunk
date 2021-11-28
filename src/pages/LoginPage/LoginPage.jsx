import { TextField, Button } from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../redux/auth/auth-operations";
import s from './LoginPage.module.css';

const LoginPage = () => {

  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleOnCange = (e) => {
    const { name, value } = e.target;
   
    switch (name) {
  
      case "email":
        return setEmail(value);
      case "password":
        return setPassword(value);
      default:
        return;
    }
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    dispatch(login({ email, password }))
    setEmail("");
    setPassword("");
  }
  

  return (
    <>
    <h2 className={s.title}>Please Log In!</h2>  
      <form className={s.form} onSubmit={handleOnSubmit}>
        <TextField className={s.inputField} onChange={handleOnCange} name="email" value={email} id="outlined-basic" label="Email" variant="filled" required/>
      <TextField className={s.inputField} onChange={handleOnCange} name="password" value={password} id="outlined-basic" label="Password" variant="filled" required/>
      <Button variant="contained" className={s.addContactBtn} type='submit'>Submit</Button>
      </form>
      
    </>
  )
}

export default LoginPage;