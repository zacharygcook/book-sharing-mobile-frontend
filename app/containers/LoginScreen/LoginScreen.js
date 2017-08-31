import React, { Component } from 'react';
import { AppRegistry, TouchableOpacity, StyleSheet, Text, TextInput, View } from 'react-native';
import Styles from '../../styles/LoginScreenStyle';
import { Actions } from 'react-native-router-flux';
import customAxios from '../../axios/axios';
import axios from 'react-native-axios';

export default class LoginScreen extends Component {

  constructor (props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      errorMessage: '',
      showErrorMessage: false
    }
  }

  handleChangeUsername = (text) => {
    this.setState({ username: text });
  }

  handleChangePassword = (text) => {
    this.setState({ password: text });
  }

  handleFailure = (errorResponse) => {
    console.log("Error response: ", errorResponse);
    this.setState({
      errorMessage: errorResponse.message
    });
  }

  submitLoginForm = () => {

    // Validation

    // customAxios({
    //   method: 'post',
    //   url: 'login',
    //   data: {
    //     email: this.state.username,
    //     password: this.state.password
    //   }
    // }).then(function (response) {
    //   console.log("The response we got: ", response);
    //   if (response.status == 200) {
    //     console.log("Status code equals 200");
    //     Actions.homepage();
    //   }
    // }).catch(function (err) {
    //   console.log("Got an error logging in, heres the message: ", err.response.data);
    //   throw err;
    //   this.handleFailure(err.response.data);
    //   reject(err);
    // });

    axios.post('http://192.168.1.11:1337/login', {
      email: this.state.username,
      password: this.state.password
    }).then(function (response) {
      console.log("The response we got: ", response);
      if (response.status == 200) {
        console.log("Status code equals 200");
        Actions.homepage();
      }
    }).catch(function (err) {
      console.log("Got an error logging in, heres the message: ", err.response.data);
    });
  }

  render() {
    const { username, password } = this.state
    return (
      <View>

        <Text style={Styles.homeHeading}>
          Welcome to the FREE Book Sharing Application!
        </Text>

        <TextInput
          ref='username'
          value={username}
          onChangeText={this.handleChangeUsername}
          keyboardType='email-address'
          returnKeyType='next'
          placeholder='email'/>

        <TextInput
          ref='password'
          value={password}
          onChangeText={this.handleChangePassword}
          returnKeyType='go'
          secureTextEntry
          placeholder='password' />

        <View>
          <TouchableOpacity style={Styles.loginButton} onPress={this.submitLoginForm}>
            <Text style={Styles.loginButtonText}>Login</Text>
          </TouchableOpacity>
        </View>

        <View>
          <Text>{this.state.errorMessage}</Text>
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

        <View style={Styles.outlineButton}>
          <Text
            style={Styles.outlineButtonText}
            onPress={() => Actions.homepage()}
          >
            Try going straight to the home page
          </Text>
        </View>

      </View>
    );
  }
}

AppRegistry.registerComponent('LoginScreen', () => LoginScreen);