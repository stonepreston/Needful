import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
// This might be able to be removed, not sure
import {
  StackNavigator,
} from 'react-navigation';

export default class SignUpScreen extends React.Component {

  static navigationOptions = {
    title: 'Sign Up'
  };

  render () {
    const { navigate } = this.props.navigation;

    return (
      <View>
        <Text>Already have an account?</Text>
        <Button
          title='Login'
          onPress={() =>
            navigate('Login')
          }
        />
      </View>

    );
  }
}
