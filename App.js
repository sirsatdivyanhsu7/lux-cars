import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import Nav from './src/root/Navigation';
import {Provider} from 'react-redux';
import Store from './src/redux/Store';

const store = Store();
export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <View style={Styles.container}>
          <Nav />
        </View>
      </Provider>
    );
  }
}
const Styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
