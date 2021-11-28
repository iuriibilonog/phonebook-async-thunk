import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import LogoutIcon from "@mui/icons-material/Logout";
import logo from "../../img/logo.svg";
import s from "./UserMenu.module.css";
import { getUserName } from "../../redux/auth/auth-selectors";
import { logOut } from "../../redux/auth/auth-operations";
import { Avatar, Badge, Button } from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: "#44b700",
    color: "#44b700",
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      animation: "ripple 1.2s infinite ease-in-out",
      border: "1px solid currentColor",
      content: '""',
    },
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(2.4)",
      opacity: 0,
    },
  },
}));

const UserMenu = () => {
  const dispatch = useDispatch();

  const usetName = useSelector(getUserName);
  return (
    <ul className={s.navList}>
      <li className={s.navItem_left}>
        <NavLink to="/">
          <img src={logo} className={s.logo} alt="" />
        </NavLink>
      </li>
      <li className={s.navItem_left}>
        <NavLink to="/">Home</NavLink>
      </li>
      <li className={s.navItem_left}>
        <NavLink to="/contacts">Contacts</NavLink>
      </li>
      <li className={s.navItem_right}>
        <p>Hello, {usetName}</p>
      </li>
      <li className={s.navItem_avatar}>
        <div>
          <StyledBadge
            overlap="circular"
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            variant="dot"
          >
            <Avatar alt="" src="/static/images/avatar/1.jpg" />
          </StyledBadge>
        </div>
      </li>
      {/* <button className={s.navItem_right} onClick={() => dispatch(logOut())} type='button'>LogOut<LoginIcon /></button> */}
      <Button
        variant="contained"
        className={s.navItem_btn}
        onClick={() => dispatch(logOut())}
        type="button"
      >
        <span className={s.btnName}>LogOut</span>
        <LogoutIcon />
      </Button>
    </ul>
  );
};

export default UserMenu;
