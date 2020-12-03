export function loginReducer(state = {
  loginBtnEnabledStatus: true,
  errMsg: '',
  userDetails: '',
}, action) {
  let newState = {};
  switch (action.type) {
    case 'TOGGLE_LOGIN_BTN_STATUS':
      newState = { ...state, loginBtnEnabledStatus: action.status };
      break;
    case 'LOGIN_ERROR_MESSAGE':
      newState = { ...state, errMsg: action.message };
      break;
    case 'LOGGEDIN_USER_DETAILS_SAVE':
      newState = { ...state, userDetails: action.details };
      break;
    default:
      newState = state;
  }

  return newState;
};
