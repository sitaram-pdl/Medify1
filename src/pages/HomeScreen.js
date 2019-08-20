import React from 'react';
import { StyleSheet, Text, View, BackHandler, Alert } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';

import Icon from 'react-native-vector-icons/FontAwesome5';
import { onSignOut } from '../Authentication/Auths';

import Reminder from '../tabnavigation/Reminder';
import Home from '../tabnavigation/Home';
import Medication from '../tabnavigation/Medication';
import Setting from '../tabnavigation/Setting';

const HomeStack = createStackNavigator({
  Home: Home,

});

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ tintColor }) => (
    <View>
      <Icon style={[{ color: tintColor }]} size={22} name={'home'} />
    </View>),
  activeColor: 'white',
  inactiveColor: '#b2dfdb',
  barStyle: { backgroundColor: '#00806b' },

};

const ReminderStack = createStackNavigator({
  Reminder: Reminder,
});

ReminderStack.navigationOptions = {
  tabBarLabel: 'Reminder',
  tabBarIcon: ({ tintColor }) => (
    <View>
      <Icon style={[{ color: tintColor }]} size={21} name={'user-clock'} />
    </View>),

  activeColor: 'white',
  inactiveColor: '#b2dfdb',
  barStyle: { backgroundColor: '#00806b' },

};

const MedicationStack = createStackNavigator({
  Medication: Medication,
});

MedicationStack.navigationOptions = {
  tabBarLabel: 'Medication',
  tabBarIcon: ({ tintColor }) => (
    <View>
      <Icon style={[{ color: tintColor }]} size={22} name={'notes-medical'} />
    </View>),
  activeColor: 'white',
  inactiveColor: '#b2dfdb',
  barStyle: { backgroundColor: '#00806b' },

};

const SettingStack = createStackNavigator({
  Setting: Setting,
});

SettingStack.navigationOptions = {
  tabBarLabel: 'Setting',
  tabBarIcon: ({ tintColor }) => (
    <View>
      <Icon style={[{ color: tintColor }]} size={22} name={'ellipsis-h'} />
    </View>),
  activeColor: 'white',
  inactiveColor: '#b2dfdb',
  barStyle: { backgroundColor: '#00806b' },

};

const Tabnavigation = createMaterialBottomTabNavigator({
  HomeStack,
  MedicationStack,
  ReminderStack,
  SettingStack
})

const Appcontain = createAppContainer(Tabnavigation)
export default class HomeScreenPg extends React.Component {
  static navigationOptions = {
    header: null,
    title: 'Welcome',
  };

  componentDidMount() {
    this.backHandler = BackHandler.addEventListener("hardwareBackPress", () => {
      Alert.alert("Logout", "Are you sure you want to logout?", [{ text: "Cancel", onPress: () => { }, style: "cancel" },
      {
        text: "Logout",
        onPress: () => {
          onSignOut();
          this.props.navigation.navigate("AuthContain");
        }
      }], { cancelable: false });
      return true;
    });
  }



  render() {
    return (
      <Appcontain />
    );
  }
}

