import {
  toggleLoginBtnStatus,
  loginErrorMessageAction,
  loggedInUserDetailsSave,
} from '../assets/store/action-creators/login-actions';
import actions from '../assets/store/action-types';

describe('actions', () => {
  it('should create an action to toggle login button status', () => {
    const toggleStatus = false;
    const expectedAction = {
      type: actions.TOGGLE_LOGIN_BTN_STATUS,
      status: toggleStatus
    }
    expect(toggleLoginBtnStatus(toggleStatus)).toEqual(expectedAction)
  });

  it('should create an action to store login error message', () => {
    const loginErrorMessage = 'Username does not exist';
    const expectedAction = {
      type: actions.LOGIN_ERROR,
      message: loginErrorMessage
    }
    expect(loginErrorMessageAction(loginErrorMessage)).toEqual(expectedAction)
  });

  it('should create an action to save logged in user details', () => {
    const userDetails = {
      name: 'Luke Skywalker',
      birth_year: '19BBY',
    };
    const expectedAction = {
      type: actions.SAVE_USER_DETAILS,
      details: userDetails,
    }
    expect(loggedInUserDetailsSave(userDetails)).toEqual(expectedAction)
  });
})
