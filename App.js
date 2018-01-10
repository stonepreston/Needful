import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {
  StackNavigator,
} from 'react-navigation';
import HomeScreen from './screens/HomeScreen.js';
import SignUpScreen from './screens/SignUpScreen.js';
import LoginScreen from './screens/LoginScreen.js';

const App = StackNavigator({

  Home: {
    screen: HomeScreen,
  },

  SignUp: {
    screen: SignUpScreen,
  },

  Login: {
    screen: LoginScreen,
  },

});

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
