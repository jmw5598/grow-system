import { Logger } from '../src/lib';

describe('logger.service.ts', () => {
  let logger: Logger;

  beforeAll(() => {
    logger = new Logger('LoggerTest');
  });

  it('should be defined', () => {
    expect(logger).toBeDefined();
  });

  it('should call debug function with \'test\'', () => {
    const debugSpy = jest.spyOn(logger, 'debug');
    logger.debug('test');
    expect(debugSpy).toHaveBeenCalledWith('test');
  });

  it('should call warn function with \'test\'', () => {
    const warnSpy = jest.spyOn(logger, 'warn');
    logger.warn('test');
    expect(warnSpy).toBeCalledWith('test');
  });

  it('should call error function with \'test\'', () => {
    const errorSpy = jest.spyOn(logger, 'error');
    logger.error('test');
    expect(errorSpy).toBeCalledWith('test');
  });

  it('shuld call danger function with \'test\'', () => {
    const dangerSpy = jest.spyOn(logger, 'danger');
    logger.danger('test');
    expect(dangerSpy).toBeCalledWith('test');
  });

  it('should call trace function with \'test\'', () => {
    const traceSpy = jest.spyOn(logger, 'trace');
    logger.trace('test');
    expect(traceSpy).toBeCalledWith('test');
  });
});