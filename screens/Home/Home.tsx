import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

interface Props {
  navigation: any;
}

export default function Home(props: Props) {
  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => props.navigation.navigate('Details')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
