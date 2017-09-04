import React, { Component } from 'react';
import { AppRegistry, Dimensions, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import customAxios from '../../axios/axios';
import FontAwesome, { Icons } from 'react-native-fontawesome';

var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;

export default class RegistrationScreen extends Component {

  constructor(props) {
    super(props);

    console.log("Any props sent?");

    this.state = {
    }
  }

  render() {

    console.log("Width: ", width, "height: ", height);
    return (
      <View style={styles.homePageWrapper}>

        <View style={styles.headingWrapper}>
          <View style={styles.leftHeaderSection}>
            <Text style={styles.sortByText}>
              Sort By:
            </Text>
          </View>
          <View style={styles.rightHeaderSection}>

            <TouchableOpacity style={styles.addBookToCollectionButton}>
              <FontAwesome style={{fontSize: 32, color: 'white'}}>{Icons.plus}</FontAwesome>
            </TouchableOpacity>

          </View>
        </View>

        <View style={styles.contentWrapper}>
          <View style={styles.ifNoBookCollectionWrapper}>
            <Text style={styles.ifNoBookCollectionMessage}>
              You currently have no books in your collection, you need books in your collection to start sharing!
              Click the green addition button up above to add books today.
            </Text>
          </View>
        </View>

        {/* Next move is to get these icons working:
           https://github.com/oblador/react-native-vector-icons */}

      </View>
    );
  }
}

const styles = StyleSheet.create({
  homePageWrapper: {
    flex: 1,
  },
  headingWrapper: {
    alignSelf: 'stretch',
    height: 70,
    flexDirection: 'row',
    backgroundColor: 'grey',
  },

  leftHeaderSection: {
    width: width - 70,
    height: 70,
    justifyContent: 'center'
  },
  sortByText: {
    paddingLeft: 20
  },

  rightHeaderSection: {
    width: 70,
    height: 70,
  },
  addBookToCollectionButton: {
    width: 60,
    marginLeft: 5,
    height: 60,
    marginTop: 5,
    borderRadius: 15,
    backgroundColor: 'green',
    justifyContent: 'center'
  },

  contentWrapper: {
    flex: 1,
    backgroundColor: 'white'
  },

  ifNoBookCollectionWrapper: {
    flex: 1,
    justifyContent: 'center',
    paddingLeft: 30,
    paddingRight: 30
  },
  ifNoBookCollectionMessage: {
    textAlign: 'center'
  }
});

AppRegistry.registerComponent('RegistrationScreen', () => RegistrationScreen);