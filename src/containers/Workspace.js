import React, { PureComponent } from "react";
import styled from "styled-components";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import routes from "../routes/routes";
import routesAppConfig from "../routes/appConfig";
import { withTheme } from "@material-ui/core";

const StyledWorkspace = styled.main`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 16px;
  background: ${p => p.background};
`;

class UpdateBlocker extends React.PureComponent {
  render() {
    return <div>{this.props.children}</div>;
  }
}

function Workspace({ theme }) {
  return (
    <StyledWorkspace background={theme.palette.background.default}>
      <Switch>
        {routesAppConfig.map(route => (
          <Route
            key={route.path}
            path={route.path}
            render={props => (
              <UpdateBlocker location={props.location}>
                {route.path}
              </UpdateBlocker>
            )}
            exact={route.exact}
          />
        ))}
        <Redirect to={routes.inbox} />
      </Switch>
    </StyledWorkspace>
  );
}

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {};
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withTheme()(Workspace));
