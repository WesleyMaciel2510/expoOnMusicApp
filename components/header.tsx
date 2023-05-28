import React from 'react';
import { StackNavigationOptions } from '@react-navigation/stack';

const Header: React.FC = () => null;

const headerOptions = {
    headerLeft: () => null, // Hide the back arrow
    headerStyle: {
        backgroundColor: 'black',
        borderBottomWidth: 1,
        borderBottomColor: 'gray',
    },
    headerTitleStyle: { color: 'white' },
};

export { Header, headerOptions };
