import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class Reminder extends React.Component {
    static navigationOptions = {
        title: 'Reminder',
        headerTitleStyle: {

            flexGrow: 1,
            textAlign: 'center',
            alignSelf: "center"
        },
        headerTintColor: 'white',
        headerStyle: {


            backgroundColor: '#00806b',
        },
    };
    render() {
        return (
            <View style={styles.container}>
                <Text>reminder</Text>
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
});