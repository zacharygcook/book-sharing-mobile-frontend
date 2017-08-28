import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, TextInput, View } from 'react-native';
import { Button } from 'native-base';

export default class RegistrationScreen extends Component {
  render() {
    return (
      <View>
        <Text>
          Register Now
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

        <TextInput
          ref='password'
          returnKeyType='next'
          placeholder='password' />

        <Button>
          <Text>Sign Up!</Text>
        </Button>

      </View>
    );
  }
}

AppRegistry.registerComponent('RegistrationScreen', () => RegistrationScreen);