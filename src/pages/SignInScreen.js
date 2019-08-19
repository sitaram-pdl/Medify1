import React from 'react';
import {
  ActivityIndicator,
  AsyncStorage,
  Button,
  StatusBar,
  StyleSheet,
  View,

  Text,
  BackHandler,

  Alert,

  ImageBackground,
  TouchableOpacity,
  TextInput
} from 'react-native';
import Logo from '../components/Logo';
import BgImage from '../images/bg.jpg';
import { createStackNavigator, createSwitchNavigator, createAppContainer } from 'react-navigation';

export default class SignInScreen extends React.Component {

  state = {
    user: '',
    username: '',
    password: '',
    isLoggingIn: false,
    message: '',
  };

  static navigationOptions = {
    header: null,
    title: 'Welcome',
  };



  render() {
    return (

      <View style={styles.container}>
        <StatusBar
          backgroundColor="#004c40"
          barStyle="light-content"
        />

        <ImageBackground source={BgImage} height='100%' style={{ width: '100%', height: '100%' }} >


          <Logo />
          <View style={{ alignItems: 'center', justifyContent: 'center' }}>
            <Text style={styles.logoText}>Your schedule our notification</Text>
          </View>

          <View style={styles.formcontainer}>
            <TextInput style={styles.inputBox}
              underlineColorAndroid='rgba(0,0,0,0)'
              placeholder="Email / User Id"
              placeholderTextColor="#ffffff"
              selectionColor="#fff"
              keyboardType="email-address"
              ref="userid"
              onSubmitEditing={() => this.refs.password.focus()}

              onChangeText={(username) => this.setState({ username })}
            />
            <TextInput style={styles.inputBox}
              underlineColorAndroid='rgba(0,0,0,0)'
              placeholder="Password"
              secureTextEntry={true}
              placeholderTextColor="#ffffff"
              ref="password"
              onChangeText={(password) => this.setState({ password })}
            />
            <TouchableOpacity style={styles.button} onPress={this._validate} >
              <Text style={styles.buttonText} >Login</Text>
            </TouchableOpacity>
          </View>
          {!!this.state.message && (
            <Text style={styles.message} >
              {this.state.message}
            </Text>
          )}

          <View style={styles.signupTextCont}>
            <Text style={styles.signupText}>Don't have an account yet?</Text>
            <TouchableOpacity onPress={this._signOutAsync} ><Text style={styles.signupButton}> Signup</Text></TouchableOpacity>
          </View>
        </ImageBackground>
      </View>


    )
  }

  _validate = () => {
    if (this.state.username == "") { this.setState({ message: "Oops! Registration No. field cannot be empty :(" }) }
    else if (this.state.password == "") { this.setState({ message: "Oops! Password field cannot be empty :(" }) }
    else if (this.state.username == "Sitaram" && this.state.password == "password") {

      AsyncStorage.setItem('UserToken', 'sdfadd');
      AsyncStorage.setItem('UserId', 'asdf');
      AsyncStorage.setItem('UserType', 'Driver');


      this.props.navigation.navigate('App');
    }
    else this._userLogin()
  };


  _userLogin() {
    { this.setState({ message: "thik se dal bey madarchut" }) }

    //hya gara haii sahil
  }
  _signOutAsync = () => {

    this.props.navigation.navigate('SignUp');
  };
}

const styles = StyleSheet.create({
  container: {

    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',


  },
  signupTextCont: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    flexDirection: 'row'
  },
  logoText: {
    marginVertical: 15,
    fontSize: 18,
    color: 'rgba(255, 255, 255, 0.7)'
  },
  signupText: {
    color: 'rgba(255,255,255,0.6)',
    fontSize: 16
  },
  signupButton: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '500'
  },
  logoText: {
    marginVertical: 15,
    fontSize: 18,
    color: 'rgba(255, 255, 255, 0.7)'
  },
  //form

  formcontainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },

  inputBox: {
    width: 300,
    backgroundColor: 'rgba(255, 255,255,0.3)',
    borderRadius: 10,
    paddingHorizontal: 16,
    fontSize: 16,
    color: '#ffffff',
    marginVertical: 10
  },
  button: {
    width: 300,
    backgroundColor: '#004d40',
    borderRadius: 15,
    marginVertical: 14,
    paddingVertical: 13,
    alignItems: 'center'
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#ffffff',
    textAlign: 'center'
  }

});

