import {
  Login,
  UserActionTypes,
  LoggedSuccessful,
  LoggedFailed,
  Logout,
  LogoutSuccessful,
  GoogleProfileFetchedSuccessful,
  GetGoogleProfile,
  GoogleProfileFetchFailed
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
    const getUserAction = new GetGoogleProfile();
    expect(getUserAction.type).toEqual(UserActionTypes.GetGoogleProfile);
    const userFetchFailedAction = new GoogleProfileFetchFailed();
    expect(userFetchFailedAction.type).toEqual(UserActionTypes.GoogleProfileFetchFailed);
  });

  it('LoggedSuccessful', () => {
    const action = new LoggedSuccessful(user);
    expect(action.type).toEqual(UserActionTypes.LoggedSuccessful);
    const userFetchedAction = new GoogleProfileFetchedSuccessful(user);
    expect(userFetchedAction.type).toEqual(UserActionTypes.GoogleProfileFetchedSuccessful);
  });


});


