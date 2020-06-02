import * as React from 'react';
import { TouchableOpacity, StyleSheet, View, Text, SafeAreaView, Image } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, padding: 16 }}>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Image source={require('../../assets/henry-logo.png')}/>

          {/*

            <Text
            style={{
              fontSize: 25,
              textAlign: 'center',
              marginBottom: 16
            }}>
            You are on Home Screen
          </Text>

          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('SettingsStack', { screen: 'Settings' })}>
            <Text>Go to settng Tab</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Details')}>
            <Text>Open Details Screen</Text>
          </TouchableOpacity>

          */}

        </View>
        <Text style={{ fontSize: 18, textAlign: 'center', color: 'grey' }}>
          Welcome
        </Text>
        <Text
          style={{ fontSize: 16, textAlign: 'center', color: 'grey' }}>
          henrihome.com
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    width: 300,
    marginTop: 16,
  },
});

export default HomeScreen;