export interface Lesson {
  number: number;
  date: Date;
  order: number;
  location: string;
  topic: string;
  hwTheory: string;
  hwPractice: string;
}

export interface Sheet {
  title: string;
  colorId: number;
  attendeesEmail?: string;
  lessons?: Lesson[];
}
