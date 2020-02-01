import { MessageRoute, MessageRouter } from '@grow/common';

const router = new MessageRouter();

router.setup([
  new MessageRoute('command', 'command'),
  new MessageRoute('component', 'component'),
  new MessageRoute('register', 'register')
]);

const systemNodeMessageRouter: MessageRouter = router;
