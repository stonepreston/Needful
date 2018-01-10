import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
// This might be able to be removed, not sure
import {
  StackNavigator,
} from 'react-navigation';
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Feather';

export default class Things extends React.Component {

  static navigationOptions = ({navigation}) => ({
    title: 'Needful',
  });


  render () {
    const { navigate } = this.props.navigation;

    return (
      <View style={{flex:1}}>
        <ActionButton buttonColor="rgba(231,76,60,1)">
          <ActionButton.Item buttonColor='#9b59b6' title="Add" onPress={() => {navigate('AddThing')}}>
            <Icon name="plus" style={styles.actionButtonIcon} />
          </ActionButton.Item>
          <ActionButton.Item buttonColor='#3498db' title="Edit" onPress={() => {}}>
            <Icon name="minus" style={styles.actionButtonIcon} />
          </ActionButton.Item>
          <ActionButton.Item buttonColor='#1abc9c' title="Settings" onPress={() => {navigate('Settings')}}>
            <Icon name="settings" style={styles.actionButtonIcon} />
          </ActionButton.Item>
        </ActionButton>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: 'white',
  },
});
