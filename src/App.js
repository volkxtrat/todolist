import React, { Component, PureComponent } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import routes from "./routes/routes";
import Auth from "./containers/Auth";
import { autoLogin, authSuccess } from "./store/actions/user";
import Spinner from "./components/Ui/Spinner/Spinner";
import Layout from "./components/Layout/Layout";
import { fetchGetProjects } from "./store/actions/projects";

class App extends PureComponent {
  componentDidMount() {
    this.props.autoLogin();
  }
  async componentDidUpdate(prevProps, prevState) {
    const { isRegistration, history, isAuthenticated } = this.props;
    if (prevProps.isRegistration !== isRegistration && isRegistration)
      history.push(routes.signIn);
    if (prevProps.isAuthenticated !== isAuthenticated && isAuthenticated) {
      await this.props.fetchGetProjects();
      this.props.authSuccess();
    }
    // if (prevProps.isAuthenticated && !isAuthenticated) {
    //   history.push(routes.signIn);
    // }
  }
  // async getInitData() {
  //   // await this.props.fetchGetProjects();
  //   this.props.authSuccess();
  // }

  render() {
    const { isAuthenticated, isLoading, location } = this.props;
    return isLoading ? (
      <Spinner />
    ) : isAuthenticated ? (
      <Layout location={location} />
    ) : (
      <Auth />
    );
  }
}

function mapStateToProps(state) {
  return {
    isAuthenticated: !!state.user.token,
    isLoading: state.user.isLoading,
    isRegistration: state.user.isRegistration
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchGetProjects: () => dispatch(fetchGetProjects()),
    autoLogin: () => dispatch(autoLogin()),
    authSuccess: () => dispatch(authSuccess())
  };
}

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(App)
);
