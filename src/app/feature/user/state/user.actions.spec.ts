import {
  Login,
  UserActionTypes,
  LoggedSuccessful,
  LoggedFailed,
  Logout,
  LogoutSuccessful,
  UserFetchedSuccessful,
  GetUser,
  UserFetchFailed
} from './user.actions';
import {mockUser} from '../mock/user.mock';

describe('UserActions', () => {

  const user = mockUser;
  it('Login', () => {
    const loginAction = new Login();
    expect(loginAction.type).toEqual(UserActionTypes.Login);
    const loggedFailedAction = new LoggedFailed();
    expect(loggedFailedAction.type).toEqual(UserActionTypes.LoggedFailed);
    const logoutAction = new Logout();
    expect(logoutAction.type).toEqual(UserActionTypes.Logout);
    const logoutSuccessful = new LogoutSuccessful();
    expect(logoutSuccessful.type).toEqual(UserActionTypes.LogoutSuccessful);
    const getUserAction = new GetUser();
    expect(getUserAction.type).toEqual(UserActionTypes.GetUser);
    const userFetchFailedAction = new UserFetchFailed();
    expect(userFetchFailedAction.type).toEqual(UserActionTypes.UserFetchFailed);
  });

  it('LoggedSuccessful', () => {
    const action = new LoggedSuccessful(user);
    expect(action.type).toEqual(UserActionTypes.LoggedSuccessful);
    const userFetchedAction = new UserFetchedSuccessful(user);
    expect(userFetchedAction.type).toEqual(UserActionTypes.UserFetchedSuccessful);
  });


});


