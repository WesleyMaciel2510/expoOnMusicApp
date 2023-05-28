import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import BottomIcons from '../components/BottomIcons';

interface Props {
    navigation: any;
}

export default function Home(props: Props) {
    return (
        <View style={styles.container}>
            <Text>Home Screen</Text>

            <Button title="Go to Search" onPress={() => props.navigation.navigate('Search')} />
            <View style={styles.bottom}>
                <BottomIcons navigation={props.navigation} />
            </View>
        </View>
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
