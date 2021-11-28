import s from './Contacts.module.css';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import AddIcCallIcon from '@mui/icons-material/AddIcCall';
import EditIcon from '@mui/icons-material/Edit';
import { Avatar } from "@mui/material";
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact, getContacts, fetchContacts } from '../../redux/contacts/contacts-operation';
import { getItems, getFilter, getLoading } from '../../redux/contacts/contacts-selectors';
import { useEffect } from 'react';
import Loader from '../../components/Loader';
import { useState } from 'react';
import Modal from '../Modal';


const Contacts = () => {
  
  const dispatch = useDispatch();

  const [user, setUser] = useState('');
  const [userNumber, setUserNumber] = useState('');
  const [userId, setUserId] = useState('');

  const items = useSelector(getItems)
  const filter = useSelector(getFilter)
  const isLoading = useSelector(getLoading)

  const [isModalOpen, setIsModalOpen] = useState('false')

  console.log("isModalOpen -->", isModalOpen)

  const toggleModal = () => {
   
    
    isModalOpen === 'false' ? setIsModalOpen('true') : setIsModalOpen('false')
    console.log('modalAfterClick -->', isModalOpen)
  }

  

  
  useEffect(() => {
    dispatch(fetchContacts())
    
  }, [dispatch])

  
  
  const NormalizeFilter = filter.toLowerCase();
  
  const contactsArr = items.filter((item) =>
  item.name.toLowerCase().includes(NormalizeFilter)
  );

  const getUserInModal = ({name, number, id}) => {
    setUser(name)
    setUserNumber(number)
    setUserId(id)
    toggleModal();
    
  }
  
 

  return (
    
    
    <ul className={s.contactsList}>
      
      {isLoading && <Loader />}
       {contactsArr.map(({ name, number, id}) =>
        <li key={id} className={s.contactItem}>
          <Avatar alt="" src="/static/images/avatar/1.jpg" />
          <p className={s.contactsName}> {name}: <span className={s.contactsNumber}>{number}</span></p> 
          <a href="tel:${number}" className={s.call}><AddIcCallIcon/></a>
          <EditIcon className={s.edit} onClick={() => getUserInModal({name, number, id })}/>
          <DeleteForeverIcon className={s.remove} onClick={() => dispatch(deleteContact(id))} />
          {/* <button type='button' onClick={() => getUserInModal({name, number, id })}>Change</button> */}
          
          {isModalOpen === 'true' && <Modal closeModal={toggleModal} name={user} number={userNumber} id={userId}/>}
         
        </li>)
      
      }
     
    </ul>
    
  )
}

export default Contacts;



