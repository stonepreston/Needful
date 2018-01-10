import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
// This might be able to be removed, not sure
import {
  StackNavigator,
} from 'react-navigation';
import { onSignOut } from '../auth.js';

export default class Settings extends React.Component {

  static navigationOptions = {
    title: 'Settings',
  };

  render () {
    const { navigate } = this.props.navigation;

    return (
      <Button
        title='Sign Out'
        onPress={() => {
          onSignOut().then(() => navigate("SignedOut"));
        }}
      />

    );
  }
}
