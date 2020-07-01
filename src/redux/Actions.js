/**
 * @author Rahul Rajput
 * @email rahul@studiographene.com
 * @create date 2020-04-16 13:13:55
 * @modify date 2020-04-30 12:16:25
 * @desc [Actions, use wisely]
 */
export const DISPLAY_LOADER = 'DISPLAY_LOADER';
export const DISPLAY_USER = 'DISPLAY_USER';
export const MESSAGE_POPUP = 'MESSAGE_POPUP';
export const LOGOUT = 'LOGOUT';

export function showLoader(bool) {
  return {
    type: DISPLAY_LOADER,
    data: bool,
  };
}
export function showUser(userData) {
  return {
    type: DISPLAY_USER,
    data: {userData: userData},
  };
}
export function showMessage(bool, heading, message) {
  return {
    type: MESSAGE_POPUP,
    data: {
      visibility: bool,
      heading: heading,
      message: message,
      // link: link,
      // forceUpdate: forceUpdate,
    },
  };
}
export function logout() {
  return {
    type: LOGOUT,
  };
}
