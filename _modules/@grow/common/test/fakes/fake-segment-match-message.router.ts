import { MessageRoute, SegmentMatchMessageRouter } from '../../src/lib';

export class FakeSegmentMatchMessageRouter extends SegmentMatchMessageRouter {
  constructor(routes: MessageRoute[]) {
    super(routes);
  }
}
