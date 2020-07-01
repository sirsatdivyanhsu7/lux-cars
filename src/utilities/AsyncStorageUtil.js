// import AsyncStorage from '@react-native-community/async-storage';
// import {AsyncStorageConstants} from '../constants/Constants';

// const AsyncStorageUtil = {
//   async setUserLoginStatus() {
//     AsyncStorage.setItem(AsyncStorageConstants.USER_LOGIN_STATUS, 'false');
//   },

//   async isUserLoggedIn() {
//     const value = await AsyncStorage.getItem(
//       AsyncStorageConstants.USER_LOGIN_STATUS,
//     );
//     return value;
//   },

//   async saveUserId(id) {
//     try {
//       await AsyncStorage.setItem('@lux-cars:userId', id);
//     } catch (error) {
//       // Error saving data
//       console.log(`Save user id Error: ${error}`);
//     }
//   },

//   async getUserId() {
//     try {
//       const userId = await AsyncStorage.getItem('@lux-cars:userId');
//       return userId;
//     } catch (error) {
//       // Error retrieving data
//       console.log('Retrive user id Error', error);
//       return [];
//     }
//   },

//   async saveJWTAuth(jwtAuth) {
//     try {
//       await AsyncStorage.setItem('@lux-cars:jwtAuth', jwtAuth);
//     } catch (error) {
//       // Error saving data
//       console.log(`Save jwtAuth Error: ${error}`);
//     }
//   },

//   async getCurrentJWTAuth() {
//     try {
//       const jwtAuth = await AsyncStorage.getItem('@lux-cars:jwtAuth');
//       return jwtAuth;
//     } catch (error) {
//       // Error retrieving data
//       console.log('Retrive jwtAuth Error', error);
//       return undefined;
//     }
//   },

//   async saveLoginState(state) {
//     try {
//       await AsyncStorage.setItem('@lux-cars:loginState', state);
//     } catch (error) {
//       // Error saving data
//       console.log(`Save login state Error: ${error}`);
//     }
//   },

//   async getLoginState() {
//     try {
//       const state = await AsyncStorage.getItem('@lux-cars:loginState');
//       return state;
//     } catch (error) {
//       // Error retrieving data
//       console.log('Retrive login state Error', error);
//       return undefined;
//     }
//   },

//   async logoutUser() {
//     try {
//       const state = await AsyncStorage.removeItem('@lux-cars:loginState');
//       await AsyncStorage.removeItem('@lux-cars:jwtAuth');
//       await AsyncStorage.removeItem('@lux-cars:userId');
//       await AsyncStorage.removeItem('@lux-cars:verificationInfo');
//       return state;
//     } catch (error) {
//       // Error retrieving data
//       console.log('Error occured while logging user out', error);
//       return undefined;
//     }
//   },
// };

// export default AsyncStorageUtil;
