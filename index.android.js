import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';
import { Actions, Router, Stack, Scene } from 'react-native-router-flux';

import LoginScreen from './app/containers/LoginScreen/LoginScreen';
import RegistrationScreen from './app/containers/RegistrationScreen/RegistrationScreen';
import ForgotPasswordScreen from './app/containers/ForgotPasswordScreen/ForgotPasswordScreen';
import HomePage from './app/containers/HomePage/HomePage';

export default class BookSharingApp extends Component {

  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {

    function isLoggedIn() {
      console.log("Checking if logged in.");

      var decider = true;

      if (decider === true) {
        console.log("True");
        return;
      } else {
        Actions.login();
      }      
    }

    return (
      <Router>
        <Stack key="root">
          {/* Logged in routes */}
          <Scene key="homepage" onEnter={isLoggedIn} component={HomePage} hideNavBar />          

          <Scene key="login" component={LoginScreen} hideNavBar />
          <Scene key="register" component={RegistrationScreen} title="Registration" />
          <Scene key="forgotPassword" component={ForgotPasswordScreen} title="Forgot Password?" />


        </Stack>

      </Router>);
  }
}

AppRegistry.registerComponent('BookSharingApp', () => BookSharingApp);