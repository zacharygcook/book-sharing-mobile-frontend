import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, TextInput, View } from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class LoginScreen extends Component {

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

        {/*<Button>
          <Text>Sign In</Text>
        </Button>*/}

        <Text
          onPress={() => Actions.register()}
        >
          Not Yet Registered? --> Sign Up
        </Text>

        <Text
          onPress={() => Actions.forgotPassword()}
        >
          Forgot Your Password? --> Reset Password
        </Text>

      </View>
    );
  }
}

AppRegistry.registerComponent('LoginScreen', () => LoginScreen);