import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';

import Test from './app/components/Home/Home';

export default class BookSharingApp extends Component {
  render() {
    return (<View>
      <Test />
    </View>);
  }
}

AppRegistry.registerComponent('BookSharingApp', () => BookSharingApp);