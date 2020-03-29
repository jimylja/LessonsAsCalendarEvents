import {Sheet} from '../../../models/sheet';
import {CalendarEntry} from '../../../models/calendar';

export const colorsResponse = {
  event: {
    1: {background: '#a4bdfc', foreground: '#1d1d1d'},
    2: {background: '#7ae7bf', foreground: '#1d1d1d'},
    3: {background: '#dbadff', foreground: '#1d1d1d'},
    4: {background: '#ff887c', foreground: '#1d1d1d'},
  }
};

export const eventListResponse = {
  cal1: {items: [{id: 3}, {id: 6}]},
  cal2: {items: [{id: 3}, {id: 6}]},
};

export const dummyUserCalendars: CalendarEntry[] = [
  {id: 'cal1', timeZone: '+2', description: 'calendar1', summary: 'sddfs', accessRole: 'owner', backgroundColor: '1'},
  {id: 'cal2', timeZone: '+2', description: 'calendar2', summary: 'sddfs', accessRole: 'owner', backgroundColor: '2'},
  {id: 'cal3', timeZone: '+2', description: 'calendar3', summary: 'sddfs', accessRole: 'owner', backgroundColor: '3'},
];

export const mockSheetData: Sheet[] = [
  {
    title: '5a-class',
    colorId: 3,
    lessons: [
      {number: 2, order: 4, date: new Date(), hwTheory: 'read something', hwPractice: 'do something', topic: 'topic1', location: 'kab113'},
      {number: 17, order: 6, date: new Date(), hwTheory: 'read something', hwPractice: 'do something', topic: 'topic2', location: 'kab11'},
    ],
  },
  {
    title: '8d-class',
    colorId: 10,
    lessons: [
      {number: 14, order: 2, date: new Date(), hwTheory: 'read something', hwPractice: 'do something', topic: 'topic11', location: 'kab13'},
      {number: 23, order: 4, date: new Date(), hwTheory: 'read something', hwPractice: 'do something', topic: 'topic21', location: 'kab11'},
    ],
    attendeesEmail: 'mail@email.com'
  },
];
