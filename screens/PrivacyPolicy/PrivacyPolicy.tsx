import React from 'react';
import { VStack, Text, Box, FormControl, Input } from 'native-base';
import { StyleSheet, StatusBar } from 'react-native';
import Logo from '../../src/assets/logo.json';
import LottieView from 'lottie-react-native';

interface Props {
    navigation: any;
}

export default function Home(props: Props) {
    React.useLayoutEffect(() => {
        props.navigation.setOptions({
            headerShown: false, // Hide the header
        });
    }, [props.navigation]);
    return (
        <VStack flex={1} alignItems="center" padding={5} style={styles.container}>
            <StatusBar backgroundColor="black" />
            <Text style={styles.title}> Welcome Aboard</Text>
            <Text style={styles.title}> Enjoy your vibe</Text>
            <LottieView
                source={require('../../src/assets/logo.json')}
                autoPlay
                loop
                style={styles.image}></LottieView>
        </VStack>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'black',
    },
    image: {
        width: '50%',
        height: '50%',
        alignItems: 'center',
    },
    title: {
        color: 'white',
        padding: 10,
        fontSize: 30,
        textAlign: 'center',
        margin: 10,
        fontFamily: '',
        fontWeight: 'bold',
    },
    bottom: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        width: '100%',
        height: 50,
        backgroundColor: '#4d94ff',
    },
});
