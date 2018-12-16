'use strict';

class SseMiddleware {

  constructor() {}

  enrich(req, res, next) {

    res.sse = {
      setup: () => {
        res.writeHead(200, {
          'Content-Type': 'text/event-stream',
          'Cache-Control': 'no-cache',
          'Connection': 'keep-alive'
        });
      },
      send: (payload) => {
        res.write(JSON.stringify(payload));
      }
    }

    next();

  }
}

module.exports = new SseMiddleware();
