export interface CalendarEntry {
  id: string;
  summary: string;
  description: string;
  timeZone: string;
  accessRole: string;
  backgroundColor: string;
}

export interface ExportStatus {
  exportSuccess: {
    total: number;
    lastEvent: string;
  };
  exportFail: {
    total: number;
    lastEvent: string;
  };
}
