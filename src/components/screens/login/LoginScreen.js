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
import {APIParameters} from '../../../constants/Constants';
import axios from 'axios';

export default class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loginEmail: '',
      loginPassword: '',
      userID: '',
    };
  }
  loginButtonPressed() {
    this.callLoginAPI();
    // For test
    // this.props.updateID('rest');
  }

  async callLoginAPI() {
    const params = {
      [APIParameters.email]: this.state.loginEmail,
      [APIParameters.password]: this.state.loginPassword,
    };
    const options = {
      headers: {
        grant_type: 'password',
        client_id: 'a0c91a1c-956f-43da-85ae-e97e8aa45f62',
        client_secret: '1234',
        username: 'faisalkahn1690@gmail.com',
        password: '1234',
      },
    };
    await axios.post(
      'https://5e91daadbbff810016968ad4.mockapi.io/login',
      params,
      options,
    );
    response => {
      if (response.token) {
        this.setState(
          {
            userID: response.userID,
          },
          function() {
            this.props.updateID(response.userID);
            this.props.navigation.navigate('Home');
          },
        );
      }
    };
    error => {
      this.props.showMessage(true, 'error', error);
    };
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
                <TextInput
                  placeholder={'Name/ID'}
                  style={styles.inputText}
                  emailValue={this.state.loginEmail}
                  onEmailChange={text => {
                    this.setState({loginEmail: text});
                  }}
                />
                <Image
                  source={ImageConstant.passUser}
                  style={styles.passLogo}
                />
              </View>
            </View>
            <View style={styles.underline}>
              <Text>Password</Text>
              <View style={styles.inputContainer}>
                <TextInput
                  placeholder={'Password'}
                  style={styles.inputText}
                  loginPassword={this.state.loginPassword}
                  onPasswordChange={text => {
                    this.setState({loginPassword: text});
                  }}
                />
                <Image source={ImageConstant.passKey} style={styles.passLogo} />
              </View>
            </View>
          </View>
          <View style={styles.login}>
            <TouchableOpacity
              onPress={() => {
                this.loginButtonPressed();
              }}>
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
    marginTop: 120,
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
