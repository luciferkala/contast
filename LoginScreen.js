import React from 'react';
import { Proptypes } from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome';
import { StyleSheet, Text, View, ScrollView, KeyboardAvoidingView } from 'react-native';

import HomeScreen from './HomeScreen'
import InputField from './InputField'


class LoginScreen extends React.Component {
  render() {
    return (
      <KeyboardAvoidingView style={styles.wrapper}>
        <View style={styles.scrollViewWrapper}>
          <ScrollView style={styles.scrollView}>
            <Text style={styles.loginHeader}>Log In</Text>
            <InputField
                labelText="STUDENT ID"
                labelTextSize={14}
                labelColor="#2798F7"
            />
            <InputField
                labelText="PASSWORD"
                labelTextSize={14}
                labelColor="#2798F7"
            />
          </ScrollView>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

export default LoginScreen;

const styles = StyleSheet.create({
 wrapper: {
     display: 'flex',
     flex: 1,
     backgroundColor: "#ffffff"
 },
 scrollViewWrapper: {
     marginTop: 70,
     flex: 1
 },
 loginHeader: {
    fontSize: 34,
    color: "#2798F7",
    fontWeight: "300",
    marginBottom: 40
 },
 scrollView:{
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 20,
    flex: 1
 }
});
