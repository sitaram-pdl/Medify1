import React from 'react';
import { StyleSheet, Text, View, Button, StatusBar, BackHandler, Alert, Header, Image } from 'react-native';
import { Icon } from "react-native-elements";
import { onSignIn } from '../Authentication/Auths';




export default class Home extends React.Component {


  static navigationOptions = {
    headerTitle: (<View style={{ flex: 1, alignItems: "center" }}>
      <Image source={require('../images/logo1.png')} style={{ height: 75, width: 210 }} /></View>
    ),

    headerTitleStyle: {

      flexGrow: 1,

    },
    headerTintColor: 'white',
    headerStyle: {

      backgroundColor: '#00806b',

    },


  }



  render() {
    return (

      <View style={styles.container}>

        <Button title="Logout" style={width = 300} />

        <Text>Press back button</Text>
        <Text>Home Screen</Text>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  icon: {
    paddingLeft: 10
  },

});