// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: true,
  firebase: {
    apiKey: 'apiKey',
    authDomain: 'lessonstocalendar.firebaseapp.com',
    databaseURL: 'https://lessonstocalendar.firebaseio.com',
    projectId: 'lessonstocalendar',
    storageBucket: 'lessonstocalendar.appspot.com',
    messagingSenderId: 'senderId',
    appId: 'appId',
    measurementId: 'G-L8MQ84S23P'
  },
  gApiClient: {
    clientSecret: 'clientSecret',
    clientId: 'clientId',
    discoveryDocs: [
      'https://sheets.googleapis.com/$discovery/rest?version=v4',
      'https://content.googleapis.com/$ discovery/v1/apis/drive/v3/rest'
    ],
    ux_mode: 'popup',
    redirect_uri: 'http://localhost:4200',
    scope: [
      'https://spreadsheets.google.com/feeds/spreadsheets/private/full',
      'https://www.googleapis.com/auth/spreadsheets.readonly',
      'https://www.googleapis.com/auth/drive',
      'https://www.googleapis.com/auth/drive.appdata',
      'https://www.googleapis.com/auth/drive.file',
      'https://www.googleapis.com/auth/drive.metadata',
      'https://www.googleapis.com/auth/drive.metadata.readonly',
      'https://www.googleapis.com/auth/drive.photos.readonly',
      'https://www.googleapis.com/auth/drive.readonly',
      'https://www.googleapis.com/auth/calendar',
      'https://www.googleapis.com/auth/calendar.events'
    ].join(' ')
  },
  apiKey: 'apiKey',
  apiEndpoints: {
    token: 'https://oauth2.googleapis.com/token',
    user: 'https://www.googleapis.com/oauth2/v3/userinfo',
    calendar: `https://www.googleapis.com/calendar/v3`,
    spreadsheet: 'https://sheets.googleapis.com/v4/spreadsheets',
    drive: 'https://www.googleapis.com/drive/v3'
  },
  settings: {
    lessonsStartSchedule: ['08:00', '08:55', '10:00', '11:05', '12:00', '12:55', '13:45'],
    lessonDuration: 45
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
