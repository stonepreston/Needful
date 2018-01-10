import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
// This might be able to be removed, not sure
import {
  StackNavigator,
} from 'react-navigation';

export default class HomeScreen extends React.Component {

  static navigationOptions = {
    title: 'Home'
  };

  render () {
    const { navigate } = this.props.navigation;

    return (
      <Button
        title='Sign Up'
        onPress={() =>
          navigate('SignUp')
        }
      />

    );
  }
}
