import { of } from 'rxjs/internal/observable/of';
import { mockUser } from './user.mock';

export const dummyToken = {
  refreshToken: 'refreshToken',
  accessToken: 'accessToken'
};

export const dummyUserInfoResp = {
  sub: mockUser.id,
  given_name: mockUser.firstName,
  family_name: mockUser.lastName,
  picture: mockUser.avatar,
  email: mockUser.email,
};


const storage = {
  localStorage: {},
  sessionStorage: {}
};

export const mockStorage = (type: string) => {
  const store = storage[type];
  return {
    getItem: (key: string): string => {
      return key in store ? store[key] : null;
    },
    setItem: (key: string, value: string) => {
      store[key] = `${value}`;
      return store[key];
    },
    removeItem: (key: string) => {
      delete store[key];
    }
  };
};

export const mockAuthService = {
  getAuth() { return of(new MockGoogleAuth()); }
};

export class MockGoogleAuth {
  constructor() {}
  grantOfflineAccess() {
    return of({code: {code: 'mockAccessCode'}});
  }
  signIn() { return new Promise(resolve => mockUser); }
  get currentUser() {
    return {
      get() {
        console.log('user get');
        return {
          getAuthResponse() { return {access_token: dummyToken.accessToken}; },
          getBasicProfile() { return basicProfile; }
        };
      }
    };
  }
}

const basicProfile = {
  getId() {return mockUser.id; },
  getGivenName() {return mockUser.firstName; },
  getFamilyName() {return mockUser.lastName; },
  getImageUrl() {return mockUser.avatar; },
  getEmail() {return mockUser.email; }
};
