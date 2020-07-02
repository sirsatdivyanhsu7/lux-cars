import React, {Component} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import CarsList from './carsList/CarsList';
import Info2 from './info2/Info2';
import Info3 from './info3/Info3';
import {Colors} from '../../../constants/Color';
const Tab = createBottomTabNavigator();

export default class Home extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: Colors.blue,
        }}>
        <Tab.Screen name="Items" component={CarsList} />
        <Tab.Screen name="About Us" component={Info2} />
        <Tab.Screen name="Contact Us" component={Info3} />
      </Tab.Navigator>
    );
  }
}
