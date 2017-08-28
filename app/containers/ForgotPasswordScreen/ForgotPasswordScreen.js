import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, TextInput, View } from 'react-native';
// import { Button } from 'native-base';
import { Actions } from 'react-native-router-flux';

export default class ForgotPasswordScreen extends Component {
  render() {
    return (
      <View>
        <Text>
          Forgot Your Password?
        </Text>

        <TextInput
          ref='username'
          keyboardType='email-address'
          returnKeyType='next'
          placeholder='email'/>

        {/*<Button>
          <Text>Send Password Reset Email</Text>
        </Button>*/}

        <Text
          onPress={() => Actions.pop()}
        >
          Go Back to Login
        </Text>

      </View>
    );
  }
}

AppRegistry.registerComponent('ForgotPasswordScreen', () => ForgotPasswordScreen);