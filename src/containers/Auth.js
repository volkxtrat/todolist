import React from "react";
import { connect } from "react-redux";
import { Switch, Route, Redirect } from "react-router-dom";

import routesName from "../routes/routes";
import AuthView from "../components/Auth/AuthView/AuthView";
import AuthFormLogin from "../components/Auth/AuthFormLogin/AuthFormLogin";
import AuthFormRegistration from "../components/Auth/AuthFormRegistration/AuthFormRegistration";
import { signUp, signIn, authReset } from "../store/actions/user";

function Auth({
  userSignUp,
  userSignIn,
  error,
  isRegistration,
  onAuthReset,
  isAuthenticated
}) {
  return (
    <AuthView>
      <Switch>
        <Route
          path={routesName.signIn}
          render={props => (
            <AuthFormLogin
              error={error}
              userSignIn={userSignIn}
              onAuthReset={onAuthReset}
              isRegistration={isRegistration}
              isAuthenticated={isAuthenticated}
              {...props}
            />
          )}
        />
        <Route
          path={routesName.signUp}
          render={props => (
            <AuthFormRegistration
              error={error}
              userSignUp={userSignUp}
              onAuthReset={onAuthReset}
              isRegistration={isRegistration}
              {...props}
            />
          )}
        />
        <Redirect to={routesName.signIn} />
      </Switch>
    </AuthView>
  );
}

function mapStateToProps(state) {
  return {
    error: state.user.error,
    isRegistration: state.user.isRegistration
  };
}

function mapDispatchToProps(dispatch) {
  return {
    userSignUp: (email, passord, userData) =>
      dispatch(signUp(email, passord, userData)),
    userSignIn: (email, passord) => dispatch(signIn(email, passord)),
    onAuthReset: () => dispatch(authReset())
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Auth);
