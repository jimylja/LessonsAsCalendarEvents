import {of} from 'rxjs';
import {mockSettings, mockUser, mockStatistic} from './user.mock';

export class FirebaseMock {
  public collection(collection: string) {
   return {
     doc(id: string) {
       return {
        get() {
          return of({
            exists: Object.keys(mockDb[collection]).includes(id),
            data() { return mockDb[collection][id]; }
          });
        },
        valueChanges() {
          return of(mockDb[collection][id]);
        },
        set(user) {
          return {
            then() {
              mockDb[collection][id] = user;
              return of(user.settings);
            }
          };
        }
      };
     }
   };
  }
}


export const mockDb = {
  users: {
    werwfsdfsdf0d8sfsd: {
      profile: mockUser,
      settings: mockSettings,
      statistic: mockStatistic
    }
  }
};
