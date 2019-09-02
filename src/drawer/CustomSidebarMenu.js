/*Example of Navigation Drawer with Sectioned Menu*/

import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { NavigationActions } from 'react-navigation';
import { ScrollView, Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { StackNavigator } from 'react-navigation';

class SideMenu extends Component {
  constructor() {
    super();
    /*Array of the sidebar navigation option with 
    Heading, Subheading and screen to navigate.*/
    //Sreen to navigate can be any screen defined in Drawer Navigator in App.js

  }

  navigateToScreen = route => () => {
    const navigateAction = NavigationActions.navigate({
      routeName: route,
    });
    this.props.navigation.dispatch(navigateAction);
  };

  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <TouchableOpacity><Text>one</Text></TouchableOpacity>
          <TouchableOpacity><Text>one</Text></TouchableOpacity>
          <TouchableOpacity><Text>one</Text></TouchableOpacity>
        </ScrollView>
        <View style={styles.footerContainer}>
          <Text>This is my fixed footer</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    flex: 1,
  },

  footerContainer: {
    padding: 20,
    backgroundColor: 'lightgrey',
  },
});

export default SideMenu;
