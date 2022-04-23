import { Event } from './';

describe('Event', () => {
  const eventBus = new Event();
  const b = (params: unknown) => {
    console.log('B recieved', params);
  };
  const eventType = 'publish';
  let mockB: typeof b;

  beforeEach(() => {
    mockB = jest.fn(b);
  });

  test('add and emit a event, listener is called', () => {
    eventBus.on(eventType, mockB);
    eventBus.emit(eventType, 'message 1');
    expect(mockB).toBeCalledTimes(1);
    expect(mockB).toBeCalledWith(['message 1']);
    eventBus.off(eventType, mockB);
  });

  test('given an not exist event, throw error', () => {
    eventBus.on(eventType, mockB);
    const event = eventType + '123';
    expect(() => eventBus.off(event, mockB)).toThrow('未绑定该事件');
  });

  test('passing no handler to off, all handlers of this type removed', () => {
    // @ts-ignore-next-line
    eventBus.off(eventType);
    expect(eventBus.handlers[eventType]).toBeUndefined();
  });

  test('passing error handler to off, throw error', () => {
    eventBus.on(eventType, mockB);
    expect(() => eventBus.off(eventType, () => {})).toThrow();
    eventBus.off(eventType, mockB);
  });

  test('remove event, emit will not trigger callback', () => {
    eventBus.on(eventType, mockB);
    eventBus.off(eventType, mockB);
    eventBus.emit(eventType, 'message 2');
    expect(mockB).not.toBeCalled();
  });
});
