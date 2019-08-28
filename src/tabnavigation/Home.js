import React from 'react';
import { StyleSheet, Text, View, Button, StatusBar, BackHandler, Alert, Header, Image } from 'react-native';
import { Icon } from "react-native-elements";
import { onSignIn } from '../Authentication/Auths';




export default class Home extends React.Component {


  static navigationOptions = {
    header: null,

  };



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