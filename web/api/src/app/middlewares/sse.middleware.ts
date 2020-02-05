import { Request, Response } from 'express';

export class SseMiddleware {
  public static enrich(req: Request, res: Response | any) {
    res.sseSetup = () => {
      res.set({
        'Content-Type': 'text/event-stream',
        'Cache-Control': 'no-cache',
        Connection: 'keep-alive',
      });
    };

    res.sseSend = (payload: any) => {
      const data: string = JSON.stringify(payload);
      res.write(`event: message\n`);
      res.write(`data: ${data}\n\n`);
    };
  }
}