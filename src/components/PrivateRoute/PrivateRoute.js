import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router";
import { getIsLoggedIn } from "../../redux/auth/auth-selectors";

const PrivateRoute = ({ children, ...routeProps }) => {
  const isLoggedIn = useSelector(getIsLoggedIn);
  return (
      <Route {...routeProps}>
        {isLoggedIn ? children : <Redirect to="/" />}
      </Route>
  );
};

export default PrivateRoute;
