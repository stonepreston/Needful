import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
// This might be able to be removed, not sure
import {
  StackNavigator,
} from 'react-navigation';
import { onSignIn } from '../auth.js';

export default class SignUp extends React.Component {

  static navigationOptions = {
    
  };

  render () {
    const { navigate } = this.props.navigation;

    return (
      <View>
        <Button
          title='Sign Up'
          onPress={() => {
            onSignIn().then(() => navigate("SignedIn"));
          }}
        />
        <Text>Already have an account?</Text>
        <Button
          title='Sign In'
          onPress={() =>
            navigate('SignIn')
          }
        />
      </View>

    );
  }
}
