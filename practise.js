import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import {
    createSwitchNavigator,
    createAppContainer,
    createDrawerNavigator,
    createStackNavigator
} from 'react-navigation';
export default class App extends Component {
    render() {
        return <AppContainer />;
    }
}

class WelcomeScreen extends Component {
    static navigationOptions = {
        title: 'Welcome',
    };
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>WelcomeScreen</Text>
                <Button
                    title="Go to DashboardScreen"
                    onPress={() => this.props.navigation.navigate('Dashboard')}
                />
            </View>
        );
    }
}

class DashboardScreen extends Component {
    static navigationOptions = {
        title: 'Dashboard',
    };

    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>DashboardScreen</Text>
            </View>
        );
    }
}
const DashboardStackNavigator = createStackNavigator(
    {
        DashboardNavigator: DashboardScreen
    },
    {
        defaultNavigationOptions: ({ navigation }) => {
            return {
                headerLeft: (
                    <Icon
                        style={{ paddingLeft: 10 }}
                        onPress={() => navigation.openDrawer()}
                        name="md-menu"
                        size={30}
                    />
                )
            };
        }
    }
);

const WelcomeStackNavigator = createStackNavigator(
    {
        WelcomeNavigator: WelcomeScreen
    },
    {
        defaultNavigationOptions: ({ navigation }) => {
            return {
                headerLeft: (
                    <Icon
                        style={{ paddingLeft: 10 }}
                        onPress={() => navigation.openDrawer()}
                        name="md-menu"
                        size={30}
                    />
                )
            };
        }
    }
);
const AppDrawerNavigator = createDrawerNavigator({
    Dashboard: {
        screen: DashboardStackNavigator
    },
    Welcome: {
        screen: WelcomeStackNavigator
    },
});

const AppSwitchNavigator = createSwitchNavigator({
    Dashboard: { screen: AppDrawerNavigator },
    Welcome: { screen: WelcomeScreen },

});

const AppContainer = createAppContainer(AppSwitchNavigator);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});