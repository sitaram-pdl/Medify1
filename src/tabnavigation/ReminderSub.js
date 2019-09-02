import React from 'react';
import { StyleSheet, Text, View, ScrollView, SafeAreaView, TouchableOpacity } from 'react-native';

export default class ReminderSub extends React.Component {
    constructor(props) {
        super(props);

    }


    static navigationOptions = {
        header: null,

    };

    add = () => {
        this.props.navigation.navigate('Reminder');
    }
    render() {
        return (

            <ScrollView>
                <View style={styles.container}>
                    <Text>mathi flat list rakha... database bate save bhako tanni</Text>
                </View>
                <TouchableOpacity style={styles.button} onPress={this.add} >
                    <Text style={styles.buttonText} >Add  Reminder</Text>
                </TouchableOpacity>

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
