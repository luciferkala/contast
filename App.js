import React from 'react';
 import { Proptypes } from 'prop-types';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import HomeScreen from './HomeScreen';
import SubjectScreen from './SubjectScreen.js';
import LoginScreen from './LoginScreen.js';


class App extends React.Component {
  static navigationOptions = {
    title: 'Home'
  };
  render() {
    return (
        <AppStackNavigator style={styles.AppNav}/>
    );
  }
}

const AppStackNavigator =  createStackNavigator(
  {Login: LoginScreen,
  Home: HomeScreen,
  Subject : SubjectScreen,
  },
  {
    initialRouteName: 'Login',
    /* The header config from HomeScreen is now here */
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#ffffff',
        borderBottomColor: 'transparent'
      },
      headerTintColor: '#2798F7',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  }
)

export default App;

const styles = StyleSheet.create({
  AppNav : {
    backgroundColor: "#ffffff"
  }
})
