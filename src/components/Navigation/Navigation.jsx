import { NavLink } from "react-router-dom";
import s from "./Navigation.module.css";
import logo from "../../img/logo.svg";
import { getIsLoggedIn } from "../../redux/auth/auth-selectors";
import { useSelector } from "react-redux";
import UserMenu from "../UserMenu";



const Navigation = () => {

  const isLoggedIn = useSelector(getIsLoggedIn);

  return (
    !isLoggedIn ?
    <ul className={s.navList}>
      <li className={s.navItem_left}>
        <NavLink to="/">
          <img src={logo} className={s.logo} alt="" />
          </NavLink>
        </li>
        <li className={s.navItem_left}>
          <NavLink to="/">Home</NavLink>
      </li>        
        <li className={s.navItem_right}>
          <NavLink to="/login">Sign In</NavLink>
        </li>
        <li className={s.navItem_right}>
          <NavLink to="/auth">Sign Up</NavLink>
        </li>
      </ul > :
      <UserMenu/>
    
    
  );
};

export default Navigation;
