import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, TextInput, View } from 'react-native';
// import { Button } from 'native-base';

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

        <Text>Not Yet Registered? --> Sign Up</Text>

        <Text>Forgot Your Password? --> Reset Password</Text>

      </View>
    );
  }
}

AppRegistry.registerComponent('LoginScreen', () => LoginScreen);