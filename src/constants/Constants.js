const Debugs = {
  APILogs: true,
};

const Numbers = {
  maxPhoneNo: 13,
  minPhoneNo: 6,
  zero: 0,
};

const LoginState = {
  login: 'logged in',
};
const APIParameters = {
  //General
  id: 'id',
  data: 'data',
  headers: 'headers',
  userId: 'userId',
  token: 'token',
  name: 'name',
  description: 'description',
  deviceToken: 'deviceToken',
  deviceId: 'deviceId',
  deviceType: 'deviceType',
  message: 'message',

  //User
  email: 'email',
  password: 'password',
  confirmNewPassword: 'confirmPassword',
  firstName: 'firstName',
  lastName: 'lastName',
  phone: 'phone',
  accessCode: 'access_code',
  accessCodeId: 'access_code_id',
  userRole: 'userRole',
  tokenvalue: 'token',
  authToken: 'x-auth-token',

  //Profile
  oldPassword: 'oldPassword',
  newPassword: 'newPassword',
  correctInput: 'correct_input',
  wrongInput: 'wrong_input',
};

const AsyncStorageConstants = {
  USER_LOGIN_STATUS: 'USER_LOGIN_STATUS',
};

module.exports = {
  Debugs,
  Numbers,
  APIParameters,
  LoginState,
  AsyncStorageConstants,
};
