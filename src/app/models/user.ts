export interface User {
  id: string;
  firstName: string;
  lastName: string;
  avatar: string;
  email: string;
}

export interface UserStats {
  lastVisit?: Date;
  activity?: CalendarExportStats[];
  lastCalendar: string;
}

export interface CalendarExportStats {
  calendar: string;
  exportSuccess: number;
  exportFail: number;
}
