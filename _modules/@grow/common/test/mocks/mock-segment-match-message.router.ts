import { MessageRoute, SegmentMatchMessageRouter } from '../../src/lib';

export class MockSegmentMatchMessageRouter extends SegmentMatchMessageRouter {
  constructor(routes: MessageRoute[]) {
    super(routes);
  }
}