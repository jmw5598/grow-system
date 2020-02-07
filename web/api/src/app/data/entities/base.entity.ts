import { Column } from 'typeorm';

export class BaseEntity {
  @Column()
  public createdAt!: Date;

  @Column()
  public updatedAt!: Date;
}
