import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
// This might be able to be removed, not sure
import {
  StackNavigator,
  NavigationActions,
} from 'react-navigation';

export default class Things extends React.Component {

  constructor(props) {

    super(props);

  }

  static navigationOptions = ({ navigation }) => {
    const { params = {} } = navigation.state;
    return {
      title: 'Add Thing',
      headerRight: <Button title='Done' onPress={params.done ? params.done : () => null}/>
    };
  };

  componentDidMount() {

    this.props.navigation.setParams({ done: this.done });

  }


  render() {
    const { navigate } = this.props.navigation;

    return (
      <View>

      </View>

    );
  }

  // must use this syntax to avoid binding issues
  done = () => {
    this.props.navigation.dispatch(NavigationActions.back());
  }
}
