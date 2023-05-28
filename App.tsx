import React from 'react';
import Navigation from './routes';
import { NativeBaseProvider } from 'native-base';

export default function App() {
    return (
        <NativeBaseProvider>
            <Navigation />
        </NativeBaseProvider>
    );
}
