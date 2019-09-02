import React from 'react';
import { StyleSheet, Text, View, BackHandler, Alert, Image, TouchableOpacity } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome5';
import { onSignOut } from '../Authentication/Auths';
import { Icon } from "react-native-elements";
import CustomMenuIcon from '../components/CustomMenuIcon';

import Reminder from '../tabnavigation/Reminder';
import Home from '../tabnavigation/Home';
import Medication from '../tabnavigation/Medication';
import MapBar from '../tabnavigation/Map';

const HomeStack = createStackNavigator({
  Home: Home,

});

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ tintColor }) => (
    <View>
      <IconFontAwesome style={[{ color: tintColor }]} size={22} name={'home'} />
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
      <IconFontAwesome style={[{ color: tintColor }]} size={21} name={'user-clock'} />
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
      <IconFontAwesome style={[{ color: tintColor }]} size={22} name={'notes-medical'} />
    </View>),
  activeColor: 'white',
  inactiveColor: '#b2dfdb',
  barStyle: { backgroundColor: '#00806b' },

};

const MapStack = createStackNavigator({
  Map: MapBar,
});

MapStack.navigationOptions = {
  tabBarLabel: 'Map',
  tabBarIcon: ({ tintColor }) => (
    <View>
      <IconFontAwesome style={[{ color: tintColor }]} size={22} name={'map-marker-alt'} />
    </View>),
  activeColor: 'white',
  inactiveColor: '#b2dfdb',
  barStyle: { backgroundColor: '#00806b' },

};

const Tabnavigation = createMaterialBottomTabNavigator({
  HomeStack,
  MedicationStack,
  ReminderStack,
  MapStack
})

const Appcontain = createAppContainer(Tabnavigation)
export default class HomeScreenPg extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: (<View style={{
        flex: 1, alignItems: "center", flexDirection: "row",
        justifyContent: "space-evenly",
      }}>
        <Text>    </Text>
        <Text>    </Text>
        <Image source={require('../images/logo1.png')} style={{ height: 75, width: 210 }} /></View>
      ),

      headerTitleStyle: {

        flexGrow: 1,

      },
      headerTintColor: 'white',
      headerStyle: {

        backgroundColor: '#00806b',
      },
      headerRight: (
        //Custom menu component

        <CustomMenuIcon
          //Menu Text
          menutext="Menu"
          //Menu View Style
          menustyle={{
            marginRight: 25,
            flexDirection: 'row',
            justifyContent: 'flex-end',
          }}
          //Menu Text Style
          textStyle={{
            color: 'white',
          }}
          //Click functions for the menu items
          option1Click={() => {
            alert('about us to be made');
          }}
          option2Click={() => {
            Alert.alert("Logout", "Are you sure you want to logout?", [{ text: "Cancel", onPress: () => { }, style: "cancel" },
            {
              text: "Logout",
              onPress: () => {
                onSignOut();
                navigation.navigate("AuthContain");
              }
            }], { cancelable: false });
            return true;
          }}

        />
      ),

    }
  }





  render() {
    return (
      <Appcontain />
    );
  }
}



