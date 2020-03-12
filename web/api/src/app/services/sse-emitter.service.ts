export class SseEmitterService {
  private static instance: SseEmitterService;
  private _connections: any;

  private constructor() {
    this._connections = [];
  }

  public static getInstance(): SseEmitterService {
    if (!SseEmitterService.instance) {
      SseEmitterService.instance = new SseEmitterService();
    }

    return SseEmitterService.instance;
  }

  public addEmitter(emitter: any): void {
    emitter.on('close', () => this.removeEmitter(emitter));
    emitter.sseSetup();
    emitter.sseSend('');
    this._connections.push(emitter);
  }

  public removeEmitter(emitter: any): void {
    emitter.finished = true;
    this._connections = this._connections.filter((e: any) => !e.finished);
  }

  public emit(payload: any): void {
    this._connections.forEach((e: any) => e.sseSend(payload));
  }
}
