import React, {Component} from 'react';
import {View, Text, ImageBackground, StyleSheet, Image} from 'react-native';
import {ImageConstant} from '../../../assets/ImageConstant';
import {Colors} from '../../../constants/Color';

export default class SplashScreen extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    setTimeout(() => {
      this.props.navigation.navigate('Login Screen');
    }, 2500);
  }

  render() {
    return (
      <ImageBackground
        source={ImageConstant.backgroundImage}
        style={style.bgImageContainer}>
        <View style={style.logoContainer}>
          <Image source={ImageConstant.logo} />
          <View style={style.textContainer}>
            <Text style={style.headingText}>Lux-Cars</Text>
          </View>
          <View style={style.textContainer}>
            <Text style={style.normalText}>The Complete Cars Solution</Text>
          </View>
        </View>
      </ImageBackground>
    );
  }
}
const style = StyleSheet.create({
  bgImageContainer: {
    flex: 1,
    width: '100%',
    opacity: 0.85,
  },
  logoContainer: {
    top: 250,
    alignSelf: 'center',
  },
  textContainer: {
    alignSelf: 'center',
  },
  headingText: {
    color: Colors.glWhite,
    fontWeight: 'bold',
    fontSize: 50,
  },
  normalText: {
    color: Colors.glWhite,
    fontWeight: '900',
    fontSize: 15,
  },
});
