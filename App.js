import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import Nav from './src/root/NavContainer';
import {Provider} from 'react-redux';
import Store from './src/redux/Store';
import {PersistGate} from 'redux-persist/integration/react';

const {store, persistor} = Store();
export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <View style={Styles.container}>
            <Nav />
          </View>
        </PersistGate>
      </Provider>
    );
  }
}
const Styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
