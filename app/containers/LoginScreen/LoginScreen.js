import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, TextInput, View } from 'react-native';

export default class LoginScreen extends Component {
  constructor() {
    super();
    this.state = {

    }
  }
  render() {
    return (
      <View>
        <Text>
          Welcome to Book Sharing Application
        </Text>

        <TextInput
          ref='username'
          keyboardType='email-address'
          returnKeyType='next'
          placeholder='email'/>

        <TextInput
          ref='password'
          returnKeyType='next'
          placeholder='password' />

        <Text>Not Yet Registered? --> Sign Up</Text>

        <Text>Forgot Your Password? --> Reset Password</Text>

      </View>
    );
  }
}

AppRegistry.registerComponent('LoginScreen', () => LoginScreen);