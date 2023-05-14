import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

interface Props {
    navigation: any;
}

export default function BottomIcons(props: Props) {
    const navigation = useNavigation();

    return (
        <View style={styles.bottom}>
            <TouchableOpacity
                style={styles.iconContainer}
                onPress={() => props.navigation.navigate('Home')}>
                <Ionicons name="home-outline" size={24} color="white" />
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.iconContainer}
                onPress={() => props.navigation.navigate('Search')}>
                <Ionicons name="search-outline" size={24} color="white" />
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.iconContainer}
                onPress={() => props.navigation.navigate('Library')}>
                <Ionicons name="library-outline" size={24} color="white" />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    bottom: {
        flexDirection: 'row',
        width: '100%',
        height: 50,
        backgroundColor: '#4d94ff',
    },
    iconContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
