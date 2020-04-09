import {
  LoggedSuccessful,
  LoggedFailed,
  UserDataFetchedSuccessful,
  Login,
  UserDataFetchFailed,
} from './user.actions';
import {userInitialState, reducer} from './user.reducer';
import {mockSettings, mockStatistic, mockUser} from '../mock/user.mock';
import {environment} from '../../../../environments/environment';

describe('User reducer', () => {
  const initState = userInitialState;
  const userLoggedState = {
    ...initState,
    profile: mockUser,
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

  it('should return user state', () => {
    const userFetchedAction = new UserDataFetchedSuccessful({profile: mockUser, statistic: mockStatistic, settings: mockSettings});
    const userFetchedState = reducer(userLoggedState, userFetchedAction);
    expect(userFetchedState).toEqual({...userLoggedState, settings: mockSettings, statistic: mockStatistic});
  });

  it('should return initial settings if fetching failed', () => {
    const userFetchedAction = new UserDataFetchFailed();
    const settingsFailedState = reducer(userLoggedState, userFetchedAction);
    expect(settingsFailedState).toEqual({...userLoggedState, settings: environment.settings});
  });

  it('default', () => {
    const loginAction = new Login();
    const loginState = reducer(undefined, loginAction);
    expect(loginState).toEqual(loginState);
  });

});
