import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import SplashScreen from '../components/screens/splash/SplashContainer';
import LoginScreen from '../components/screens/login/LoginContainer';
import FullView from '../components/screens/home/carsList/carsDesc/CarsFullViewContainer';
import Home from '../components/screens/home/HomeContainer';
const Stack = createStackNavigator();

class Navigation extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Splash Screen"
            component={SplashScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Login Screen"
            component={LoginScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Home"
            component={Home}
            options={{headerShown: true}}
          />
          <Stack.Screen
            name="Full View"
            component={FullView}
            options={{headerShown: true}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default Navigation;
