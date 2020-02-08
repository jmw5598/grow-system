import { CpuInfo } from 'os';

export class SystemDetails {
  constructor(
    public arch: string,
    public type: string,
    public platform: any,
    public release: string,
    public hostname: string,
    public uptime: number,
    public cpus: CpuInfo[],
    public loadavg: number[],
    public freemem: number,
    public totalmem: number,
  ) {}
}
