import { TextField, Button } from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { changeContact } from '../../redux/contacts/contacts-operation';
import s from './Modal.module.css';

const Modal = ({ closeModal, name, number, id }) => {

  const dispatch = useDispatch();
  
  

  const [userNameInModal, setUserNameInModal] = useState(name);
  const [userNumberInModal, setUserNumberInModal] = useState(number);
  
  const handleOnChangrModal = (e) => {
    const { name, value } = e.target;
   
    switch (name) {
      case "name":
        return setUserNameInModal(value);
      case "number":
        return setUserNumberInModal(value);
      default:
        return;
    }
  }

  const handleOnSubmitModal = (e) => {
    e.preventDefault();
    const editContact = {
      id,
      name: userNameInModal,
      number: userNumberInModal
    }
    dispatch(changeContact( editContact))
  }

  
 

  return (
    <div className={s.backdrop}>
      <form className={s.modal} onSubmit={handleOnSubmitModal}>
        <TextField
          id="outlined-basic"
          name="name"
          value={userNameInModal}
          autoComplete="false"
          label="Name"
          variant="filled"
          className={s.inputField}
          onChange={handleOnChangrModal}
        />
        <TextField
          id="outlined-basic"
          name="number"
          value={userNumberInModal}
          label="Number"
          variant="filled"
          className={s.inputField}
          onChange={handleOnChangrModal}
        />
        
        <Button variant="contained" type='submit'>Submit</Button>
        <Button variant="contained" type='submit' onClick={closeModal} >Close</Button>
        
          
        
      </form>
    </div>
  )
}

export default Modal;