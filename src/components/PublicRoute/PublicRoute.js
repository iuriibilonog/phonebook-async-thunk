import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router";
import { getIsLoggedIn } from "../../redux/auth/auth-selectors";

const PublicRoute = ({ children, restricted = false, ...routeProps }) => {
  const isLoggedIn = useSelector(getIsLoggedIn);
  return (
    <Route {...routeProps}>
      {isLoggedIn && restricted ? <Redirect to="/" /> : children}
    </Route>
  );
};

export default PublicRoute;
