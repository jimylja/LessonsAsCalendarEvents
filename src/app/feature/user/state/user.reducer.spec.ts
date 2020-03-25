import {
  LoggedSuccessful,
  LoggedFailed,
  SettingsFetchedSuccessful,
  SettingsFetchFailed,
  Login,
} from './user.actions';
import {userInitialState, reducer} from './user.reducer';
import {mockSettings, mockUser} from '../mock/user.mock';
import {environment} from '../../../../environments/environment';

describe('User reducer', () => {
  const initState = userInitialState;
  const userLoggedState = {
    ...initState,
    isLoggedIn: true,
    profile: mockUser
  };
  beforeEach( () => {});

  it('should return user state for successful login', () => {
    const userLoggedAction = new LoggedSuccessful(mockUser);
    const loggedState = reducer(initState, userLoggedAction);
    expect(loggedState).toEqual(userLoggedState);
  });

  it('should return user state for logout', () => {
    const loggedFailedAction = new LoggedFailed();
    const newState = reducer(userLoggedState, loggedFailedAction);
    expect(newState).toEqual(initState);
  });

  it('should return settings state', () => {
    const settingsFetchedAction = new SettingsFetchedSuccessful(mockSettings);
    const settingsFetchedState = reducer(userLoggedState, settingsFetchedAction);
    expect(settingsFetchedState).toEqual({...userLoggedState, settings: mockSettings});
  });

  it('should initial settings if fetching failed', () => {
    const settingsFetchedAction = new SettingsFetchFailed();
    const settingsFailedState = reducer(userLoggedState, settingsFetchedAction);
    expect(settingsFailedState).toEqual({...userLoggedState, settings: environment.settings});
  });

  it('default', () => {
    const loginAction = new Login();
    const loginState = reducer(undefined, loginAction);
    expect(loginState).toEqual(loginState);
  });

});
