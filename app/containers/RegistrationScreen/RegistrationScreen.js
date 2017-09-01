import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Styles from '../../styles/RegistrationScreenStyle';
import BasicStyles from '../../styles/BasicStyles';
import customAxios from '../../axios/axios';

export default class RegistrationScreen extends Component {

  constructor (props) {
    super(props);
    this.state = {
      username: '',
      passwordOne: '',
      passwordTwo: ''
    }
  }

  handleChangeUsername = (text) => {
    this.setState({ username: text });
  }

  handleChangePassword1 = (text) => {
    this.setState({ passwordOne: text });
  }

  handleChangePassword2 = (text) => {
    this.setState({ passwordTwo: text });
  }

  submitRegistrationForm = () => {

    // Validation

    customAxios({
      method: 'post',
      url: 'user',
      data: {
        email: this.state.username,
        password: this.state.passwordTwo
      }
    }).then(function (response) {
      console.log("The response we got: ", response);
      if (response.status == 200) {
        console.log("Status code equals 200");
      }
    }).catch(function (err) {
      console.log("Uh oh we got an error: ", err);
    });

  }

  render() {
    const { username, passwordOne, passwordTwo } = this.state
    return (
      <View>

        <View style={Styles.formWrapper}>

          <TextInput
            ref='username'
            keyboardType='email-address'
            value={username}
            onChangeText={this.handleChangeUsername}
            returnKeyType='next'
            placeholder='email'/>

          <TextInput
            ref='passwordOne'
            value={passwordOne}
            onChangeText={this.handleChangePassword1}
            returnKeyType='next'
            secureTextEntry
            placeholder='password' />

          <TextInput
            ref='passwordTwo'
            value={passwordTwo}
            onChangeText={this.handleChangePassword2}
            returnKeyType='go'
            secureTextEntry
            placeholder='retype password' />

          <View>
            <TouchableOpacity style={Styles.registrationButton} onPress={this.submitRegistrationForm}>
              <Text style={Styles.registrationButtonText}>Sign Up!</Text>
            </TouchableOpacity>
          </View>

        </View>

      </View>
    );
  }
}

AppRegistry.registerComponent('RegistrationScreen', () => RegistrationScreen);