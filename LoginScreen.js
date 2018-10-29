import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './HomeScreen'

export default class LoginScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>This is LoginScreen</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    backgroundColor: "#ffffff"
  }
});
