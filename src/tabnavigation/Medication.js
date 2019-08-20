import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';


export default class Medication extends React.Component {
    static navigationOptions = {
        title: 'Medication',
        headerTitleStyle: {
            textAlign: "center",
            flex: 1
        },
        headerTintColor: 'white',
        headerStyle: {
            backgroundColor: '#00806b',
        },
    };
    render() {
        return (
            <View style={styles.container}>
                <Text>medication</Text>
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