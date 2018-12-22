'use strict';

class SseMiddleware {

  constructor() {}

  enrich(req, res, next) {

    res.sseSetup = () => {
      res.set({
        'Content-Type': 'text/event-stream',
        'Cache-Control': 'no-cache',
        'Connection': 'keep-alive'
      });
    };

    res.sseSend = (payload) => {
      let data = JSON.stringify(payload);
      res.write(`event: message\n`);
      res.write(`data: ${data}\n\n`);
    }

    next();

  }
}

module.exports = new SseMiddleware();
