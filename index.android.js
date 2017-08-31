import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';
import { Router, Stack, Scene } from 'react-native-router-flux';

import LoginScreen from './app/containers/LoginScreen/LoginScreen';
import RegistrationScreen from './app/containers/RegistrationScreen/RegistrationScreen';
import ForgotPasswordScreen from './app/containers/ForgotPasswordScreen/ForgotPasswordScreen';


export default class BookSharingApp extends Component {
  render() {
    return (
      <Router>
        <Stack key="root">
          <Scene key="login" component={LoginScreen} title="Login" />
          <Scene key="register" component={RegistrationScreen} title="Registration" />
          <Scene key="forgotPassword" component={ForgotPasswordScreen} title="Forgot Password?" />
        </Stack>

        {/*<Stack key="loggedin">
          <Scene key="homepage" component={HomePage} title="Home Page" />
        </Stack>*/}

      </Router>);
  }
}

AppRegistry.registerComponent('BookSharingApp', () => BookSharingApp);