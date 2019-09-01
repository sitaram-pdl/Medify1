import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import { Dropdown } from 'react-native-material-dropdown';
import { ScrollView } from 'react-native-gesture-handler';



export default class Medication extends React.Component {
    static navigationOptions = {
        header: null,

    };
    state = {

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
                    <TextInput
                        style={{
                            flexGrow: 1,
                            height: 43, width: 320,
                            borderColor: '#00806b',
                            borderWidth: 1,
                            marginBottom: 5,
                            fontSize: 16,
                            borderRadius: 5,
                            color: '#00806b',
                            marginLeft: 10,
                            marginRight: 10,
                            marginTop: 30
                        }}

                        placeholder="Enter Your name of medification"
                        underlineColorAndroid="transparent"
                        ref="medificationName"
                        onChangeText={(nameOfMedication) => this.setState({ nameOfMedication })}
                        onSubmitEditing={() => this.refs.mtype.focus()}
                    />

                    <Dropdown
                        label='Medicine type'
                        data={data}

                        containerStyle={{

                            width: 320,
                            width: 300,
                            marginBottom: 40,
                            fontSize: 16,
                            borderRadius: 5,
                            color: '#00806b',
                        }}
                        ref='mtype'
                        onSubmitEditing={() => this.refs.doses.focus()}
                        onChangeText={(medicationType) => this.setState({ medicationType })}
                    />


                    <TextInput
                        style={{
                            flexGrow: 1,
                            height: 43, width: 320,
                            borderColor: '#00806b',
                            borderWidth: 1,
                            marginBottom: 5,
                            fontSize: 16,
                            borderRadius: 5,
                            color: '#00806b',
                            marginLeft: 10,
                            marginRight: 10,
                            marginTop: 5
                        }}
                        placeholder="Dosage"
                        keyboardType='numeric'
                        underlineColorAndroid="transparent"
                        ref="doses"
                        onSubmitEditing={() => this.refs.quality.focus()}
                        onChangeText={(doses) => this.setState({ doses })}
                    />
                    <TextInput
                        style={{
                            flexGrow: 1,
                            height: 43, width: 320,
                            borderColor: '#00806b',
                            borderWidth: 1,
                            marginBottom: 5,
                            fontSize: 16,
                            borderRadius: 5,
                            color: '#00806b',
                            marginLeft: 10,
                            marginRight: 10,
                            marginTop: 30
                        }}
                        placeholder="Quantity"
                        keyboardType='numeric'
                        underlineColorAndroid="transparent"
                        ref="quality"
                        onSubmitEditing={() => this.refs.medificationNote.focus()}
                        onChangeText={(quality) => this.setState({ quality })}
                    />
                    <TextInput
                        style={{
                            flexGrow: 1,
                            height: 100, width: 320,
                            borderColor: '#00806b',
                            borderWidth: 1,
                            marginBottom: 5,
                            fontSize: 16,
                            borderRadius: 5,
                            color: '#00806b',
                            marginLeft: 10,
                            marginRight: 10,
                            marginTop: 30
                        }}
                        multiline={true}
                        numberOfLines={2}
                        placeholder="Medification note"
                        underlineColorAndroid="transparent"
                        ref="medificationNote"
                        onChangeText={(medificationNote) => this.setState({ medificationNote })}

                    />
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