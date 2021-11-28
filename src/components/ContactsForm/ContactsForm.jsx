import { useState } from 'react';
import { TextField, Button } from "@mui/material";
import { useDispatch, useSelector } from 'react-redux';
import { addContact}  from '../../redux/contacts/contacts-operation';
import PropTypes from 'prop-types';
import s from './ContactsForm.module.css'
import { isAlreadyHasContact } from '../../utils/helper';
import { getItems } from '../../redux/contacts/contacts-selectors';


function ContactsForm() {

  const dispatch = useDispatch();
  const items  = useSelector(getItems)
  

  const [name, setName] = useState('')
  const [number, setNumber] = useState('')

  const handlerOnChange = (e) => {
    const { name, value } = e.target
    
    switch (name) {
      case 'name': return setName(value);
      case 'number': return setNumber(value);
      default: return;
    }
  }

  const hendlerOnSubmit = (e) => {
    e.preventDefault();
     isAlreadyHasContact(items, name) ? alert(`${name} is already in contacts.`) : dispatch(addContact({ name, number }))
    
    reset()
  }

  const reset = () => {
    setName('');
    setNumber('')
  }



  
    return (
      <form onSubmit={hendlerOnSubmit} className={s.form}>
        <TextField id="outlined-basic" label="Name" variant="filled" className={s.inputField}
            type="text"
            value={name}
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
          onChange={handlerOnChange} />
        
        <TextField id="outlined-basic" label="Number" variant="filled" className={s.inputField}
            type="tel"
            value={number}
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
            onChange={handlerOnChange}/>
        

        

        {/* <button className={s.addContactBtn} type='submit'>Add Contact</button> */}
        <Button variant="contained" className={s.addContactBtn} type='submit'>Add Contact</Button>
      </form>
    )
  }


ContactsForm.propTypes = {
    addNewContact: PropTypes.func
}
  


export default ContactsForm;