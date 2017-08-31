import React, { Component } from 'react';
import { AppRegistry, TouchableOpacity, StyleSheet, Text, TextInput, View } from 'react-native';
import BasicStyles from '../../styles/BasicStyles';
import Styles from '../../styles/LoginScreenStyle';
import { Actions } from 'react-native-router-flux';

export default class LoginScreen extends Component {

  render() {
    return (
      <View>

        <Text style={Styles.homeHeading}>
          Welcome to the FREE Book Sharing Application!
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

        <View>
          <TouchableOpacity style={Styles.loginButton} onPress={this.submitRegistrationForm}>
            <Text style={Styles.loginButtonText}>Login</Text>
          </TouchableOpacity>
        </View>

        <View style={Styles.outlineButton}>
          <Text
            style={Styles.outlineButtonText}
            onPress={() => Actions.register()}
          >
            Not Yet Registered? --> Sign Up
          </Text>
        </View>

        <View style={Styles.outlineButton}>
          <Text
            style={Styles.outlineButtonText}
            onPress={() => Actions.forgotPassword()}
          >
            Forgot Your Password? --> Reset Password
          </Text>
        </View>

      </View>
    );
  }
}

AppRegistry.registerComponent('LoginScreen', () => LoginScreen);