import { take } from 'rxjs/operators';
import { ApplicationContext } from '../src/lib';

describe('application.context.ts', () => {
  let applicationContext: ApplicationContext;
  let testKey: string;
  let testValue: string;

  beforeAll(() => {
    applicationContext = ApplicationContext.getInstance();
    testKey = 'testKey';
    testValue = 'testValue';
  });

  it('should be defined', () => {
    expect(applicationContext).toBeDefined();
  });

  it('should be the same instance', () => {
    const anotherContext: ApplicationContext = ApplicationContext.getInstance();
    expect(applicationContext).toBe(anotherContext);
  });

  it('should get null when key doesn\'t exist', (done) => {
    const keyThatDoesntExist: string = 'keyThatDoesntExist';
    applicationContext.getItem(keyThatDoesntExist)
      .pipe(take(1))  
      .subscribe({
        next: value => expect(value).toBeNull(),
        complete: () => done()
      });
  });

  it('should get expected value when key exists', (done) => {
    const expectedValue: string = 'testValue';
    applicationContext.setItem(testKey, testValue);
    applicationContext.getItem(testKey)
      .pipe(take(1))  
      .subscribe({
        next: value => expect(value).toBe(expectedValue),
        complete: () => done()
      });
    applicationContext.setItem(testKey, testValue);
  });
});