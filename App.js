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

import SignInScreen from './src/pages/SignInScreen';
import HomeScreen from './src/pages/HomeScreen';
import AuthLoadingScreen from './src/pages/AuthLoadingScreen';
import SignUpScreen from './src/pages/SignUpScreen';







const AppStack = createStackNavigator({ HomeScreen: HomeScreen });
const AuthStack = createStackNavigator({ SignIn: SignInScreen, SignUp: SignUpScreen });



export default createAppContainer(createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    App: AppStack,
    Auth: AuthStack,
  },
  {
    initialRouteName: 'AuthLoading',

  }
));
