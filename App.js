import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import HomeScreen from './HomeScreen';
import SubjectScreen from './SubjectScreen.js';


export default class App extends React.Component {
  render() {
    return (
        <AppStackNavigator style = {styles.AppNav}/>
    );
  }
}

const AppStackNavigator =  createStackNavigator({
  Home: HomeScreen,
  Subject : SubjectScreen,

})

const styles = StyleSheet.create({
  AppNav: {
    backgroundColor : "#ffffff"
  }
});
