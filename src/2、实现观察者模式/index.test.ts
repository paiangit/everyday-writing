import { Subject, Observer } from './';

describe('Subject', () => {
  let subject: Subject;

  beforeEach(() => {
    subject = new Subject();
  });

  test('add observer', () => {
    const observer = new Observer('b');
    subject.add(observer);
    expect(subject.observers).toContain(observer);
    subject.remove(observer);
  });

  test('remove observer', () => {
    const observer = new Observer('b');
    subject.add(observer);
    subject.remove(observer);
    expect(subject.observers).not.toContain(observer);
  });

  test('remove not exist observer, throw error', () => {
    const observer = new Observer('b');
    expect(() => subject.remove(observer)).toThrow('没有该observer');
  });

  test('notify', () => {
    const observerB = new Observer('b');
    const observerC = new Observer('c');
    // 注意这里jest.spyOn的使用，这里不能用jest.fn
    const mockUpdateB = jest.spyOn(observerB, 'update');
    const mockUpdateC = jest.spyOn(observerC, 'update');

    subject.add(observerB);
    subject.add(observerC);
    subject.notify();
    expect(mockUpdateB).toBeCalledTimes(1);
    expect(mockUpdateC).toBeCalledTimes(1);
    subject.remove(observerB);
    subject.remove(observerC);
  });
});
