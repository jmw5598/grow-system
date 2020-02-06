import { Column } from 'typeorm';

export class BaseEntity {
  @Column()
  public createAt!: Date;

  @Column()
  public udpatedAt!: Date;
}
