import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {ImageConstant} from '../../../assets/ImageConstant';
import {Colors} from '../../../constants/Color';

export default class LoginScreen extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Image source={ImageConstant.logo} style={styles.logo} />
          <View style={styles.textContainer}>
            <Text style={styles.normalText}>Proceed with your</Text>
            <Text style={styles.boldText}>Login</Text>
          </View>
          <View style={styles.userDetailContainer}>
            <View style={styles.underline}>
              <Text>Username</Text>
              <View style={styles.inputContainer}>
                <TextInput placeholder={'Name/ID'} style={styles.inputText} />
                <Image
                  source={ImageConstant.passUser}
                  style={styles.passLogo}
                />
              </View>
            </View>
            <View style={styles.underline}>
              <Text>Password</Text>
              <View style={styles.inputContainer}>
                <TextInput placeholder={'Password'} style={styles.inputText} />
                <Image source={ImageConstant.passKey} style={styles.passLogo} />
              </View>
            </View>
          </View>
          <View style={styles.login}>
            <TouchableOpacity>
              <Text style={styles.loginText}>Login</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.fpContainer}>
            <Text style={styles.fpText}>Forgot Password?</Text>
          </View>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    marginLeft: 10,
  },
  logoContainer: {
    top: 120,
  },
  logo: {
    height: 150,
    width: 200,
  },
  textContainer: {
    marginLeft: 15,
    marginTop: 30,
  },
  boldText: {
    color: Colors.glBlack,
    fontWeight: '900',
    fontSize: 35,
    marginTop: 10,
  },
  normalText: {
    color: Colors.glBlack,
    fontWeight: '200',
    fontSize: 25,
  },
  userDetailContainer: {
    marginLeft: 15,
    marginTop: 100,
  },
  underline: {
    borderBottomWidth: 1,
    marginRight: 30,
    borderBottomColor: Colors.glGrey,
    marginVertical: 10,
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  passLogo: {
    marginTop: 10,
    height: 20,
    width: 20,
  },
  inputText: {
    marginTop: 5,
    marginBottom: 10,
    fontSize: 18,
  },
  login: {
    marginTop: 40,
    borderWidth: 1,
    padding: 10,
    marginLeft: 15,
    marginRight: 30,
    paddingVertical: 15,
    backgroundColor: Colors.orange,
    borderColor: Colors.orange,
  },
  loginText: {
    color: Colors.white,
    fontSize: 18,
    fontWeight: '500',
    textAlign: 'center',
  },
  fpContainer: {
    marginTop: 15,
    marginLeft: -15,
    alignSelf: 'center',
  },
  fpText: {
    color: Colors.glGrey,
  },
});
