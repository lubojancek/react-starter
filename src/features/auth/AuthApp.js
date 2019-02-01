import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';

import { Layout, NotFound, Footer } from '../../common/components';
import IsLoggedIn from '../../common/services/user/guards/IsLoggedIn';
import IsAnonymous from '../../common/services/user/guards/IsAnonymous';
import LoginGuard from '../../common/services/user/guards/LoginGuard';

import ForgottenPasswordContainer from './containers/ForgottenPasswordContainer';
import LoginContainer from './containers/LoginContainer';
import LogoutContainer from './containers/LogoutContainer';
import ResetPasswordContainer from './containers/ResetPasswordContainer';
import SignUpContainer from './containers/SignUpContainer';
import Header from './components/Header';

const AuthApp = () => (
  <Layout>
    <Header />
    <Layout.Content>
      <Switch>
        <Route exact path="/auth" render={() => <Redirect to="/auth/login" />} />
        <Route exact path="/auth/login" component={LoginGuard(LoginContainer)} />
        <Route exact path="/auth/logout" component={IsLoggedIn(LogoutContainer)} />
        <Route exact path="/auth/sign-up" component={IsAnonymous(SignUpContainer)} />
        <Route
          exact
          path="/auth/forgotten-password"
          component={IsAnonymous(ForgottenPasswordContainer)}
        />
        <Route
          exact
          path="/auth/reset-password/:passwordResetToken"
          component={IsAnonymous(ResetPasswordContainer)}
        />
        <Route component={NotFound} />
      </Switch>
    </Layout.Content>
    <Footer />
  </Layout>
);

export default AuthApp;