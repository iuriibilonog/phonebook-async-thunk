import UserMenu from "../../components/UserMenu";
import tell from '../../img/tell.png';
import { Link } from "react-router-dom";
import s from './HomePage.module.css';
import { useSelector } from "react-redux";
import { getIsLoggedIn, getUserName } from "../../redux/auth/auth-selectors";



const HomePage = () => {
  
  const isLoggined = useSelector(getIsLoggedIn)
  const userName = useSelector(getUserName);
  return (
    <>
     
      <h2 className={s.title}>{isLoggined ? `Welcome to Your Phonebook, ${userName}!` : "Welcome to Your Phonebook!"}</h2>
      {isLoggined ? <p className={s.desc}> Check Your <Link to="/contacts" className={s.link}>Contacts</Link></p> :
        <p className={s.desc}>Please, <Link to="/login" className={s.link}>SignIn</Link> or <Link to='/auth'className={s.link}>SignUp</Link></p>}
      <img className={s.img} src={tell} alt="tell" />
    </> 
  )
}

export default HomePage;