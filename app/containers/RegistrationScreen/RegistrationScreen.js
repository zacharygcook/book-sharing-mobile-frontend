import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Styles from '../../styles/RegistrationScreenStyle';

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
    console.log("What it gave us -> ", text);
    this.setState({ username: text });
  }

  handleChangePassword1 = (text) => {
    console.log("What it gave us -> ", text);
    this.setState({ passwordOne: text });
  }

  handleChangePassword2 = (text) => {
    console.log("What it gave us -> ", text);
    this.setState({ passwordTwo: text });
  }

  submitRegistrationForm = () => {
    console.log("Hit this form!");
    Actions.pop();
  }

  render() {
    const { username, passwordOne, passwordTwo } = this.state
    return (
      <View>
        <Text>
          Register Now
        </Text>

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
          placeholder='password' />

        <View>
          <TouchableOpacity style={Styles.registrationButton} onPress={this.submitRegistrationForm}>
            <Text>Sign Up!</Text>
          </TouchableOpacity>
        </View>

        <Text
          onPress={() => Actions.pop()}
        >
          Go Back to Login
        </Text>

      </View>
    );
  }
}

AppRegistry.registerComponent('RegistrationScreen', () => RegistrationScreen);