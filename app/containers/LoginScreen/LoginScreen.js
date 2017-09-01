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
      errorMessageDisplay: 'none'
    }
  }

  handleChangeUsername = (text) => {
    this.setState({ username: text });
  }

  handleChangePassword = (text) => {
    this.setState({ password: text });
  }

  submitLoginForm = () => {

    // TODO: Validation

    // axios.post('http://192.168.1.11:1337/login', {
    //   email: this.state.username,
    //   password: this.state.password
    // })

    // Its absolutely KEY! to define this information up here
    // Because 'this' keyword has a different value depending of where it is called.
    // this in this.setState should refer to the constructor object, and when you call this inside a function, it refers to the window object. 
    // That is why you assign 'this' to the variable 'self' up above
    // More on this here: https://stackoverflow.com/questions/41194866/how-to-set-state-of-response-from-axios-in-react
    var self = this;

    customAxios({
      method: 'post',
      url: 'login',
      data: {
        email: this.state.username,
        password: this.state.password
      }
    }).then(function (response) {

      console.log("The response we got: ", response);

      if (!response.data.user) {
        console.log("No user was sent!");
        self.setState({ 
          errorMessage: response.data.message,
          errorMessageDisplay: 'flex'
        });
      } else {
        console.log("This user was sent: ", response.data.user);
        self.setState({ 
          errorMessage: '',
          errorMessageDisplay: 'none'
        });
        Actions.homepage();
      }

    }).catch(function (err) {

      console.log("Got an error logging in, heres the message: ", err);
      throw err;

    });
  }

  errorMessageStyle = function (options) {
    return {
      alignSelf: 'center',
      backgroundColor: '#FF6666',
      width: 280,
      display: this.state.errorMessageDisplay
    }
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

        <View style={this.errorMessageStyle()}>
          <Text style={Styles.errorMessage}>{this.state.errorMessage}</Text>
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