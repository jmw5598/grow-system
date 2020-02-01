import { MessageRoute, MessageRouter } from '@grow/common';

const router = new MessageRouter();

router.setup([
  new MessageRoute('system', 'system'),
  new MessageRoute('node', 'node')
]);

export const mqttMessageRouter: MessageRouter = router;;
