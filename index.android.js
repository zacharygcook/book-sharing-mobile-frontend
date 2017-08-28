import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';
// import { Router, Scene } from 'react-native-router-flux';

import LoginScreen from './app/containers/LoginScreen/LoginScreen';
import RegistrationScreen from './app/containers/RegistrationScreen/RegistrationScreen';
import ForgotPasswordScreen from './app/containers/ForgotPasswordScreen/ForgotPasswordScreen';


export default class BookSharingApp extends Component {
  render() {
    return (
      <View>
        <LoginScreen />
      </View>);
  }
}

AppRegistry.registerComponent('BookSharingApp', () => BookSharingApp);