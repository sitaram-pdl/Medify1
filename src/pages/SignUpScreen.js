import React from 'react';
import {
    ActivityIndicator,
    AsyncStorage,

    StatusBar,
    StyleSheet,
    View,

    Text,

    ImageBackground,
    TouchableOpacity,
    TextInput
} from 'react-native';
import { createStackNavigator, createSwitchNavigator, createAppContainer } from 'react-navigation';
import Logo from '../components/Logo';
import BgImage from '../images/bg.jpg';

export default class SignUpScreen extends React.Component {
    constructor(props) {
        super(props);
    }

    static navigationOptions = {
        title: 'Please sign up',
        header: null
    };

    render() {
        return (
            <View style={styles.container}>
                <StatusBar
                    backgroundColor="#004c40"
                    barStyle="light-content"
                />
                <ImageBackground source={BgImage} style={{ width: '100%', height: '100%' }} >
                    <Logo />
                    <View style={styles.formcontainer}>
                        <View style={styles.firstAndLastName}>
                            <TextInput style={styles.inputBoxFirstname}
                                underlineColorAndroid='rgba(0,0,0,0)'
                                placeholder="Firstname"
                                placeholderTextColor="#ffffff"
                                ref="firstname"
                                onSubmitEditing={() => this.refs.lastname.focus()}


                            />

                            <TextInput style={styles.inputBoxLastname}
                                underlineColorAndroid='rgba(0,0,0,0)'
                                placeholder="Lastname"
                                placeholderTextColor="#ffffff"
                                ref="lastname"
                                onSubmitEditing={() => this.refs.userid.focus()}

                            />
                        </View>

                        <TextInput style={styles.inputBox}
                            underlineColorAndroid='rgba(0,0,0,0)'
                            placeholder="Email / User Id"
                            placeholderTextColor="#ffffff"
                            ref="userid"
                            onSubmitEditing={() => this.refs.email.focus()}

                        />
                        <TextInput style={styles.inputBox}
                            underlineColorAndroid='rgba(0,0,0,0)'
                            placeholder="Email"
                            placeholderTextColor="#ffffff"
                            selectionColor="#fff"
                            keyboardType="email-address"
                            ref="email"
                            onSubmitEditing={() => this.refs.password.focus()}

                        />
                        <TextInput style={styles.inputBox}
                            underlineColorAndroid='rgba(0,0,0,0)'
                            placeholder="Password"
                            secureTextEntry={true}
                            placeholderTextColor="#ffffff"
                            ref="password"
                            onSubmitEditing={() => this.refs.repassword.focus()}

                        />
                        <TextInput style={styles.inputBox}
                            underlineColorAndroid='rgba(0,0,0,0)'
                            placeholder="Re-type Password"
                            secureTextEntry={true}
                            placeholderTextColor="#ffffff"
                            ref="repassword"

                        />
                        <TouchableOpacity style={styles.button}
                            onPress={this._submit}>
                            <Text style={styles.buttonText}>Submit</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.signupTextCont}>
                        <Text style={styles.signupText}>Already have an account?</Text>
                        <TouchableOpacity onPress={this._signOutAsync}><Text style={styles.signupButton}> Sign in</Text></TouchableOpacity>
                    </View>
                </ImageBackground>
            </View>
        )
    }
    _submit = () => {
        this.props.navigation.navigate('SignIn');
    };

    _signOutAsync = () => {

        this.props.navigation.navigate('SignIn');
    };
}

const styles = StyleSheet.create({
    container: {

        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    signupTextCont: {
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 16,
        flexDirection: 'row'
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
    //form
    formcontainer: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    firstAndLastName: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    inputBoxFirstname: {
        width: 145,
        backgroundColor: 'rgba(255, 255,255,0.3)',
        borderRadius: 10,
        paddingHorizontal: 16,
        fontSize: 16,
        color: '#ffffff',

        marginBottom: 5,
        marginTop: 30,

    },
    inputBoxLastname: {
        width: 145,
        backgroundColor: 'rgba(255, 255,255,0.3)',
        borderRadius: 10,
        paddingHorizontal: 16,
        fontSize: 16,
        color: '#ffffff',
        //marginVertical: 1,
        marginBottom: 5,
        marginTop: 30,
        marginLeft: 10
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
        backgroundColor: '#004c40',
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

