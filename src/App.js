import s from "./App.module.css";
import { Switch } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import "./App.module.css";
import Navigation from "./components/Navigation";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import PublicRoute from "./components/PublicRoute/PublicRoute";
import { getIsCheckingUser } from "./redux/auth/auth-selectors";
import { useEffect, Suspense, lazy } from "react";
import { checkCurrentUser } from "./redux/auth/auth-operations";
import Loader from "./components/Loader";

const HomePage = lazy(() => import("./pages/HomePage"));
const AuthPage = lazy(() => import("./pages/AuthPage"));
const LoginPage = lazy(() => import("./pages/LoginPage"));
const ContactsPage = lazy(() => import("./pages/ContactsPage"));

function App() {
  const isCheckingUser = useSelector(getIsCheckingUser);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkCurrentUser());
  }, [dispatch]);

  return (
    <div className={s.app}>
      {isCheckingUser ? (
        <Loader />
      ) : (
        <>
          <Navigation />

          <Switch>
            <Suspense fallback={<Loader />}>
              <PublicRoute exact path="/">
                <HomePage />
              </PublicRoute>
              <PublicRoute path="/auth" restricted>
                <AuthPage />
              </PublicRoute>
              <PublicRoute path="/login" restricted>
                <LoginPage />
              </PublicRoute>
              <PrivateRoute path="/contacts">
                <ContactsPage />
              </PrivateRoute>
            </Suspense>
          </Switch>
        </>
      )}
    </div>
  );
}

export default App;
