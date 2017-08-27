/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import HomePage from '../pages/Home';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class BookSharingApp extends Component {
  render() {
    return (<div>
      <HomePage />
    </div>);
  }
}

AppRegistry.registerComponent('BookSharingApp', () => BookSharingApp);
