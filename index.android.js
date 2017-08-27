import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';

import Home from './app/components/Home/Home';

export default class BookSharingApp extends Component {
  render() {
    return (<View>
      <Home />
    </View>);
  }
}

AppRegistry.registerComponent('BookSharingApp', () => BookSharingApp);