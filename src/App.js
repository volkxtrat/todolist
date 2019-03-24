import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import routesName from "./routes/routes";

class App extends Component {
  render() {
    const isAuth = false;
    const routes = isAuth ? (
      <Switch>
        <Route path={routesName.home} component={App} />
        <Route path={routesName.inbox} component={App} />
        <Route path={routesName.projects} component={App} />
        <Route path={routesName.projectsId} component={App} />
        <Redirect to={routesName.home} />
      </Switch>
    ) : (
      <Switch>
        <Route path={routesName.signIn} component={App} />
        <Route path={routesName.signUp} component={App} />
        <Redirect to={routesName.signIn} />
      </Switch>
    );
    return routes;
  }
}

export default App;
