import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class Setting extends React.Component {
    static navigationOptions = {
        title: 'Setting',
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
                <Text>settings</Text>
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