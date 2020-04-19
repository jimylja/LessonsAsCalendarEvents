import { ColumnTitlePipe, LessonEntities } from './column-title.pipe';
describe('ColumnTitlePipe', () => {
  let pipe: ColumnTitlePipe;
  beforeEach(() => {
    pipe = new ColumnTitlePipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should return new title', () => {
    const val = 'date';
    const result = pipe.transform(val);
    expect(result).toEqual(LessonEntities[val]);
  });
});
