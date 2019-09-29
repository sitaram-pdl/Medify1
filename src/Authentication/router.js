import {
    createSwitchNavigator,
    createAppContainer,
    createStackNavigator,
} from 'react-navigation';

import SignInScreen from '../pages/SignInScreen';
import HomeScreen from '../pages/HomeScreen';
import SignUpScreen from '../pages/SignUpScreen';


export const AppStack = createStackNavigator({ HomeScreen: HomeScreen, });
export const AuthStack = createStackNavigator({ SignIn: SignInScreen, SignUp: SignUpScreen });



export const createRootNavigator = (signedIn = false) => {
    return createAppContainer(new createSwitchNavigator(
        {
            AppContain: {
                screen: AppStack,
            },
            AuthContain: {
                screen: AuthStack,
            },
        },
        {
            initialRouteName: signedIn ? 'AppContain' : 'AuthContain',
        }
    ));
};