import ContactsForm from "../../components/ContactsForm";
import Contacts from "../../components/Contacts";
import FilterField from "../../components/FilterField";
import s from './ContactsPage.module.css';

const ContactsPage = () => {
  return (
    <>
    <h1 className={s.title}>Phonebook</h1>
      <ContactsForm />
      <h2 className={s.title}>Contacts</h2>
      <FilterField />
      <Contacts />
    </>
  )
}

export default ContactsPage;