import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import Home from '../screens/Home/Home';
import Search from '../screens/Search/Search';
import Library from '../screens/Library/Library';
import Login from '../screens/Login/Login';
import ForgotPassword from '../screens/ForgotPassword/ForgotPassword';
import SignIn from '../screens/SignIn/SignIn';

const Stack = createStackNavigator();

export default function Navigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login">
                {/* Login Stack */}
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
                <Stack.Screen name="SignIn" component={SignIn} />

                {/* Authenticated Stack */}
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Search" component={Search} />
                <Stack.Screen name="Library" component={Library} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
