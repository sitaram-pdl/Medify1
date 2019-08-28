import React from 'react';
import {
    ActivityIndicator,
    AsyncStorage,
    Alert,

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

    state = {

        userid: '',

        password: '',
        repassword: '',
        message: '',
    };

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

                        <TextInput style={styles.inputBox}
                            underlineColorAndroid='rgba(0,0,0,0)'
                            placeholder=" User Id"
                            placeholderTextColor="#ffffff"
                            keyboardType="email-address"
                            ref="userid"
                            onChangeText={(userid) => this.setState({ userid })}
                            onSubmitEditing={() => this.refs.password.focus()}

                        />



                        <TextInput style={styles.inputBox}
                            underlineColorAndroid='rgba(0,0,0,0)'
                            placeholder="Password"
                            secureTextEntry={true}
                            placeholderTextColor="#ffffff"
                            ref="password"
                            onChangeText={(password) => this.setState({ password })}
                            onSubmitEditing={() => this.refs.repassword.focus()}

                        />
                        <TextInput style={styles.inputBox}
                            underlineColorAndroid='rgba(0,0,0,0)'
                            placeholder="Re-type Password"
                            secureTextEntry={true}
                            placeholderTextColor="#ffffff"
                            ref="repassword"
                            onChangeText={(repassword) => this.setState({ repassword })}

                        />
                        {!!this.state.message && (
                            <Text style={styles.message} >
                                {this.state.message}
                            </Text>
                        )}
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
        if (this.state.firstname == "") { this.setState({ message: "invalid firstname :(" }) }
        else if (this.state.lastname == "") { this.setState({ message: "invalid lastname  :(" }) }
        else if (this.state.userid == "") { this.setState({ message: "invalid Userid  :(" }) }
        else if (this.state.birthYear == "" || this.state.birthYear >= 2019 || this.state.birthYear <= 0) { this.setState({ message: "invalid birthYear  :(" }) }
        else if (this.state.birthMonth == "" || this.state.birthMonth >= 13 || this.state.birthMonth <= 0) { this.setState({ message: "invalid birthMonth :(" }) }
        else if (this.state.birthDay == "" || this.state.birthDay >= 32 || this.state.birthDay <= 0) { this.setState({ message: "invalid birthDay :(" }) }
        else if (this.state.password == "") { this.setState({ message: "invalid Password :(" }) }
        else if (this.state.repassword != this.state.password) { this.setState({ message: "Oops! passwords are not matching :(" }) }



        else this._Submited();
    }
    _Submited = () => {

        Alert.alert(
            "Submitting",
            "Are you Submitting?",
            [
                {
                    text: "Cancel",
                    onPress: () => {
                        console.log("Cancel Pressed");
                    },
                    style: "cancel"
                },
                { text: "subbmit", onPress: () => this.props.navigation.navigate('SignIn') }
            ],
            { cancelable: false }
        );
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
        height: 45,
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
        height: 45,
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
        height: 45,
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
    },
    inputYYYY: {
        width: 80,
        height: 45,
        backgroundColor: 'rgba(255, 255,255,0.3)',
        borderRadius: 10,
        paddingHorizontal: 16,
        fontSize: 16,
        color: '#ffffff',
        marginLeft: 10,
        marginBottom: 4,
        marginTop: 4,
    },
    inputMM: {
        width: 60,
        height: 45,
        backgroundColor: 'rgba(255, 255,255,0.3)',
        borderRadius: 10,
        paddingHorizontal: 16,
        fontSize: 16,
        color: '#ffffff',
        marginLeft: 10,
        marginBottom: 4,
        marginTop: 4,
    },
    inputDD: {
        width: 60,
        height: 45,
        backgroundColor: 'rgba(255, 255,255,0.3)',
        borderRadius: 10,
        paddingHorizontal: 16,
        fontSize: 16,
        color: '#ffffff',
        marginLeft: 10,
        marginBottom: 4,
        marginTop: 4,
    },
});

