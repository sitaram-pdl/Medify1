import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class Map extends React.Component {

    static navigationOptions = {
        header: null,

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