import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
// This might be able to be removed, not sure
import {
  StackNavigator,
} from 'react-navigation';

class LoginScreen extends React.Component {

  static navigationOptions = {
    title: 'Login'
  };

  render () {
    const { navigate } = this.props.navigation;
    <Button
      title='Go to Login'
      onPress={() =>
        navigate('Login')
      }
  }
}
