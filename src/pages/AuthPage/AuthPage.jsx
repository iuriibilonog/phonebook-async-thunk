import { TextField, Button} from "@mui/material";
import { useState } from "react";
import s from "./AuthPage.module.css";
import { register } from "../../redux/auth/auth-operations";
import { useDispatch } from "react-redux";
import { GoogleAuth, FacebookAuth, TwitterAuth } from "../../components/SocialAuth/SocialAuth";


const AuthPage = () => {

  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

 
  const handleAuthFromSocial = (authNameFromSocial, authEmailFromSocial, authPasswordFromSocial) => {
  
    const name = authNameFromSocial;
    const email = authEmailFromSocial;
    const password = authPasswordFromSocial;
    console.log(name);
    console.log(email);
    console.log(password);
    // dispatch(register({ name, email, password }));
    
  }
  


  const handleOnCange = (e) => {
    const { name, value } = e.target;
   
    switch (name) {
      case "name":
        return setName(value);
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
    dispatch(register({ name, email, password }));
    setName("");
    setEmail("");
    setPassword("");
   



  }


  return (
    <>
      <h2 className={s.title}>Please Sign Up!</h2>
      <form className={s.form} onSubmit={handleOnSubmit}>
        <TextField
          id="outlined-basic"
          onChange={handleOnCange}
          name="name"
          value={name}
          autoComplete="false"
          label="Name"
          variant="filled"
          className={s.inputField}
          required
        />
        <TextField
          id="outlined-basic"
          onChange={handleOnCange}
          name="email"
          value={email}
          label="Email"
          variant="filled"
          className={s.inputField}
          required
        />
        <TextField
          id="outlined-basic"
          onChange={handleOnCange}
          name="password"
          value={password}
          label="Password"
          variant="filled"
          className={s.inputField}
          required
        />
        
        <Button variant="contained" className={s.addContactBtn} type='submit'>Submit</Button>
        
          
        
      </form>
      <div className={s.socialAuthWrapper}>
      <GoogleAuth onSubmit={handleAuthFromSocial} />
      <FacebookAuth onSubmit={handleAuthFromSocial} ></FacebookAuth>
        {/* <TwitterAuth/> */}
        </div>
    </>
    
  );
};

export default AuthPage;
