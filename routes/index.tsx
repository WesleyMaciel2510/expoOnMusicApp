import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import Home from '../screens/Home/Home.tsx';
import Search from '../screens/Search/Search.tsx';

const Stack = createStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Details" component={Search} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
