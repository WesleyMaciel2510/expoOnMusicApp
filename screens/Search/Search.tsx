import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import BottomIcons from '../../components/BottomIcons';
import { NativeBaseProvider, StatusBar } from 'native-base';

interface Props {
    navigation: any;
}

export default function Search(props: Props) {
    React.useLayoutEffect(() => {
        props.navigation.setOptions({
            headerLeft: () => null, // Hide the back arrow
            headerStyle: {
                backgroundColor: 'black',
                borderBottomWidth: 1,
                borderBottomColor: 'gray',
            },
            headerTitleStyle: { color: 'white' },
        });
    }, [props.navigation]);
    return (
        <NativeBaseProvider>
            <StatusBar backgroundColor={'#4d94ff'} />
            <View style={styles.container}>
                <Text>Search Screen</Text>

                <Button title="Go to Search" onPress={() => props.navigation.navigate('Home')} />
                <View style={styles.bottom}>
                    <BottomIcons navigation={props.navigation} />
                </View>
            </View>
        </NativeBaseProvider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'black',
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
