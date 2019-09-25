import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import { Dropdown } from 'react-native-material-dropdown';
import { ScrollView } from 'react-native-gesture-handler';
import DatePicker from 'react-native-datepicker';



export default class Medication extends React.Component {
    static navigationOptions = {
        header: null,


    };


    add = () => {
        this.props.navigation.goBack()
    }
    state = {
        date: "",
        time: "",
        nameOfMedication: '',
        medificationNote: '',
        medicationType: '',
        doses: '',
        quality: '',
    };

    render() {
        let data = [{
            value: 'Pills',
        }, {
            value: 'Syrup',
        }, {
            value: 'Injection',
        },
        {
            value: 'Capsule'
        }
        ];

        return (

            <ScrollView>
                < KeyboardAvoidingView style={styles.container}>



                    <Dropdown
                        label='Medicine name'
                        data={data}

                        containerStyle={{
                            paddingTop: 30,

                            width: 320,
                            width: 300,
                            marginBottom: 40,
                            fontSize: 16,
                            borderRadius: 5,
                            color: '#00806b',
                        }}
                        ref='mname'
                        onSubmitEditing={() => this.refs.date.focus()}
                        onChangeText={(medicationType) => this.setState({ medicationType })}
                    />
                    <View style={{ flexDirection: 'row', }}>
                        <Text style={{
                            fontSize: 19,
                            paddingTop: 18,
                            paddingBottom: 10,
                            paddingLeft: -20,
                            color: '#00806b'
                        }}>Date: </Text>
                        <DatePicker
                            style={{
                                width: 270,
                                paddingTop: 10,
                                paddingBottom: 20,
                                marginBottom: 15
                            }}
                            date={this.state.date}
                            mode="date"
                            placeholder="Select date"
                            format="YYYY-MM-DD"
                            minDate="2016-05-01"
                            maxDate="2016-06-01"
                            confirmBtnText="Confirm"
                            cancelBtnText="Cancel"

                            customStyles={{
                                placeholderText: {
                                    fontSize: 17,
                                    color: 'grey',
                                },
                                dateText: {
                                    fontSize: 17,
                                    color: '#00806b',

                                },
                                dateIcon: {
                                    position: 'absolute',
                                    left: 0,
                                    top: 4,
                                    marginLeft: 0
                                },
                                dateInput: {
                                    width: 300,
                                    borderColor: '#00806b',
                                    borderRadius: 5,
                                },
                                dateTouchBody: {
                                    width: 250,

                                }
                            }}
                            ref='date'
                            onSubmitEditing={() => this.refs.noofdays.focus()}
                            onDateChange={(date) => { this.setState({ date: date }) }}
                        />
                    </View>

                    <TextInput
                        style={{
                            flexGrow: 1,
                            height: 43, width: 320,
                            borderColor: '#00806b',
                            borderWidth: 1,
                            marginBottom: 20,
                            fontSize: 16,
                            borderRadius: 5,
                            color: '#00806b',
                            marginLeft: 10,
                            marginRight: 10,
                            marginTop: 5
                        }}
                        placeholder="   No of days"
                        keyboardType='numeric'
                        underlineColorAndroid="transparent"
                        ref='noofdays'
                        onSubmitEditing={() => this.refs.time.focus()}
                        onChangeText={(doses) => this.setState({ doses })}
                    />

                    <View style={{ flexDirection: 'row', }}>
                        <Text style={{
                            fontSize: 19,
                            paddingTop: 18,
                            paddingBottom: 10,
                            paddingLeft: -20,
                            color: '#00806b'
                        }}>Time: </Text>
                        <DatePicker
                            style={{
                                width: 270,
                                paddingTop: 10,
                                paddingBottom: 20,
                            }}
                            date={this.state.time}
                            mode="time"
                            placeholder="Select time"
                            iconSource={require('../images/t1.png')}
                            confirmBtnText="Confirm"
                            cancelBtnText="Cancel"
                            customStyles={{
                                placeholderText: {
                                    fontSize: 17,
                                    color: 'grey',
                                },
                                dateText: {
                                    fontSize: 17,
                                    color: '#00806b',

                                },
                                dateIcon: {
                                    position: 'absolute',
                                    left: 0,
                                    top: 4,
                                    marginLeft: 0
                                },
                                dateInput: {
                                    width: 300,
                                    borderColor: '#00806b',
                                    borderRadius: 5,
                                },
                                dateTouchBody: {
                                    width: 250,

                                }

                            }}
                            ref='time'

                            onDateChange={(time) => { this.setState({ time: time }) }}
                        />
                    </View>



                    <View style={styles.signupTextCont}>
                        <TouchableOpacity style={styles.button} onPress={this.add} >
                            <Text style={styles.buttonText} >ADD</Text>
                        </TouchableOpacity>
                    </View>
                </ KeyboardAvoidingView>
            </ScrollView>

        );
    }


}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    button: {
        width: 300,
        backgroundColor: '#00806b',
        borderRadius: 15,
        marginVertical: 14,
        paddingVertical: 13,
        alignItems: 'center',
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        fontSize: 16,
        fontWeight: '500',
        color: '#ffffff',
        textAlign: 'center', justifyContent: 'center',
        alignItems: 'center',
    }
});