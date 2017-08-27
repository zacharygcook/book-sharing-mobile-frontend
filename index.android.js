import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';

import LoginScreen from './app/containers/LoginScreen/LoginScreen';

export default class BookSharingApp extends Component {
  render() {
    return (<View style={styles.container}>
      <LoginScreen />
    </View>);
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightgrey',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});

AppRegistry.registerComponent('BookSharingApp', () => BookSharingApp);