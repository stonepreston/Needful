import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {
  StackNavigator,
} from 'react-navigation';
import SignUpScreen from 'SignUpScreen.js';
import LoginScreen from 'LoginScreen.js';

const App = StackNavigator({
  SignUp: {
    screen: SignUpScreen
  },

  Login: {
    screen: LoginScreen
  },
  
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
