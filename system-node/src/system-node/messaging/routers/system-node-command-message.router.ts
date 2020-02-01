import { MessageRoute, MessageRouter } from '@grow/common';

const router = new MessageRouter();

router.setup([
  new MessageRoute('humidity', 'humidity'),
  new MessageRoute('moisture', 'moisture'),
  new MessageRoute('proximity', 'proximity'),
  new MessageRoute('relay', 'relay'),
  new MessageRoute('temperature', 'temperature'),
  new MessageRoute('temphum', 'temphum')
]);

export const systemNodeCommandMessageRouter: MessageRouter = router;
