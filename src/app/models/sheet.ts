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
  color: string;
  attendeesEmail?: string;
  lessons?: Lesson[];
}
