import { LessonEndPipe } from './lesson-end.pipe';

describe('ColumnTitlePipe', () => {
  let pipe: LessonEndPipe;
  beforeEach(() => {
    pipe = new LessonEndPipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should calculate end of the lesson', () => {
    const result = pipe.transform('08:00', 45);
    expect(result).toEqual('08:45');
  });
});
