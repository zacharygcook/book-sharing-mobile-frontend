import React, { Component } from 'react';
import { AppRegistry, TouchableOpacity, StyleSheet, Text, TextInput, View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Styles from '../../styles/ForgotPasswordScreenStyle';

export default class ForgotPasswordScreen extends Component {

  resetPasswordInitiate = () => {
    console.log("Reset password initiated.");
  }

  render() {
    return (
      <View>

        <View style={Styles.resetPasswordFormWrapper}>

          <TextInput
            ref='username'
            keyboardType='email-address'
            returnKeyType='next'
            placeholder='email'/>

          <View>
            <TouchableOpacity style={Styles.resetPasswordButton} onPress={this.resetPasswordInitiate}>
              <Text style={Styles.resetPasswordButtonText}>
                Reset Password
              </Text>
            </TouchableOpacity>
          </View>

        </View>

      </View>
    );
  }
}

AppRegistry.registerComponent('ForgotPasswordScreen', () => ForgotPasswordScreen);