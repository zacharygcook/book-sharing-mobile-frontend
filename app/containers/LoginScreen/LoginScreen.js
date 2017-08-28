import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, TextInput, View } from 'react-native';
import { Button } from 'native-base';

export default class LoginScreen extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
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

        <Button>
          <Text>Sign In</Text>
        </Button>

        <Text>Not Yet Registered? --> Sign Up</Text>

        <Text>Forgot Your Password? --> Reset Password</Text>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightgrey',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});

AppRegistry.registerComponent('LoginScreen', () => LoginScreen);