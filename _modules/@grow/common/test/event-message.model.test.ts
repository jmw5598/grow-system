import { EventMessage } from '../src/lib';

describe('event-message.model.ts', () => {
  let eventMessage: EventMessage;

  beforeAll(() => {
    eventMessage = new EventMessage('test', { test: 'test' });
  });

  it('should be defined', () => {
    expect(eventMessage).toBeDefined();
  });

  it('should be equal', () => {
    const expectedEventMessage: EventMessage = new EventMessage('test', { test: 'test' });
    expect(eventMessage).toEqual(expectedEventMessage);
  });
});
