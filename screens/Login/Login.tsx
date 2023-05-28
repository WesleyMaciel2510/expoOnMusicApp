import React from 'react';
import { VStack, Text, Box, FormControl, Input } from 'native-base';
import { StyleSheet, StatusBar, TextInput } from 'react-native';
import LottieView from 'lottie-react-native';
import { Inputs } from '../../src/components/Inputs';
import { LoginButton } from '../../src/components/LoginButton';
import Icon from 'react-native-vector-icons/FontAwesome';

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

            <VStack flex={1}>
                <LottieView
                    source={require('../../src/assets/logo.json')}
                    autoPlay
                    loop
                    style={styles.image}
                />
            </VStack>
            <Box style={styles.formArea}>
                <FormControl marginTop={3}>
                    <Inputs
                        placeholder="E-mail"
                        leftIcon={<Icon name="user" size={20} color="black" />}
                    />
                    <Inputs
                        placeholder="Password"
                        leftIcon={<Icon name="lock" size={20} color="black" />}
                    />
                </FormControl>
                <VStack style={styles.loginButton}>
                    <LoginButton onPress={() => props.navigation.navigate('Home')}>
                        LOGIN
                    </LoginButton>
                </VStack>
            </Box>
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
        width: '100%',
        height: '100%',
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
    formArea: {
        flex: 2,
    },
    loginButton: {
        alignItems: 'center',
        fontSize: 10,
        fontWeight: 'bold',
    },
});
