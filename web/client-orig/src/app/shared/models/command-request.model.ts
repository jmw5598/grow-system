export class CommandRequest {
  constructor(
    public command: string,
    public payload?: any
  ) {}
}
