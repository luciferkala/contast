import React from 'react';
import { createStackNavigator } from 'react-navigation';
import HomeScreen from './HomeScreen';
import SubjectScreen from './SubjectScreen.js';


export default class App extends React.Component {
  render() {
    return (
        <AppStackNavigator/>
    );
  }
}

const AppStackNavigator =  createStackNavigator({
  Home: HomeScreen,
  Subject : SubjectScreen,

})

