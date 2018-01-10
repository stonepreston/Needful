import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
// This might be able to be removed, not sure
import {
  StackNavigator,
} from 'react-navigation';

export default class LoginScreen extends React.Component {

  static navigationOptions = {
    title: 'Log In'
  };

  render () {
    const { navigate } = this.props.navigation;

    return (
      <Button
        title='Login'
        onPress={() =>
          navigate('Login')
        }
      />

    );
  }
}
