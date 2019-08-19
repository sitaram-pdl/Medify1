import React from 'react';
import {
  ActivityIndicator,
  AsyncStorage,
  Button,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import { createStackNavigator, createSwitchNavigator, createAppContainer } from 'react-navigation';

export default class AuthLoadingScreen extends React.Component {
  constructor() {
    super();
    this.state = { firstlunch: null }
  }

  componentDidMount() {
    AsyncStorage.getItem("isLoggedIn").then(value => {
      if (value === null) {
        AsyncStorage.setItem("isLoggedIn", 'true').then(() => {
          this.props.navigation.replace('HomeScreen')
        })

      } else { this.props.navigation.replace('HomeScreen') }
    })
  }
  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator />
        <StatusBar barStyle="default" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',

  },
});