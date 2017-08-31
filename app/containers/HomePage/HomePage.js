import React, { Component } from 'react';
import { AppRegistry, Text, View, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import customAxios from '../../axios/axios';

export default class RegistrationScreen extends Component {

  constructor(props) {
    super(props);

    console.log("Any props sent?");

    this.state = {
    }
  }

  static onEnter = (isLoggedIn) => {
    console.log("It hit this on enter function, yay!");

    console.log("Anything sent? ", isLoggedIn);

    if (isLoggedIn === true) {
      console.log("Is logged in marked true");
      return true;
    } else if (isLoggedIn === false) {
      console.log("Is logged in marked false");
      return null;
    }
  };

  render() {
    return (
      <View>
        <Text>
          At the "home" page
        </Text>

      </View>
    );
  }
}

AppRegistry.registerComponent('RegistrationScreen', () => RegistrationScreen);