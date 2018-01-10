import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
// This might be able to be removed, not sure
import {
  StackNavigator,
} from 'react-navigation';
import { onSignIn } from '../auth.js';

export default class SignIn extends React.Component {

  static navigationOptions = {
    
  };

  render () {
    const { navigate } = this.props.navigation;

    return (
      <Button
        title='Sign In'
        onPress={() => {
          onSignIn().then(() => navigate("SignedIn"));
        }}
      />

    );
  }
}
