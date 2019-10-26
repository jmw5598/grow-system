import { Cpu } from './cpu/cpu.model';

export class SystemNodeDetails {
  public arch: string;
  public cpus: Cpu[];
  public freemem: number;
  public hostname: string;
  public loadavg: number[];
  public platform: string;
  public release: string;
  public totalmem: number;
  public type: string;
  public uptime: number;
}
