export class Error {
  constructor(
    public error: string,
    public status: number,
    public statusText: string
  ) {}
}
