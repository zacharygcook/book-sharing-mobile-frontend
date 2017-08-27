import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';

export default class Test extends Component {
  render() {
    return (<View>
      <Text>Hellooo</Text>
    </View>);
  }
}

AppRegistry.registerComponent('Test', () => Test)